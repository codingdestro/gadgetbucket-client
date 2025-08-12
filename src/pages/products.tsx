import { useEffect } from "react";
import ProductCard from "../components/products/ProductCard";
import SortButton from "../components/products/SortButton";
import useProducts from "../store/useProducts";

const sampleProduct = {
  id: "1",
  title: "Sample Product",
  description: "This is a sample product description.",
  price: 29.99,
  originalPrice: 39.99,
  image: "https://m.media-amazon.com/images/I/71xS69DTCbL._AC_UY218_.jpg",
  discount: 25, // 25% off
  rating: 4.5, // Optional rating for the product
  category: "Electronics",
};
const Products = () => {
  const fetchProducts = useProducts((state) => state.fetch);
  const products = useProducts((state) => state.products);
  const isLoading = useProducts((state) => state.isLoading);
  const fetchedError = useProducts((state) => state.error);

  useEffect(() => {
    fetchProducts();
  }, []); //eslint-disable-line
  return (
    <>
      <div className="p-2 flex items-center gap-3">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <SortButton />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 min-h-[80vh]">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div
              className="h-[320px] bg-slate-200 animate-fade rounded-md border"
              key={index}
            ></div>
          ))
        ) : fetchedError ? (
          <div className="text-red-500 text-xl font-bold col-span-4 text-center py-10">Error fetching products</div>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                image: product.image || sampleProduct.image,
                name: product.name || sampleProduct.title,
                description: product.description || sampleProduct.description,
                price: (parseFloat(product.price) * 0.8).toLocaleString(),
                originalPrice: parseFloat(product.price).toLocaleString(),
                discount: sampleProduct.discount,
                rating: sampleProduct.rating,
                category: sampleProduct.category,
              }}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Products;
