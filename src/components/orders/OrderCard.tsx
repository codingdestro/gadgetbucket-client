interface Props {
  order_id: string;
  order_date: string;
  order_status: string;
  order_total: number;
  product_image: string;
  product_name: string;
  product_quantity: number;
}
const OrderCard = (order: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-4 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
        <div className="mb-3 sm:mb-0">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Order #{order.order_id}
          </h3>
          <p className="text-sm text-gray-500">Placed on {order.order_date}</p>
        </div>
        <div className="flex flex-col sm:items-end">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mb-2">
            {order.order_status}
          </span>
          <p className="text-lg font-bold text-gray-900">
            ${order.order_total.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-center space-x-4">
          <img
            src={order.product_image}
            alt="Product"
            className="w-35 h-35 object-contain rounded-md"
          />
          <div className="flex-1 min-w-0">
            <h4 className="text-md font-medium text-gray-800 truncate">
              {order.product_name}
            </h4>
            <p className="text-sm text-gray-500">
              Quantity: {order.product_quantity}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-4 pt-4 border-t border-gray-100">
        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
          Track Order
        </button>
        <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-200 text-sm font-medium">
          View Details
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
