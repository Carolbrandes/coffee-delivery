import { useState } from "react";
import { useCoffee } from "../../../../hooks/useCoffee";
import buttonAdd from "../../../../assets/icon-button-add.svg";
import buttonRemove from "../../../../assets/icon-button-remove.svg";
import * as S from "./styles";

interface QuantityProps {
  quantity: number;
  itemName: string;
}

export const Quantity = ({ quantity, itemName }: QuantityProps) => {
  const [inputQtd, setInputQtd] = useState(quantity);
  const { updateItemQuantity } = useCoffee();

  const handleDecrement = () => {
    const newQuantity = Math.max(0, quantity - 1);
    setInputQtd(newQuantity);
    updateItemQuantity(itemName, newQuantity);
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setInputQtd(newQuantity);
    updateItemQuantity(itemName, newQuantity);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Parse the input value as an integer, defaulting to 0 if it's not a valid positive integer
    const newInputQtd = /^\d+$/.test(value) ? parseInt(value, 10) : 0;

    setInputQtd(newInputQtd);
    updateItemQuantity(itemName, newInputQtd);
  };

  return (
    <S.Quantity>
      <button onClick={handleDecrement}>
        <img src={buttonRemove} alt="diminuir" />
      </button>
      <input type="text" value={inputQtd} onChange={handleInputChange} />
      <button onClick={handleIncrement}>
        <img src={buttonAdd} alt="adicionar" />
      </button>
    </S.Quantity>
  );
};
