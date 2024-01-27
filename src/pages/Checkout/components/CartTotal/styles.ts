import { styled } from "styled-components";

export const Summary = styled.div`
    padding-top: 1.5rem;
    color: ${props => props.theme["base-text"]};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; 

    & > div {
        display: flex;
        justify-content: space-between;
        padding-bottom: 0.75rem;

        &:nth-child(3){
            color: ${props => props.theme["base-subtitle"]};
            font-size: 1.25rem;
            font-weight: 700;
            padding-bottom: 1.5rem ;
        }
    }

    .buttonToFinalizateOrder{
        a{
            display: block;
            border-radius: 6px;
            background: ${props => props.theme.yellow};
            padding: 0.75rem 0.5rem;
            color: #fff;
            width: 100%;
            text-align: center;
            text-decoration: none;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 700;
            line-height: 160%;
            text-transform: uppercase;
        }
    }
`

