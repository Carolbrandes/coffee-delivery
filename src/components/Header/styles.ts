import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.background};
    z-index: 1;
   

    & > div{
        max-width: 74rem;
        margin-inline: auto;
        padding: 2.5rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export const Location = styled.div`
    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
    font-size: 0.875rem; 
    padding: 0.5rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
`

export const Cart = styled.div`
    background: ${props => props.theme["yellow-light"]};
    border-radius: 6px; 
    padding: 0.5rem;
    position: relative;
    
    
    
    div{
        position: absolute;
        top: -0.3125rem;
        right: -0.5625rem;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        background-color: ${props => props.theme["yellow-dark"]};
        color: ${props => props.theme.white};
        font-size: 0.75rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`