import logo from '../../assets/Logo.svg'
import locationIcon from '../../assets/location-icon.svg'
import cartIcon from '../../assets/cart-icon.svg'
import * as S from "./styles.ts";
import { useCoffee } from '../../hooks/useCoffee.tsx';


export const Header = () => {
    const { coffeState: { totalCartItems } } = useCoffee()
    console.log("🚀 ~ Header ~ totalCartItems:", totalCartItems)


    return (
        <S.Container>
            <div>
                <div>
                    <img src={logo} alt="ícone com copo de café com tampa à esquerda e do lado direito o texto Coffee Delivery" />
                </div>

                <S.Info>
                    <S.Location>
                        <img src={locationIcon} alt="ícone da balão para indicar a localização" />

                        Porto Alegre, RS
                    </S.Location>


                    <S.Cart>
                        <img src={cartIcon} alt="ícone carrinho de compras" />
                        <div>
                            {totalCartItems}
                        </div>
                    </S.Cart>
                </S.Info>
            </div>
        </S.Container>
    );
}