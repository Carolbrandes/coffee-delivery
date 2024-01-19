import { ActionTypes } from "./actions";

interface CoffeeState {
    items: CoffeeItem[]
    totalValue: number
    cartItems: CoffeeItem[] | []
}


export function coffeeReducer(state: CoffeeState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_ITEM: {
            const newItem = { ...action.payload.newItem, inCart: true };
            const updatedItems = state.items.map((item) =>
                item.name === newItem.name ? { ...item, inCart: true, quantity: item.quantity + newItem.quantity } : item
            );

            const totalValue = state.totalValue + newItem.price * newItem.quantity;
            const cartItems = updatedItems.filter((item) => item.inCart);

            return {
                ...state,
                items: updatedItems,
                cartItems,
                totalValue,
            };
        }


        case ActionTypes.REMOVE_ITEM: {
            const itemNameToRemove = action.payload.itemNameToRemove;
            const itemIndex = state.items.findIndex((item) => item.name === itemNameToRemove);

            if (itemIndex !== -1) {
                const removedItem = state.items[itemIndex];
                const totalValue = state.totalValue - removedItem.price * removedItem.quantity;

                // Create a new array with the same items, but modify the specified item
                const updatedItems = state.items.map((item, index) =>
                    index === itemIndex ? { ...item, inCart: false, quantity: 0 } : item
                );

                // Filter cartItems based on inCart property
                const cartItems = updatedItems.filter(item => item.inCart);

                return {
                    ...state,
                    items: updatedItems,
                    cartItems,
                    totalValue,
                };
            }

            return state;
        }

        case ActionTypes.UPDATE_ITEM_QUANTITY: {
            const itemName = action.payload.itemName;
            const newQuantity = action.payload.newQuantity;
            const itemIndex = state.items.findIndex((item) => item.name === itemName);

            if (itemIndex !== -1) {
                const oldQuantity = state.items[itemIndex].quantity;

                // Set inCart to false if the new quantity is zero
                const inCart = newQuantity > 0 ? true : false;

                const updatedItems = state.items.map((item, index) =>
                    index === itemIndex ? { ...item, quantity: newQuantity, inCart } : item
                );

                // Filter cartItems based on inCart property and ensure uniqueness by item name
                const cartItems = Array.from(new Set(updatedItems.filter(item => item.inCart).map(item => item.name)))
                    .map(name => updatedItems.find(item => item.name === name));

                const totalValue = state.totalValue + (newQuantity - oldQuantity) * state.items[itemIndex].price;

                return {
                    ...state,
                    items: updatedItems,
                    cartItems,
                    totalValue,
                };
            }

            return state;
        }


        default:
            return state;
    }
}
