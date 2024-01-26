import { styled } from "styled-components";

export const Container = styled.section`
    padding: 6.25rem 0 15rem 0;
    display: grid;
    grid-template-columns: 2fr 1.65fr;
    gap: 32px;

    h1{
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1.125rem;
        font-weight: 700;
        padding-bottom: 0.9375rem;
    }

    h2{
        color: ${props => props.theme["base-subtitle"]};
        font-size: 1rem;
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        font-style: normal;
        font-weight: 400;

        & > div {
            span{
                font-size: 0.875rem;
                color: ${props => props.theme["base-text"]};
            }
        }

    }

    .containerTotal{
        & > div{
            border-radius: 6px 44px;
        }
    }
`

export const Box = styled.div`
    border-radius: 6px;
    background: ${props => props.theme["base-card"]}; 

    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 12px;

`










