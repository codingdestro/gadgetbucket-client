import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import { ProductType } from "../types/productType";
import { useCall } from "../hooks/useCall";

export default function ViewProduct() {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const params = useParams<{ productId: string }>();
  useEffect(() => {
    api.products.fetchById(params.productId!).then((product: ProductType) => {
      setProduct({
        ...product,
      });
    });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  const { isLoading, callApi } = useCall(() =>
    api.cart.add(product!.id, quantity)
  );

  const addToCartHandler = async () => {
    if (!product) return;
    if (!isLoading) await callApi();
  };

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="max-w-6xl mx-auto p-4 lg:p-8 h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-xxs max-w-md h-auto rounded-lg shadow-lg object-contain p-2"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Electronic
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-green-600">
                ₹{(parseFloat(product.price.toString()) * 0.8).toLocaleString()}
              </span>
              <span className="text-lg text-gray-400 line-through">
                ₹{parseFloat(product.price.toString()).toLocaleString()}
              </span>
              <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">
                {25}% OFF
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(4.2) ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 text-sm">{4.2} out of 5</span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label
                  htmlFor="quantity"
                  className="text-sm font-medium text-gray-700"
                >
                  Quantity:
                </label>
                <select
                  id="quantity"
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  defaultValue={quantity}
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={addToCartHandler}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
              >
                {isLoading ? "Adding to Cart..." : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
