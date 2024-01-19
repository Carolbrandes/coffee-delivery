import { useEffect, useState } from 'react';
import { useCoffee } from '../../../../hooks/useCoffee';
import * as S from './styles';

interface QuantityProps {
    quantity: number
    itemName: string
}

export const Quantity = ({ quantity, itemName }: QuantityProps) => {
    const [inputQtd, setInputQtd] = useState(quantity)
    const { updateItemQuantity } = useCoffee()


    const handleDecrement = () => {
        const newQuantity = Math.max(0, quantity - 1);
        updateItemQuantity(itemName, newQuantity);
    };

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        updateItemQuantity(itemName, newQuantity);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputQtd(+value)

        if (/^\d+$/.test(value)) {
            const newQuantity = parseInt(value, 10);
            updateItemQuantity(itemName, newQuantity);
        }
    };



    return (
        <S.Quantity>
            <button onClick={handleDecrement}>-</button>
            <input
                type="text"
                value={inputQtd}
                onChange={handleInputChange}
            />
            <button onClick={handleIncrement}>+</button>
        </S.Quantity>
    );

}
