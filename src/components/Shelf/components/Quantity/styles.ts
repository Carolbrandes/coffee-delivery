import { styled } from "styled-components";

export const Quantity = styled.div`
    height: 2.375rem;
    padding: 0.5rem;
    border-radius: 0.375rem;
    background: ${props => props.theme['base-button']}; 

    button, input{
        border: none;
        outline: none;
        background: inherit;
    }

    button{
        color: ${props => props.theme.purple};
    }

    input{
        max-width: 1.875rem;
        text-align: center;
    }
`
