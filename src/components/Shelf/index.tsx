import React from 'react'
import * as S from './styles'
import { Coffee } from './components/Coffee'
import { useCoffee } from '../../hooks/useCoffee'

export const Shelf = () => {

    const { coffeState } = useCoffee()
    const { items } = coffeState

    return (
        <S.CoffeeShelf>
            <h2>Nossos cafés</h2>

            <div>
                {
                    items.map(coffee => (<Coffee key={coffee.name} coffee={coffee} />))
                }
            </div>
        </S.CoffeeShelf>

    )
}


