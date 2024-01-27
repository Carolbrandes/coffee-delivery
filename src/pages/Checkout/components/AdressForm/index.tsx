import { Input } from "../../../../components/Input";
import * as S from "./styles.ts";
import iconLocation from "../../../../assets/location-icon-yellow.svg";
import { useForm, Controller } from "react-hook-form";

export const AdressForm = ({ onSubmitHandler }: any) => {
  const { control, setValue, formState, handleSubmit } = useForm();

  const handleComplementoChange = (e) => {
    const value = e.target.value;
    setValue("complemento", value || ""); // Set to an empty string if the value is falsy
  };

  return (
    <>
      <h2>
        <img src={iconLocation} alt="ícone de localização" />
        <div>
          Endereço de Entrega <br />
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </h2>

      <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
        <S.InputContainer>
          <Controller
            name="cep"
            control={control}
            defaultValue=""
            rules={{ required: "CEP é um campo obrigatório" }}
            render={({ field }) => (
              <div>
                <Input {...field} placeholder="CEP" />
                {formState.errors.cep && (
                  <span>{formState.errors.cep.message as string}</span>
                )}
              </div>
            )}
          />
        </S.InputContainer>

        <div>
          <Controller
            name="rua"
            control={control}
            defaultValue=""
            rules={{ required: "Rua é um campo obrigatório" }}
            render={({ field }) => (
              <div>
                <Input {...field} placeholder="Rua" />
                {formState.errors.rua && (
                  <span>{formState.errors.rua.message as string}</span>
                )}
              </div>
            )}
          />
        </div>

        <S.InputContainer_grid2>
          <div>
            <Controller
              name="numero"
              control={control}
              defaultValue=""
              rules={{ required: "Número é um campo obrigatório" }}
              render={({ field }) => (
                <div>
                  <Input {...field} placeholder="Número" />
                  {formState.errors.numero && (
                    <span>{formState.errors.numero.message as string}</span>
                  )}
                </div>
              )}
            />
          </div>

          <S.InputInfo>
            <Controller
              name="complemento"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <Input
                    {...field}
                    placeholder="Complemento"
                    onChange={(e) => {
                      handleComplementoChange(e);
                      field.onChange(e);
                    }}
                  />
                  {formState.errors.complemento && (
                    <span>
                      {formState.errors.complemento.message as string}
                    </span>
                  )}
                </div>
              )}
            />
            <span>Opcional</span>
          </S.InputInfo>
        </S.InputContainer_grid2>

        <S.InputContainer_grid3>
          <div>
            <Controller
              name="bairro"
              control={control}
              defaultValue=""
              rules={{ required: "Bairro é um campo obrigatório" }}
              render={({ field }) => (
                <div>
                  <Input {...field} placeholder="Bairro" />
                  {formState.errors.bairro && (
                    <span>{formState.errors.bairro.message as string}</span>
                  )}
                </div>
              )}
            />
          </div>

          <div>
            <Controller
              name="cidade"
              control={control}
              defaultValue=""
              rules={{ required: "Cidade é um campo obrigatório" }}
              render={({ field }) => (
                <div>
                  <Input {...field} placeholder="Cidade" />
                  {formState.errors.cidade && (
                    <span>{formState.errors.cidade.message as string}</span>
                  )}
                </div>
              )}
            />
          </div>

          <div>
            <Controller
              name="uf"
              control={control}
              defaultValue=""
              rules={{ required: "UF é um campo obrigatório" }}
              render={({ field }) => (
                <div>
                  <Input {...field} placeholder="UF" />
                  {formState.errors.uf && (
                    <span>{formState.errors.uf.message as string}</span>
                  )}
                </div>
              )}
            />
          </div>
        </S.InputContainer_grid3>
      </S.Form>
    </>
  );
};
