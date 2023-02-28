import { CartItemType } from "../redux/cart/types";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const json =  data ? JSON.parse(data) : []
    return {
    items: json  as CartItemType[],
    totalPrice: calcTotalPrice(json)
    }
}
