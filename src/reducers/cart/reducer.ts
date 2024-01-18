import { ActionTypes } from "./actions";
import { produce } from "immer";

interface CartState {
    items: CartItem[]
    totalValue: number
}



export function cartReducer(state: CartState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_ITEM:
            // * draft == state
            return produce(state, draft => {
                draft.items.push(action.payload.newItem)
                draft.totalValue += action.payload.newItem.price * action.payload.newItem.quantity;
            })

        case ActionTypes.REMOVE_ITEM: {

            return produce(state, (draft) => {
                const itemIndex = draft.items.findIndex((item) => item.name === action.payload.itemNameToRemove);

                if (itemIndex !== -1) {
                    // Remove the item if it exists in the state
                    draft.items.splice(itemIndex, 1);

                    // Update the totalValue accordingly
                    draft.totalValue -= state.items[itemIndex].price * state.items[itemIndex].quantity;
                }
            });

        }

        case ActionTypes.UPDATE_ITEM_QUANTITY: {
            return produce(state, (draft) => {
                const itemIndex = draft.items.findIndex((item) => item.name === action.payload.itemName);

                if (itemIndex !== -1) {
                    // Update the quantity of the item if it exists in the cart
                    const oldQuantity = draft.items[itemIndex].quantity;
                    draft.items[itemIndex].quantity = action.payload.newQuantity;

                    // Update the totalValue by adjusting for the quantity change
                    draft.totalValue += (action.payload.newQuantity - oldQuantity) * draft.items[itemIndex].price;
                }
            });
        }


        default:
            return state;
    }
}
