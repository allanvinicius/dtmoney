import styled from "styled-components";

export const SectionSummary = styled.div`
    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 3.2rem;

        li {
            background-color: var(--shape);
            border-radius: 0.5rem;
            padding: 2.5rem 2rem 1.8rem 3.2rem;

            &:last-child {
                background-color: var(--green);

                .top {
                    span {
                        color: var(--shape);
                    }
                }

                h2 {
                    color: var(--shape);
                }
            }

            .top {
                display: flex;
                align-items: center;
                justify-content: space-between;

                span {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 1.6rem;
                    line-height: 2.4rem;
                    color: var(--text-title);
                }
            }

            h2 {
                font-style: normal;
                font-weight: normal;
                font-size: 3.6rem;
                line-height: 5.4rem;
                color: var(--text-title);
            }
        }
    }
`;