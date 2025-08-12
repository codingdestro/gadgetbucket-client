import { useEffect } from "react";
import CartProductCard from "../components/cart/CartProductCard";
import useCart from "../store/useCarts";

const Cart = () => {
  // const cart = dummyCart;
  const cart = useCart((state) => state.cart);
  const fetchCart = useCart((state) => state.fetchCart);
  useEffect(() => {
    fetchCart();
  }, []); //eslint-disable-line

  return (
    <section className="flex flex-col gap-5  relative items-center mt-5 ">
      {cart.length === 0 ? (
        <div className="min-h-[80vh] flex font-bold text-3xl capitalize text-orange-400">
          Your cart is empty
        </div>
      ) : (
        <>
          <div className="gap-y-5 w-full p-5 flex flex-col">
            {cart.map(({ quantity, product, id }, idx: number) => {
              return (
                <CartProductCard
                  key={idx}
                  id={id}
                  img={product.image}
                  title={product.name}
                  price={parseFloat(product.price.toString())}
                  quantity={quantity}
                />
              );
            })}
          </div>
          <div className="p-5 text-right rounded-lg mb-5 w-full border">
            <h1 className="text-2xl font-bold text-gray-800 ">
              Total: ₹
              {cart
                .reduce(
                  (acc, item) =>
                    acc + parseFloat(item.product.price.toString()),
                  0
                )
                .toLocaleString()}
            </h1>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
