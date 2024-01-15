import styled from 'styled-components'

export const Introduction = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5.875rem 0 6.75rem 0;

`

export const Content = styled.div`
    width: 63%;
    max-width: 34.375rem;

    h1{
        font-size: 3rem;
        font-style: normal;
        font-weight: 800; 
        line-height: 130%; 

        color: ${props => props.theme['base-title']};
        padding-bottom: 1rem;
    }

    h4{
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;  
        line-height: 130%;

        color: ${props => props.theme['base-subtitle']};
        padding-bottom: 4.125rem;
    }
`







