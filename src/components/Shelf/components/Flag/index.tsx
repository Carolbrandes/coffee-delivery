import * as S from './styles'

interface FlagProps {
    flag: {
        name: string
        label: string
    }
}

export const Flag = ({ flag: { label } }: FlagProps) => {
    return (

        <S.Flag>{label}</S.Flag>

    )
}


