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
    products: CoffeeItem[]
    cartItems: CoffeeItem[]
    totalValue: number;
    totalCartItems: number;
}



