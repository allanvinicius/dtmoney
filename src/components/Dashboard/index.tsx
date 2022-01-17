import { SectionDashboard } from "./styles";
import { TransactionsTable } from "../TransactionsTable";
import { Summary } from "../Summary";

export function Dashboard() {
    return (
        <SectionDashboard>
            <div className="container">
                <Summary />
                <TransactionsTable />
            </div>
        </SectionDashboard>

    );
}