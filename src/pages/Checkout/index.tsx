import { AdressForm } from "./components/AdressForm";
import * as S from "./styles";
import credit from "../../assets/credit-card-icon.svg";
import debit from "../../assets/debit-card.svg";
import money from "../../assets/money.svg";

export const Checkout = () => {
  return (
    <S.Container>
      <div>
        <h1>Complete seu pedido</h1>

        <S.Box>
          <AdressForm />
        </S.Box>

        <S.Box>
          <h2>
            <img src="" alt="" />
            <div>
              Pagamento <br />
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </h2>

          <S.PaymentsMethods>
            <button>
              <img src={credit} alt="ícone cartão de crédito" /> Cartão de
              crédito
            </button>
            <button>
              <img src={debit} alt="ícone cartão de débito" /> cartão de débito
            </button>
            <button>
              <img src={money} alt="ícone dinheiro" /> dinheiro
            </button>
          </S.PaymentsMethods>
        </S.Box>
      </div>
    </S.Container>
  );
};
