import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`

export const Location = styled.div`
    background: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']};
    font-size: 0.875rem; 
    padding: 0.5rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
`