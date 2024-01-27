import { styled } from "styled-components";

export const PaymentsMethods = styled.div`
    width: 100%;
    display: flex;
    gap: 0.75rem;

    button{
        max-width: 11.125rem;
        border: none;
        outline: 0;
        border-radius: 6px;
        background: ${props => props.theme["base-button"]};
        display: flex;
        padding: 1rem;
        align-items: center;
        gap: 0.75rem;
        flex: 1 0 0;

        color: ${props => props.theme["base-text"]};
        font-size: 0.6875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; 
        text-transform: uppercase;
    }
`