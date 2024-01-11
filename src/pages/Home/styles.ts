import styled from 'styled-components'

export const Introduction = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 94px 0 108px 0;

`

export const Content = styled.div`
    width: 63%;
    max-width: 550px;

    h1{
        font-size: 48px;
        font-style: normal;
        font-weight: 800; 
        line-height: 130%; 

        color: ${props => props.theme['base-title']};
        padding-bottom: 1rem;
    }

    h4{
        font-size: 20px;
        font-style: normal;
        font-weight: 400;  
        line-height: 130%;

        color: ${props => props.theme['base-subtitle']};
        padding-bottom: 66px;
    }
`

export const Benefits = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;

    & > div{
        display: flex;
        align-items: center;
        gap: 12px;
    }
`

export const CoffeeShelf = styled.section`
    padding: 32px 0 157px 0;

    h2{
        font-size: 32px;
        font-style: normal;
        font-weight: 800;
        line-height: 130%;
        color: ${props => props.theme['base-subtitle']};
        padding-bottom: 54px;
    }
`

export const CoffeeCard = styled.div`
    width: 256px;
    padding-inline: 24px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 6px 36px;
    background: ${props => props.theme['base-card']}; 
`

export const CoffeeInfo = styled.div`
    margin: 20px 0 33px 0;

    h4{
        color: ${props => props.theme['base-subtitle']};
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; 
        margin-bottom: 8px;
    }

    p{
        color: ${props => props.theme['base-label']};
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }
`

export const Flag = styled.div`
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; 
    text-transform: uppercase; 
    color: ${props => props.theme['yellow-dark']};

    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center; 

    border-radius: 100px;
    background: ${props => props.theme['yellow-light']};

`

export const CoffeeActions = styled.div`
    display: flex;
    width : 100% ;
    justify-content: space-between;
    
    div{
        display: flex;
        gap: 8px;
    }
   
`

export const Price = styled.div`
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; 
    color: ${props => props.theme['base-text']};

    span{
        font-size: 14px;
        font-style: normal;
        font-weight: 400; 
    }


`

export const Quantity = styled.div`
    height: 38px;
    padding: 8px;
    border-radius: 6px;
    background: ${props => props.theme['base-button']}; 

    button, input{
        border: none;
        outline: none;
        background: inherit;
    }

    button{
        color: ${props => props.theme.purple};
    }

    input{
        max-width: 30px;
        text-align: center;
    }
`

export const BuyButton = styled.button`
    border: 0;
    outline: 0;
    background: transparent;
`