import { useCoffee } from "../../../../hooks/useCoffee";
import { CheckoutItem } from "./CheckoutItem";

export const CartTotal = () => {
  const { coffeState } = useCoffee();

  return (
    <div>
      {coffeState.cartItems.map((item) => (
        <CheckoutItem item={item} />
      ))}
    </div>
  );
};
