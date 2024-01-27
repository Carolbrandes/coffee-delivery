import { Link } from "react-router-dom";
import { useCoffee } from "../../../../hooks/useCoffee";
import { formatCurrency } from "../../../../utils/formatCurrency";
import { CheckoutItem } from "./CheckoutItem";
import * as S from "./styles";

export const CartTotal = () => {
  const {
    coffeState: { cartItems, totalValue },
  } = useCoffee();

  const deliveryValue = 3.5;
  const deliveryValueFormatted = formatCurrency(deliveryValue!);

  const formattedTotalValueItems = formatCurrency(totalValue);

  const total = formatCurrency(totalValue + deliveryValue);

  return (
    <div>
      <div>
        {cartItems.map((item) => (
          <CheckoutItem item={item} />
        ))}
      </div>

      <S.Summary>
        <div>
          <span>Total de itens</span>
          <span>{formattedTotalValueItems}</span>
        </div>

        <div>
          <span>Entrega</span>
          <span>{deliveryValueFormatted}</span>
        </div>

        <div>
          <b>Total</b>
          <span>{total}</span>
        </div>

        <div className="buttonToFinalizateOrder">
          <Link to="/orderplaced">confirmar pedido</Link>
        </div>
      </S.Summary>
    </div>
  );
};
