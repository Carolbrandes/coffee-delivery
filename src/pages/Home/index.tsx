import imageCoffeeIntro from '../../assets/home-intro.png'
import { Shelf } from '../../components/Shelf'
import { useMedia } from '../../hooks/useMedia.tsx';
import { Benefits } from './components/Benefits/index.tsx';
import * as S from "./styles.ts";

export const Home = () => {
    const screenSize = useMedia()

    return (

        <>
            <S.Introduction>

                <S.Content>
                    <h1>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>

                    <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>

                    <Benefits />
                </S.Content>


                {
                    screenSize !== 'small' && <img src={imageCoffeeIntro} alt="imagem do copo de café com grãos ao redor" />
                }

            </S.Introduction>

            <Shelf />
        </>


    );
}