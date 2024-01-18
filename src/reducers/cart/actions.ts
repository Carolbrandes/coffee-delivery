

export enum ActionTypes {
    ADD_NEW_ITEM = "ADD_NEW_ITEM",
    REMOVE_ITEM = "REMOVE_ITEM",
    UPDATE_ITEM_QUANTITY = "UPDATE_ITEM_QUANTITY",
}



export function addNewItemAction(newItem: CartItem) {
    console.log("🚀 ~ addNewItemAction ~ newItem:", newItem)
    return {
        type: ActionTypes.ADD_NEW_ITEM,
        payload: {
            newItem
        }
    }
}

export function updateItemQuantityAction(itemName: string, newQuantity: number) {
    return {
        type: ActionTypes.UPDATE_ITEM_QUANTITY,
        payload: { itemName, newQuantity },
    }
}


export function removeItemAction(itemNameToRemove: string) {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            itemNameToRemove
        }
    }
}



