import * as S from "./styles.ts";
import buyButton from '../../../../assets/buyButton.svg'
import { useCart } from "../../../../hooks/useCart.tsx";

interface BuyButtonProps {
    newItem: CartItem

}

export const BuyButton = ({ newItem }: BuyButtonProps) => {
    const { addNewItemToCart } = useCart()

    function handleClick() {

        addNewItemToCart(newItem)
    }

    return (
        <S.BuyButton title='adicionar no carrinho' onClick={handleClick}>
            <img src={buyButton} alt="" />
        </S.BuyButton>
    );
}