import React from "react";
import { Button } from "@/components/ui/button";
import { useOrderHistory, Product } from "@/hooks/order";
import { useSession } from "next-auth/react";
import Image from "next/image";

const OrderHistory = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  // Fetch order history
  const { data: apiResponse, isLoading, error } = useOrderHistory(userId);

  // Access the products array properly depending on API structure
  const orders: Product[] = Array.isArray(apiResponse)
    ? apiResponse
    : apiResponse?.data || [];

  if (isLoading)
    return <div className="p-4 text-center">Loading history...</div>;
  if (error)
    return (
      <div className="p-4 text-center text-red-500">Failed to load history</div>
    );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Order History</h2>
        <p className="text-gray-500 mt-1">
          Manage your personal information and profile details.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-4 text-left text-xs font-semibold text-primary uppercase tracking-wider pl-4">
                INVOICE
              </th>
              <th className="pb-4 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                Item
              </th>
              <th className="pb-4 text-left text-xs font-semibold text-primary uppercase tracking-wider">
                <div className="flex items-center gap-1 cursor-pointer">
                  BILLING DATE
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </th>
              <th className="pb-4 text-center text-xs font-semibold text-primary uppercase tracking-wider">
                AMOUNT
              </th>{" "}
              <th className="pb-4 text-center text-xs font-semibold text-primary uppercase tracking-wider">
                Quantity
              </th>
              <th className="pb-4 text-right text-xs font-semibold text-primary uppercase tracking-wider pr-4">
                Product Type
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {orders.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-gray-500">
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map((order: Product) => (
                <tr
                  key={order._id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="py-4 pl-4 text-sm font-medium text-gray-600">
                    #{order._id.slice(-6).toUpperCase()}
                  </td>
                  <td className="py-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      {order.imgs?.[0] && (
                        <Image
                          width={40}
                          height={40}
                          src={
                            typeof order.imgs[0] === "string"
                              ? order.imgs[0]
                              : order.imgs[0].url
                          }
                          alt={order.productName}
                          className="w-8 h-8 rounded object-cover"
                        />
                      )}
                      <span>{order.productName}</span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-gray-600">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-4 text-sm font-semibold text-gray-900 text-center">
                    ${order.price}
                  </td>
                  <td className="py-4 text-sm font-semibold text-gray-900 text-center">
                    {order.quantity} Items
                  </td>
                  <td className="py-4 text-right pr-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-secondary text-primary-foreground`}
                    >
                      {order.productType == "marchandice"
                        ? "Merchandise"
                        : "Card Game"}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500">Page 1 of 10</span>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-6"
            disabled
          >
            Previous
          </Button>
          <Button variant="outline" size="sm" className="rounded-full px-6">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
