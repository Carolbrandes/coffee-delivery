import benefitIcon1 from '../../assets/benefit-icon-1.svg'
import * as S from "./styles.ts";

export const Home = () => {
    return (
        <>
            <S.Introduction>

                <h1>
                    Encontre o café perfeito para qualquer hora do dia
                </h1>

                <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>

                <S.Benefits>

                    <div>
                        <img src={benefitIcon1} alt="" />
                        <span>Compra simples e segura</span>
                    </div>

                    <div>
                        <img src={benefitIcon1} alt="" />
                        <span>Compra simples e segura</span>
                    </div>

                    <div>
                        <img src={benefitIcon1} alt="" />
                        <span>Compra simples e segura</span>
                    </div>

                    <div>
                        <img src={benefitIcon1} alt="" />
                        <span>Compra simples e segura</span>
                    </div>

                </S.Benefits>


            </S.Introduction>
        </>
    );
}