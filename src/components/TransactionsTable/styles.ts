import styled from "styled-components";

export const Transactions = styled.div`
    padding-top: 13.2rem;

    table {
        width: 100%;
        border-spacing: 0 0.8rem;
     
        th {
            font-style: normal;
            font-weight: normal;
            font-size: 1.6rem;
            line-height: 2.4rem;
            color: var(--text-body);
        }

        td {
            padding: 1.6rem 2rem;

            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            border: 0;
            border-radius: 0.5rem;
            background-color: var(--shape);
            color: var(--text-body);

            &:first-child {
                color: var(--text-title);
            }

            &.deposito {
                color: var(--green);
            }

            &.retirada {
                color: var(--red);
            }
        }
    }
`;