import * as S from "./styles";
import { Coffee } from "./components/Coffee";
import { useCoffee } from "../../hooks/useCoffee";

export const Shelf = () => {
  const {
    coffeState: { products },
  } = useCoffee();

  return (
    <S.CoffeeShelf>
      <h2>Nossos cafés</h2>

      <div>
        {products?.map((coffee) => (
          <Coffee key={coffee.name} coffee={coffee} />
        ))}
      </div>
    </S.CoffeeShelf>
  );
};
