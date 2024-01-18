import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cart/reducer";
import { addNewItemAction, removeItemAction, updateItemQuantityAction } from "../reducers/cart/actions";

interface CartProviderProps {
    children: ReactNode
}

interface CartContextData {
    cart: {
        items: CartItem[]
        totalValue: number
    },
    addNewItemToCart: (newItem: CartItem) => void
    removeItemToCart: (itemNameToRemove: string) => void
    updateItemQuantity: (itemName: string, newQuantity: number) => void
}

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
    const [cart, dispatch] = useReducer(cartReducer, {
        items: [],
        totalValue: 0
    }, (initialState) => {
        const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart-state-1.0.0')

        if (storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON)
        }

        return initialState
    })

    useEffect(() => {
        const cartStateJSON = JSON.stringify(cart)
        localStorage.setItem('@coffee-delivery:cart-state-1.0.0', cartStateJSON)
        console.log("🚀 ~ CartProvider ~ cart:", cart)
    }, [cart])


    function addNewItemToCart(newItem: CartItem) {
        console.log(`fn addNewItemToCart newItem: ${newItem}`)
        dispatch(addNewItemAction(newItem))
    }

    function removeItemToCart(itemNameToRemove: string) {
        dispatch(removeItemAction(itemNameToRemove))
    }

    function updateItemQuantity(itemName: string, newQuantity: number) {
        dispatch(updateItemQuantityAction(itemName, newQuantity))
    }

    return (
        <CartContext.Provider value={{ cart, addNewItemToCart, removeItemToCart, updateItemQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext)