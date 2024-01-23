import * as S from "./styles";
import { Input } from "../../components/Input";

export const Checkout = () => {
    return (
        <S.Container>
            <div>
                <h1>Complete seu pedido</h1>

                <S.Box>
                    <h2>
                        <img src="" alt="" />
                        <div>
                            Endereço de Entrega <br />
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </div>
                    </h2>

                    <form>
                        <div>
                            <Input placeholder="CEP" type="text" />
                        </div>

                        <div>
                            <input placeholder="Rua" type="text" />
                        </div>

                        <div>
                            <div>
                                <input placeholder="Número" type="text" />
                            </div>

                            <div>
                                <input placeholder="Complemento" type="text" />
                            </div>
                        </div>

                        <div>
                            <div>
                                <input placeholder="Bairro" type="text" />
                            </div>

                            <div>
                                <input placeholder="Cidade" type="text" />
                            </div>

                            <div>
                                <input placeholder="UF" type="text" />
                            </div>
                        </div>
                    </form>
                </S.Box>
            </div>
        </S.Container>
    );
}