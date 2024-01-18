import * as S from './styles'
import { Flag } from '../Flag'
import { Quantity } from '../Quantity'
import { BuyButton } from '../BuyButton'


interface CoffeeProps {
    coffee: {
        name: string
        description: string
        price: number
        priceFormatted: string
        image: string
        flags: Array<{
            name: string
            label: string
        }>
        quantity: number
    }
}

export const Coffee = ({ coffee }: CoffeeProps) => {
    const { name, description, priceFormatted, image, flags, quantity } = coffee


    return (
        <S.CoffeeCard>
            <S.CoffeeInfo>
                <img src={image} alt={name} />

                {
                    flags.map((flag) => <Flag key={flag.name} flag={flag} />)
                }


                <h4>{name}</h4>
                <p>{description}</p>
            </S.CoffeeInfo>

            <S.CoffeeActions>
                <S.Price> {priceFormatted}</S.Price>

                <div>

                    {
                        quantity > 0 && <Quantity quantity={quantity} onUpdateQuantity={handleQuantity} />
                    }


                    <BuyButton newItem={{ ...coffee, quantity: 1 }} />
                </div>
            </S.CoffeeActions>
        </S.CoffeeCard>
    )
}


