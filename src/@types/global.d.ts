interface CoffeeItem {
    name: string;
    description: string;
    price: number;
    image: string;
    flags: { name: string; label: string }[];
    quantity: number;
    inCart: boolean;
    priceFormatted?: string;
}

interface CoffeeState {
    items: CoffeeItem[]
    cartItems: CoffeeItem[]
    totalValue: string;
    totalCartItems: number;
}



