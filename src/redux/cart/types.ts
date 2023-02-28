export type CartItemType = {
    id: string;
    imageUrl: string;
    price: number;
    sizes: number;
    title: string;
    types: string;
    count: number;
  };
  
  export interface CartSliceState {
    totalPrice: number;
    items: CartItemType[];
  };