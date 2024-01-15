import React from 'react'
import * as S from './styles'
import { Coffee } from './components/Coffee'

export const Shelf = () => {
    return (
        <S.CoffeeShelf>
            <h2>Nossos cafés</h2>

            <Coffee />
        </S.CoffeeShelf>

    )
}


