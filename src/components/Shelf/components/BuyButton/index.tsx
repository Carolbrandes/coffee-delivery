import * as S from "./styles.ts";
import buyButton from '../../../../assets/buyButton.svg'
import { useCoffee } from "../../../../hooks/useCoffee.tsx";

interface BuyButtonProps {
    newItem: CoffeeItem

}

export const BuyButton = ({ newItem }: BuyButtonProps) => {
    const { addNewItemToCart } = useCoffee()

    const handleClick = () => addNewItemToCart(newItem)


    return (
        <S.BuyButton title='adicionar no carrinho' onClick={handleClick}>
            <img src={buyButton} alt="carrinho de compras" />
        </S.BuyButton>
    );
}