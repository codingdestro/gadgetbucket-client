import useCart from "../../store/useCarts";

interface Props {
  img: string;
  title: string;
  price: number;
  quantity?: number;
  id: string;
}
const CartProductCard = ({ img, title, price, id, quantity }: Props) => {
  const deleteCartItem = useCart((state) => state.deleteCartItem);
  const fetchCart = useCart((state) => state.fetchCart);
  const handleDeleteCartItem = async (id: string) => {
    await deleteCartItem(id);
    await fetchCart();
  };
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0 w-full p-2 sm:w-24 md:w-32 h-24 md:h-32 bg-gray-100 rounded-md overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between min-h-0 py-1">
          <div className="mb-2">
            <h3 className="text-sm md:text-base font-medium text-gray-900 line-clamp-2 leading-tight">
              {title}
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span>
                Quantity: <span className="text-gray-600">{quantity}</span>
              </span>
            </div>

            <div className="flex  items-center gap-5">
              <div className="text-lg md:text-xl font-bold text-gray-900">
                ₹{price.toLocaleString("en-IN")}
              </div>

              <button
                onClick={() => handleDeleteCartItem(id)}
                className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-md hover:bg-red-100 hover:border-red-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
