import CartProductCard from "../components/cart/CartProductCard";

const dummyCart = [
  {
    id: "1",
    product: {
      img: "https://m.media-amazon.com/images/I/71UCE4pNdVL._AC_UY218_.jpg",
      title: "Product 1",
      price: 1000,
    },
  },
  {
    id: "2",
    product: {
      img: "https://m.media-amazon.com/images/I/71xc4OlTkaL._AC_UY218_.jpg",
      title: "Acer Gaming Monitor",
      price: 22000,
    },
  },
];

const Cart = () => {
  const cart = dummyCart;

  return (
    <section className="flex flex-col gap-5  relative items-center mt-5 ">
      <div className="gap-y-5 w-full p-5 flex flex-col">
        {cart.map(({ product, id }, idx: number) => {
          return (
            <CartProductCard
              key={idx}
              id={id}
              img={product.img}
              title={product.title}
              price={product.price}
              quantity={2}
            />
          );
        })}
      </div>
      <div className="p-5 text-right rounded-lg mb-5 w-full border">
        <h1 className="text-2xl font-bold text-gray-800 ">
          Total: ₹{cart.reduce((acc, item) => acc + item.product.price, 0)}
        </h1>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
