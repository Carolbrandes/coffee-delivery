import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem; 
    border-radius: 4px;
    border: 1px solid ${props => props.theme["base-button"]};
    background: ${props => props.theme["base-input"]}; 
    outline: 0;

    color: ${props => props.theme["base-text"]};
    font-size: 0.875rem;
    
    &::placeholder{
        color: ${props => props.theme["base-label"]};
        font-size: 0.875rem;
    }
`