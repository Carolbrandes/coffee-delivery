import * as S from './styles';

interface QuantityProps {
    quantity: number
    onUpdateQuantity: (newQtd: number) => void
}

export const Quantity = ({ quantity, onUpdateQuantity }: QuantityProps) => {

    return (
        <S.Quantity>
            <button onClick={() => onUpdateQuantity(1)}>-</button>
            <input type="text" value={quantity} />
            <button onClick={() => onUpdateQuantity(1)}>+</button>
        </S.Quantity>
    );
}
