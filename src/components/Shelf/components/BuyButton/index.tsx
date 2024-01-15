import * as S from "./styles.ts";
import buyButton from '../../../../assets/buyButton.svg'

export const BuyButton = () => {
    return (
        <S.BuyButton title='adicionar no carrinho'>
            <img src={buyButton} alt="" />
        </S.BuyButton>
    );
}