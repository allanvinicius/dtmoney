import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { SectionSummary } from './styles';

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposito') {
            acc.depositos += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.retiradas += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        depositos: 0,
        retiradas: 0,
        total: 0,
    })

    return (
        <SectionSummary>
            <ul>
                <li>
                    <div className="top">
                        <span>Entradas</span>
                        <img src={income} alt="" />
                    </div>

                    <h2>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.depositos)}
                    </h2>
                </li>

                <li>
                    <div className="top">
                        <span>Saídas</span>
                        <img src={outcome} alt="" />
                    </div>

                    <h2>
                        -
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.retiradas)}
                    </h2>
                </li>

                <li>
                    <div className="top">
                        <span>Total</span>
                        <img src={total} alt="" />
                    </div>

                    <h2>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.total)}
                    </h2>
                </li>
            </ul>
        </SectionSummary>
    );
}