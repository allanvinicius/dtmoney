import { SectionHeader } from './styles';
import logo from '../../assets/logo.svg';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <SectionHeader>
            <div className="container">
                <img src={logo} alt="dtmoney" />

                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </div>
        </SectionHeader>
    );
}