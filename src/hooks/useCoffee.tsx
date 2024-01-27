import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { coffeeReducer } from "../reducers/coffee/reducer";
import {
  addNewItemAction,
  removeItemAction,
  updateItemQuantityAction,
} from "../reducers/coffee/actions";
import { coffeelist } from "../coffeeList";
import { formatCurrency } from "../utils/formatCurrency";

interface CoffeeProviderProps {
  children: ReactNode;
}

interface CoffeeContextData {
  coffeState: CoffeeState;
  addNewItemToCart: (newItem: CoffeeItem) => void;
  removeItemToCart: (itemNameToRemove: string) => void;
  updateItemQuantity: (itemName: string, newQuantity: number) => void;
}

const CoffeeContext = createContext({} as CoffeeContextData);

type CoffeeReducer = (state: CoffeeState, action: any) => CoffeeState;

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffeState, dispatch] = useReducer<CoffeeReducer, CoffeeState>(
    coffeeReducer,
    {
      products: coffeelist.map((coffee) => ({
        ...coffee,
        priceFormatted: formatCurrency(coffee.price!),
      })),
      cartItems: [],
      totalValue: 0,
      totalCartItems: 0,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:coffee-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON) as CoffeeState;
      }

      return initialState;
    }
  );

  useEffect(() => {
    const coffeeStateJSON = JSON.stringify(coffeState);
    localStorage.setItem(
      "@coffee-delivery:coffee-state-1.0.0",
      coffeeStateJSON
    );
  }, [coffeState]);

  function addNewItemToCart(newItem: CoffeeItem) {
    dispatch(addNewItemAction(newItem));
  }

  function removeItemToCart(itemNameToRemove: string) {
    dispatch(removeItemAction(itemNameToRemove));
  }

  function updateItemQuantity(itemName: string, newQuantity: number) {
    dispatch(updateItemQuantityAction(itemName, newQuantity));
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeState,
        addNewItemToCart,
        removeItemToCart,
        updateItemQuantity,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}

export const useCoffee = () => useContext(CoffeeContext);
