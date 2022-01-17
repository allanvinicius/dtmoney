import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { ContentModal, TransactionType, RadioBox } from './styles';
import close from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const { createTransaction } = useTransactions();

    const [type, setType] = useState('deposito');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type,
        });

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposito');
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={close} alt="Fechar modal" />
            </button>

            <ContentModal onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Preço"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionType>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposito')}
                        isActive={type === 'deposito'}
                        activeColor="green"
                    >
                        <img src={income} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType('retirada')}
                        isActive={type === 'retirada'}
                        activeColor="red"
                    >
                        <img src={outcome} alt="saida" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionType>

                <input
                    value={category}
                    placeholder="Categoria"
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </ContentModal>
        </Modal>
    );
}