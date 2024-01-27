import logo from "../../assets/Logo.svg";
import locationIcon from "../../assets/location-icon.svg";
import cartIcon from "../../assets/cart-icon.svg";
import * as S from "./styles.ts";
import { useCoffee } from "../../hooks/useCoffee.tsx";
import { Link } from "react-router-dom";

export const Header = () => {
  const {
    coffeState: { totalCartItems },
  } = useCoffee();

  return (
    <S.Container>
      <div>
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="ícone com copo de café com tampa à esquerda e do lado direito o texto Coffee Delivery"
            />
          </Link>
        </div>

        <S.Info>
          <S.Location>
            <img
              src={locationIcon}
              alt="ícone da balão para indicar a localização"
            />
            Porto Alegre, RS
          </S.Location>

          <S.Cart>
            <Link to="/checkout">
              <img src={cartIcon} alt="ícone carrinho de compras" />
              <div>{totalCartItems}</div>
            </Link>
          </S.Cart>
        </S.Info>
      </div>
    </S.Container>
  );
};
