import React from 'react'
import * as S from './styles'
import { coffeelist } from './coffeeList'
import { Coffee } from './components/Coffee'

export const Shelf = () => {



    const coffeeListFormatted = coffeelist.map((coffee) => ({
        ...coffee, priceFormatted: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(coffee.price!)
    }))


    return (
        <S.CoffeeShelf>
            <h2>Nossos cafés</h2>

            <div>
                {
                    coffeeListFormatted.map(coffee => (<Coffee key={coffee.name} coffee={coffee} />))
                }
            </div>
        </S.CoffeeShelf>

    )
}


