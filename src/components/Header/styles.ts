import styled from "styled-components";

export const SectionHeader = styled.header`
    background-color: var(--blue);
    padding-top: 3.2rem;
    padding-bottom: 13.2rem;

    .container {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    button {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        font-style: normal;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: var(--shape);
        background-color: var(--blue-light);
       padding: 1.2rem 3.2rem;
       transition: filter 0.2s;

       &:hover {
            filter: brightness(0.9);
       }
    }
`;