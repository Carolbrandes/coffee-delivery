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
            const updatedItems = state.products.map((item) =>
                item?.name === newItem.name
                    ? { ...item, inCart: true, quantity: (item.quantity ?? 0) + newItem.quantity }
                    : item
            );

            const totalValue =
                +state.totalValue + (newItem.price ?? 0) * (newItem.quantity ?? 0);



            const cartItems = updatedItems.filter((item) => item?.inCart);

            const totalCartItems = cartItems.reduce(
                (acc, curr) => acc + (curr?.quantity ?? 0),
                0
            );

            return {
                ...state,
                products: updatedItems,
                cartItems,
                totalValue,
                totalCartItems,
            };
        }




        case ActionTypes.REMOVE_ITEM: {
            const itemNameToRemove = action.payload.itemNameToRemove;
            const itemIndex = state.products.findIndex((item) => item?.name === itemNameToRemove);

            if (itemIndex !== -1) {
                const removedItem = state.products[itemIndex];

                const totalValue: number = +state.totalValue - (removedItem?.price || 0) * (removedItem?.quantity || 0);


                const updatedItems = state.products.map((item, index) =>
                    index === itemIndex ? { ...item, inCart: false, quantity: 0 } : item
                );


                const cartItems = updatedItems.filter(item => item?.inCart);

                const totalCartItems = cartItems.length > 0
                    ? cartItems.reduce((acc, curr) => acc + (curr?.quantity || 0), 0)
                    : 0;

                return {
                    ...state,
                    products: updatedItems,
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

            if (state.products) {
                const itemIndex = state.products.findIndex((item) => item?.name === itemName);

                if (itemIndex !== -1) {
                    const oldQuantity = state.products[itemIndex]?.quantity ?? 0;


                    const inCart = newQuantity > 0;

                    const updatedItems = state.products.map((item, index) =>
                        index === itemIndex ? { ...item, quantity: newQuantity, inCart } : item
                    );


                    const cartItems = updatedItems.filter(item => item?.inCart);

                    const totalValue: number | string = +state.totalValue + (newQuantity - oldQuantity) * (state.products[itemIndex]?.price ?? 0);


                    const totalCartItems = cartItems.length > 0
                        ? cartItems.reduce((acc, curr) => acc + (curr?.quantity || 0), 0)
                        : 0;

                    return {
                        ...state,
                        products: updatedItems,
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
