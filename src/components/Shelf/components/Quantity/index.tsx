import * as S from './styles';

export const Quantity = () => {
    return (
        <S.Quantity>
            <button>-</button>
            <input type="text" value={1} />
            <button>+</button>
        </S.Quantity>
    );
}
