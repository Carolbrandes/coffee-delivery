import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { coffeeReducer } from "../reducers/coffee/reducer";
import { addNewItemAction, removeItemAction, updateItemQuantityAction } from "../reducers/coffee/actions";
import { coffeelist } from "../coffeeList";

interface CoffeeProviderProps {
    children: ReactNode
}

interface CoffeeContextData {
    coffeState: {
        items: CoffeeItem[]
        cartItems: CoffeeItem[] | []
        totalValue: number
    }
    addNewItemToCart: (newItem: CoffeeItem) => void
    removeItemToCart: (itemNameToRemove: string) => void
    updateItemQuantity: (itemName: string, newQuantity: number) => void

}

const CoffeeContext = createContext({} as CoffeeContextData)

export function CoffeeProvider({ children }: CoffeeProviderProps) {
    const [coffeState, dispatch] = useReducer(coffeeReducer, {
        items: coffeelist.map((coffee) => ({
            ...coffee,
            priceFormatted: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(coffee.price!)
        })),
        cartItems: [],
        totalValue: 0
    }, (initialState) => {
        const storedStateAsJSON = localStorage.getItem('@coffee-delivery:coffee-state-1.0.0')

        if (storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON)
        }

        return initialState
    })



    useEffect(() => {
        const coffeeStateJSON = JSON.stringify(coffeState)
        localStorage.setItem('@coffee-delivery:coffee-state-1.0.0', coffeeStateJSON)
        console.log("🚀  ~ coffeeStateJSON:", coffeState)
    }, [coffeState])




    function addNewItemToCart(newItem: CoffeeItem) {
        dispatch(addNewItemAction(newItem))
    }

    function removeItemToCart(itemNameToRemove: string) {
        dispatch(removeItemAction(itemNameToRemove))
    }

    function updateItemQuantity(itemName: string, newQuantity: number) {
        dispatch(updateItemQuantityAction(itemName, newQuantity))
    }

    return (
        <CoffeeContext.Provider value={{ coffeState, addNewItemToCart, removeItemToCart, updateItemQuantity }}>
            {children}
        </CoffeeContext.Provider>
    );
}

export const useCoffee = () => useContext(CoffeeContext)