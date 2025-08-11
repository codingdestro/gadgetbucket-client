import { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import SortButton from "../components/products/SortButton";
import api from "../api";

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
  const [products, setProducts] = useState<
    {
      id: string;
      name: string;
      image: string;
      description: string;
      price: string;
      stockQuantity: number;
    }[]
  >([]);
  useEffect(() => {
    (async () => {
      const fetchecdProducts = await api.products.fetch(1, 16);
      setProducts(fetchecdProducts || []);
    })();
  }, []);
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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              id: product.id,
              image: product.image || sampleProduct.image,
              title: product.name || sampleProduct.title,
              description: product.description || sampleProduct.description,
              price: (parseFloat(product.price) * 0.8).toLocaleString(),
              originalPrice: parseFloat(product.price).toLocaleString(),
              discount: sampleProduct.discount,
              rating: sampleProduct.rating,
              category: sampleProduct.category,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Products;

// description
// id
// image
// name
// price
// stockQuantity
