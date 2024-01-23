import { styled } from "styled-components";

export const Container = styled.section`
    padding: 100px 0 240px 0;

    h1{
        color: ${props => props.theme["base-subtitle"]};
        font-size: 18px;
        font-weight: 700;
        padding-bottom: 15px;
    }
`

export const Box = styled.div`
    border-radius: 6px;
    background: ${props => props.theme["base-card"]}; 

    display: flex;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch; 
`