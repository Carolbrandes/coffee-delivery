import { styled } from "styled-components"

export const CoffeeCard = styled.div`
    width: 16rem;
    padding: 0 1.5rem 1.25rem 1.5rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border-radius: 6px 36px;
    background: ${props => props.theme['base-card']}; 
`

export const CoffeeInfo = styled.div`
    position: relative;
    top: -1.25rem;
    margin-bottom: 2.0625rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        margin-bottom: 0.75rem;
    }

    h4{
        color: ${props => props.theme['base-subtitle']};
        text-align: center;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; 
        margin: 1rem 0 0.5rem 0;
    }

    p{
        color: ${props => props.theme['base-label']};
        text-align: center;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }
`

export const CoffeeActions = styled.div`
    display: flex;
    width : 100% ;
    justify-content: space-between;
    
    div{
        display: flex;
        gap: 0.5rem;
    }
   
`

export const Price = styled.div`
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; 
    color: ${props => props.theme['base-text']};

    span{
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400; 
    }


`

