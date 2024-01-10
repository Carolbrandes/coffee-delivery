import logo from '../../assets/Logo.svg'
import locationIcon from '../../assets/location-icon.svg'
import cartIcon from '../../assets/cart-icon.svg'
import * as S from "./styles.ts";


export const Header = () => {
    return (
        <S.Container>
            <div>
                <img src={logo} alt="ícone com copo de café com tampa à esquerda e do lado direito o texto Coffee Delivery" />
            </div>

            <S.Info>
                <S.Location>
                    <img src={locationIcon} alt="ícone da balão para indicar a localização" />

                    Porto Alegre, RS
                </S.Location>


                <img src={cartIcon} alt="ícone carrinho de compras" />
            </S.Info>
        </S.Container>
    );
}