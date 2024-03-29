import { styled } from "styled-components"

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const InputContainer = styled.div`
    width: 30%;
 
`

export const InputContainer_grid2 = styled.div`
    display: grid;
    grid-template-columns: 30% 2fr;
    gap: 0.75rem;
 
`

export const InputContainer_grid3 = styled.div`
    display: grid;
    grid-template-columns: 30% 2fr 0.5fr;
    gap: 0.75rem;
 
`

export const InputInfo = styled.div`
   
    position: relative;
    

    span{
        position: absolute;
        right: 1.0625rem;
        top: 50%;
        transform: translateY(-50%);

        color: ${props => props.theme["base-label"]};
        font-size: 0.75rem;
        font-style: italic;
        font-weight: 400;
        line-height: 130%; 
    }
`