import { AdressForm } from "./components/AdressForm";
import { CartTotal } from "./components/CartTotal";
import { PaymentsMethods } from "./components/PaymentsMethods";

import * as S from "./styles";

export const Checkout = () => {
  return (
    <S.Container>
      <div>
        <h1>Complete seu pedido</h1>

        <S.Box>
          <AdressForm />
        </S.Box>

        <S.Box>
          <PaymentsMethods />
        </S.Box>
      </div>

      <div className="containerTotal">
        <h1>Cafés selecionados</h1>

        <S.Box>
          <CartTotal />
        </S.Box>
      </div>
    </S.Container>
  );
};
