import * as S from "./styles";
import deleteIcon from "../../../../../assets/delete-icon.svg";
import { useCoffee } from "../../../../../hooks/useCoffee";
import { Quantity } from "../../../../../components/Shelf/components/Quantity";
import { formatCurrency } from "../../../../../utils/formatCurrency";

interface CheckoutItemProps {
  item: CoffeeItem;
}

export const CheckoutItem = ({ item }: CheckoutItemProps) => {
  const { removeItemToCart } = useCoffee();
  const totalItem = formatCurrency(item.price * item.quantity!);

  return (
    <S.CheckoutItem>
      <div className="itemDetails">
        <div className="imageContainer">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="details">
          <p>{item.name}</p>
          <div className="quantityContainer">
            <Quantity itemName={item.name} quantity={item.quantity} />
            <button onClick={() => removeItemToCart(item.name)}>
              <img src={deleteIcon} alt="excluir item" /> Remover
            </button>
          </div>
        </div>
      </div>

      <div className="price">{totalItem}</div>
    </S.CheckoutItem>
  );
};
