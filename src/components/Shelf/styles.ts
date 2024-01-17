import { styled } from "styled-components";

export const CoffeeShelf = styled.section`
    padding: 2rem 0 9.8125rem 0;

    h2{
        font-size: 2rem;
        font-style: normal;
        font-weight: 800;
        line-height: 130%;
        color: ${props => props.theme['base-subtitle']};
        padding-bottom: 3.375rem;
    }


    & > div{
        &:first-of-type{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 2rem;
            row-gap: 2.5rem;

            @media screen and (min-width: 1200px) {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    }
`