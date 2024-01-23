import * as S from "./styles";

interface InputProps extends React.ComponentProps<'input'> { }

export const Input = ({ ...rest }: InputProps) => {
    return (
        <S.Input {...rest} />
    );
}