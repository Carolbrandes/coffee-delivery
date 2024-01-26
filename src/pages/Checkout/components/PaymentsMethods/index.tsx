import * as S from "./styles";
import credit from "../../../../assets/credit-card-icon.svg";
import debit from "../../../../assets/debit-icon.svg";
import money from "../../../../assets/money-icon.svg";
import payment from "../../../../assets/payment-icon.svg";

export const PaymentsMethods = () => {
  return (
    <>
      <h2>
        <img src={payment} alt="ícone de cédula de dinheiro" />
        <div>
          Pagamento <br />
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </h2>

      <S.PaymentsMethods>
        <button>
          <img src={credit} alt="ícone cartão de crédito" /> Cartão de crédito
        </button>
        <button>
          <img src={debit} alt="ícone cartão de débito" /> cartão de débito
        </button>
        <button>
          <img src={money} alt="ícone dinheiro" /> dinheiro
        </button>
      </S.PaymentsMethods>
    </>
  );
};
