import { styled } from "styled-components";

export const CheckoutItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme["base-button"]};
    padding: 24px 0 24px 0;

    .itemDetails{
        display: flex;
        gap: 20px;  
        
        .imageContainer{
            width: 64px;
            height: 64px;

            img{
                width: 100%;
            }
        }
    }

    .details{
       
        p{
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            color: ${props => props.theme["base-subtitle"]};
            margin-bottom: 8px;
        }

        .quantityContainer{
            display: flex;
            align-items: center;
            gap: 8px;

            button{
                border-radius: 6px;
                background: ${props => props.theme["base-button"]};
                display: flex;
                height:  2.375rem ;
                padding: 0px 8px;
                justify-content: center;
                align-items: center;
                gap: 4px;
                border: none;
                outline: none;

                font-size: 12px;
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

