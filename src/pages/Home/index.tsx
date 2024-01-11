import benefitIcon1 from '../../assets/benefit-icon-1.svg'
import imageCoffeeIntro from '../../assets/home-intro.png'
import coffeeExpress from '../../assets/Coffee-express.svg'
import buyButton from '../../assets/buyButton.svg'
import * as S from "./styles.ts";

export const Home = () => {
    return (
        <>
            <S.Introduction>

                <S.Content>
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
                </S.Content>


                <img src={imageCoffeeIntro} alt="imagem do copo de café com grãos ao redor" />
            </S.Introduction>

            <S.CoffeeShelf>
                <h2>Nossos cafés</h2>

                <S.CoffeeCard>
                    <img src={coffeeExpress} alt="café expresso na xícara visto de cima" />

                    <S.CoffeeInfo>
                        <S.Flag>Tradicional</S.Flag>
                        <h4>Expresso Tradicional</h4>
                        <p>O tradicional café feito com água quente e grãos moídos</p>
                    </S.CoffeeInfo>

                    <S.CoffeeActions>
                        <S.Price> <span>R$</span> 9,90</S.Price>

                        <div>
                            <S.Quantity>
                                <button>-</button>
                                <input type="text" value={1} />
                                <button>+</button>
                            </S.Quantity>
                            <S.BuyButton title='adicionar no carrinho'>
                                <img src={buyButton} alt="" />
                            </S.BuyButton>
                        </div>
                    </S.CoffeeActions>
                </S.CoffeeCard>
            </S.CoffeeShelf>
        </>
    );
}