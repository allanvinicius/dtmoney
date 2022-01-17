import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const ContentModal = styled.form`
    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 2.4rem;
        line-height: 3.6rem;
        color: var(--text-title);
        margin-bottom: 3.2rem;
    }

    input {
        flex: 1;
        width: 100%;
        height: 6.4rem;
        padding: 0 2.4rem;
        border: 1px solid #D7D7D7;
        border-radius: 0.5rem;
        background-color: var(--input);

        font-weight: 400;
        font-size: 1.6rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1.6rem;
        }
    }

    button[type="submit"] {
        background-color: var(--green);
        border-radius: 0.5rem;
        width: 100%;
        height: 6.4rem;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        font-style: normal;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: var(--shape);
        margin-top: 2.4rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionType = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33CC95',
    red: '#E52E4D'
};

export const RadioBox = styled.button<RadioBoxProps>`
    width: 100%;
    max-width: 23.6rem;
    height: 6.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid rgba(150, 156, 178, 0.2);
    border-radius: 0.5rem;
    transition: border-color 0.2s;

    background-color: ${(props) => props.isActive ?
        transparentize(0.9, colors[props.activeColor])
        : 'transparent'
    };

    &:hover {
        border-color: ${darken(0.1, '#D7D7D7')};
    }

    img {
        margin-right: 1.6rem;
    }

    span {
        font-style: normal;
        font-weight: normal;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: var(--text-title);
    }
`;