import { create } from "zustand";
import { ProductType } from "../types/productType";
import api from "../api";
export type CartType = {
  id: string;
  quantity: number;
  product: ProductType;
};
type State = {
  isLoading: boolean;
  error: string;
  cart: CartType[];
};

type Action = {
  fetchCart: () => Promise<void>;
  deleteCartItem: (id: string) => Promise<void>;
};

const useCart = create<State & Action>((set) => ({
  isLoading: true,
  error: "",
  cart: [],
  async fetchCart() {
    set({ error: "", isLoading: true });
    try {
      const data = await api.cart.get();
      set({
        isLoading: false,
        error: "",
        cart: data?.cart,
      });
    } catch (error) {
      console.log("failed to fetch user cart");
    }
  },

  async deleteCartItem(id) {
    try {
      const res = await api.cart.delete(id);
      if (res.status === 200) {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
      }
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useCart;
