import OrderCard from "../components/orders/OrderCard";

export default function Order() {
  return (
    <section className="">
      <h1 className="text-2xl font-bold p-2 mb-1 border-b border-b-gray-400">
        Your Orders
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <OrderCard
            key={index}
            order_id={`12345-${index}`}
            order_date="2023-10-01"
            order_status="Shipped"
            order_total={99.99 + index * 10}
            product_image="https://m.media-amazon.com/images/I/71xQtZAXBWL._SX522_.jpg"
            product_name={`Sample Product ${index + 1}`}
            product_quantity={2 + index}
          />
        ))}
      </div>
    </section>
  );
}
