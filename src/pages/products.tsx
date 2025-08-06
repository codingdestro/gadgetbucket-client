import ProductCard from "../components/products/ProductCard";
import SortButton from "../components/products/SortButton";

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
const products = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        <ProductCard product={sampleProduct} />
        <ProductCard product={sampleProduct} />
        <ProductCard product={sampleProduct} />
        <ProductCard product={sampleProduct} />
        <ProductCard product={sampleProduct} />
      </div>
    </>
  );
};

export default products;
