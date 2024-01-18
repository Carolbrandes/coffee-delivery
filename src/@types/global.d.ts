interface CartItem {
    name: string;
    price: number;
    priceFormatted: string;
    image: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    totalValue: number;
}