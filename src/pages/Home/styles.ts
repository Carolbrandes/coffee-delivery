import styled from 'styled-components'

export const Introduction = styled.section`
    width: 63%;
    max-width: 550px;
    padding: 95px 0 71.5px 0;
   
    

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