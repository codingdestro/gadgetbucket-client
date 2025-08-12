import { create } from "zustand";
import api from "../api";

interface IProduct {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  stockQuantity: number;
}

type State = {
  products: IProduct[];
  isLoading: boolean;
  error: string;
  isAddedToCart: string;
  selectedProduct: IProduct;
};

type Action = {
  fetch: () => Promise<void>;
  sortPrice: (order: "high" | "low") => void;
};

const useProducts = create<State & Action>((set) => ({
  products: [],
  selectedProduct: {
    id: "",
    name: "",
    image: "",
    price: "0",
    description: "",
    stockQuantity: 0,
  },
  isLoading: true,
  error: "",
  isAddedToCart: "",
  cartNotify: false,

  sortPrice(order) {
    set({ isLoading: true });
    set((state) => ({
      products: state.products.sort((a: IProduct, b: IProduct) => {
        return order === "low"
          ? parseFloat(a.price) - parseFloat(b.price)
          : parseFloat(b.price) - parseFloat(a.price);
      }),
    }));
    set({ isLoading: false });
  },

  async fetch() {
    try {
      const data = await api.products.fetch(1, 10);
      if (data) set({ isLoading: false, products: data });
    } catch (error) {
      set({ isLoading: false, error: "error occured" });
    }
  },
}));

export default useProducts;
