import { Input } from "../../../../components/Input";
import * as S from "./styles.ts";
import iconLocation from "../../../../assets/location-icon-yellow.svg";

export const AdressForm = () => {
  return (
    <>
      <h2>
        <img src={iconLocation} alt="ícone de localização" />
        <div>
          Endereço de Entrega <br />
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </h2>

      <S.Form>
        <S.InputContainer>
          <Input placeholder="CEP" />
        </S.InputContainer>

        <div>
          <Input placeholder="Rua" />
        </div>

        <S.InputContainer_grid2>
          <div>
            <Input placeholder="Número" />
          </div>

          <div>
            <Input placeholder="Complemento" />
          </div>
        </S.InputContainer_grid2>

        <S.InputContainer_grid3>
          <div>
            <Input placeholder="Bairro" />
          </div>

          <div>
            <Input placeholder="Cidade" />
          </div>

          <div>
            <Input placeholder="UF" />
          </div>
        </S.InputContainer_grid3>
      </S.Form>
    </>
  );
};
