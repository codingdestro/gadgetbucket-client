import { ProductType } from "../../types/productType";

interface Props {
  product: ProductType & {
    discount?: number; // Optional discount percentage
    originalPrice?: number |string; // Optional original price for comparison
    rating?: number; // Optional rating for the product
  };
}
const ProductCard = ({ product }: Props) => {
  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-5"
          />
          {product.discount && (
            <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
              {product.discount}% OFF
            </span>
          )}
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-2">
            {product.title}
          </h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-3 flex-grow">
            {product.description}
          </p>

          <div className="mt-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {product.rating && (
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-gray-600">
                    {product.rating}
                  </span>
                </div>
              )}
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
