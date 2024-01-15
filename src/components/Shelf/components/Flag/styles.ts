import { styled } from "styled-components";

export const Flag = styled.div`
    width: fit-content;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; 
    text-transform: uppercase; 
    color: ${props => props.theme['yellow-dark']};

    display: flex;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    align-items: center; 

    border-radius: 100px;
    background: ${props => props.theme['yellow-light']};

`