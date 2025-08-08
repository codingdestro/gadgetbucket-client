import { useParams } from "react-router";
export default function TrackOrder() {
  // This component can accept params if needed, e.g., for a specific order ID
  const params = useParams<{ orderId?: string }>();
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Track Your Order
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Order #{params.orderId || "Unknown"}
            </h2>
            <p className="text-gray-600">
              Estimated delivery: December 15, 2023
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  Order Confirmed
                </h3>
                <p className="text-gray-600">December 10, 2023 at 2:30 PM</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  Processing
                </h3>
                <p className="text-gray-600">December 11, 2023 at 9:15 AM</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-medium text-gray-900">Shipped</h3>
                <p className="text-gray-600">In transit</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-medium text-gray-500">Delivered</h3>
                <p className="text-gray-400">Pending</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">
              Shipping Information
            </h3>
            <p className="text-blue-800 text-sm">
              Carrier: FedEx Express
              <br />
              Tracking Number: 1234567890
              <br />
              Delivery Address: 123 Main St, City, State 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
