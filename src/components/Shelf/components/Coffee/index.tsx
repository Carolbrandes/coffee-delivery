import * as S from './styles'
import coffeeExpress from '../../../../assets/Coffee-express.svg'
import { Flag } from '../Flag'
import { Quantity } from '../Quantity'
import { BuyButton } from '../BuyButton'

export const Coffee = () => {
    return (
        <S.CoffeeCard>
            <S.CoffeeInfo>
                <img src={coffeeExpress} alt="café expresso na xícara visto de cima" />

                <Flag />

                <h4>Expresso Tradicional</h4>
                <p>O tradicional café feito com água quente e grãos moídos</p>
            </S.CoffeeInfo>

            <S.CoffeeActions>
                <S.Price> <span>R$</span> 9,90</S.Price>

                <div>
                    <Quantity />
                    <BuyButton />
                </div>
            </S.CoffeeActions>
        </S.CoffeeCard>
    )
}


