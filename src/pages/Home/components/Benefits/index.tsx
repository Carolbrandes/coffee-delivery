import * as S from "./styles.ts";
import benefitIcon1 from '../../../../assets/benefit-icon-1.svg'
import benefitIcon2 from '../../../../assets/benefit-icon-2.svg'
import benefitIcon3 from '../../../../assets/benefit-icon-3.svg'
import benefitIcon4 from '../../../../assets/benefit-icon-4.svg'

export const Benefits = () => {
    const benefits = [
        {
            img: benefitIcon1,
            text: "Compra simples e segura",
            alt: "ícone de carrinho de compras com fundo laranja"
        },
        {
            img: benefitIcon2,
            text: "Entrega rápida e rastreada",
            alt: "ícone de relógio com fundo amarelo"
        },
        {
            img: benefitIcon3,
            text: "Embalagem mantém o café intacto",
            alt: "ícone de embalagem com fundo cinza escuro"
        },
        {
            img: benefitIcon4,
            text: "O café chega fresquinho até você",
            alt: "ícone de xícara de café quente com fundo roxo"
        }
    ]
    return (
        <S.Benefits>
            {
                benefits.map(benefit => <div>
                    <img src={benefit.img} alt={benefit.alt} />
                    <span>{benefit.text}</span>
                </div>)
            }
        </S.Benefits>
    );
}