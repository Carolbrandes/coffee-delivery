import { styled } from "styled-components";

export const CheckoutItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme["base-button"]};
    padding: 1.5rem 0 1.5rem 0;

    .itemDetails{
        display: flex;
        gap: 1.25rem;  
        
        .imageContainer{
            width: 4rem;
            height: 4rem;

            img{
                width: 100%;
            }
        }
    }

    .details{
       
        p{
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            color: ${props => props.theme["base-subtitle"]};
            margin-bottom: 0.5rem;
        }

        .quantityContainer{
            display: flex;
            align-items: center;
            gap: 0.5rem;

            button{
                border-radius: 6px;
                background: ${props => props.theme["base-button"]};
                display: flex;
                height:  2.375rem ;
                padding: 0rem 0.5rem;
                justify-content: center;
                align-items: center;
                gap: 0.25rem;
                border: none;
                outline: none;

                font-size: 0.75rem;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; 
                text-transform: uppercase;
                color: ${props => props.theme["base-text"]}
            }
        }
    }

    .price{
        color: ${props => props.theme["base-text"]};
        text-align: right;
        font-style: normal;
        font-weight: 700;
    }
`

