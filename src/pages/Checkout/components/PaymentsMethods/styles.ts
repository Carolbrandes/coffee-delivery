import { styled } from "styled-components";

export const PaymentsMethods = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;

    button{
        max-width: 178px;
        border: none;
        outline: 0;
        border-radius: 6px;
        background: ${props => props.theme["base-button"]};
        display: flex;
        padding: 16px;
        align-items: center;
        gap: 12px;
        flex: 1 0 0;

        color: ${props => props.theme["base-text"]};
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; 
        text-transform: uppercase;
    }
`