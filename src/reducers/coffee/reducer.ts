import { ActionTypes } from "./actions";


type CoffeeAction =
    | { type: 'ADD_NEW_ITEM'; payload: { newItem: CoffeeItem } }
    | { type: 'REMOVE_ITEM'; payload: { itemNameToRemove: string } }
    | { type: 'UPDATE_ITEM_QUANTITY'; payload: { itemName: string; newQuantity: number } };

type CoffeeReducer = (state: CoffeeState, action: CoffeeAction) => CoffeeState;

export const coffeeReducer: CoffeeReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NEW_ITEM: {
            const newItem = { ...action.payload.newItem, inCart: true };
            const updatedItems = state.items.map((item) =>
                item?.name === newItem.name
                    ? { ...item, inCart: true, quantity: (item.quantity ?? 0) + newItem.quantity }
                    : item
            );

            const totalValue =
                +state.totalValue + (newItem.price ?? 0) * (newItem.quantity ?? 0);

            const formattedTotalValue = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(totalValue);

            const cartItems = updatedItems.filter((item) => item?.inCart);
            console.log("🚀 ~ cartItems ADD_NEW_ITEM:", cartItems)
            const totalCartItems = cartItems.reduce(
                (acc, curr) => acc + (curr?.quantity ?? 0),
                0
            );

            return {
                ...state,
                items: updatedItems,
                cartItems,
                totalValue: formattedTotalValue,
                totalCartItems,
            };
        }



        // ActionTypes.REMOVE_ITEM case
        case ActionTypes.REMOVE_ITEM: {
            const itemNameToRemove = action.payload.itemNameToRemove;
            const itemIndex = state.items.findIndex((item) => item?.name === itemNameToRemove);

            if (itemIndex !== -1) {
                const removedItem = state.items[itemIndex];

                let totalValue: number | string = +state.totalValue - (removedItem?.price || 0) * (removedItem?.quantity || 0);
                totalValue = new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(totalValue);

                // Create a new array with the same items, but modify the specified item
                const updatedItems = state.items.map((item, index) =>
                    index === itemIndex ? { ...item, inCart: false, quantity: 0 } : item
                );

                // Filter cartItems based on inCart property
                const cartItems = updatedItems.filter(item => item?.inCart);

                const totalCartItems = cartItems.length > 0
                    ? cartItems.reduce((acc, curr) => acc + (curr?.quantity || 0), 0)
                    : 0;

                return {
                    ...state,
                    items: updatedItems,
                    cartItems,
                    totalValue,
                    totalCartItems
                };
            }

            return state;
        }

        case ActionTypes.UPDATE_ITEM_QUANTITY: {
            const itemName = action.payload.itemName;
            const newQuantity = action.payload.newQuantity;

            if (state.items) {
                const itemIndex = state.items.findIndex((item) => item?.name === itemName);

                if (itemIndex !== -1) {
                    const oldQuantity = state.items[itemIndex]?.quantity ?? 0;

                    // Set inCart to false if the new quantity is zero
                    const inCart = newQuantity > 0;

                    const updatedItems = state.items.map((item, index) =>
                        index === itemIndex ? { ...item, quantity: newQuantity, inCart } : item
                    );

                    // Filter cartItems based on inCart property
                    const cartItems = updatedItems.filter(item => item?.inCart);

                    let totalValue: number | string = +state.totalValue + (newQuantity - oldQuantity) * (state.items[itemIndex]?.price ?? 0);
                    totalValue = new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(totalValue);

                    const totalCartItems = cartItems.length > 0
                        ? cartItems.reduce((acc, curr) => acc + (curr?.quantity || 0), 0)
                        : 0;

                    return {
                        ...state,
                        items: updatedItems,
                        cartItems,
                        totalValue,
                        totalCartItems
                    };
                }
            }

            return state;
        }




        default:
            return state;
    }
}
