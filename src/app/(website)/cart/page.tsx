"use client";

import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";
import ProductNavbar from "@/components/shared/ProductNavbar";
import ProductFooter from "@/components/shared/ProductFooter";
import CartItem from "@/components/shared/CartItem";
import OrderSummary from "@/components/shared/OrderSummary";
import { useCart } from "@/provider/cart-provider";
import { debounce } from "@/lib/utils/debounce";
import { usePayment } from "@/hooks/use-payment";

export default function CartPage() {
  const { cart, loading, updateQuantity, removeFromCart } = useCart();

  // Pending quantities for optimistic UI updates (only stores items being actively changed)
  const [pendingQuantities, setPendingQuantities] = useState<
    Record<string, number>
  >({});

  // Compute quantities from cart data, with pending optimistic updates overlaid
  const localQuantities = useMemo(() => {
    const quantities: Record<string, number> = {};
    if (cart?.productIds) {
      cart.productIds.forEach((item) => {
        const key = `${item?.productId?._id}-${item.color || ""}-${
          item.size || ""
        }`;
        quantities[key] = item.quantity;
      });
    }
    // Overlay any pending optimistic updates
    return { ...quantities, ...pendingQuantities };
  }, [cart, pendingQuantities]);

  const debouncedUpdateRef =
    useRef<
      (
        productId: string,
        quantity: number,
        color?: string,
        size?: string
      ) => void
    >(null);

  useEffect(() => {
    debouncedUpdateRef.current = debounce(
      async (
        productId: string,
        quantity: number,
        color?: string,
        size?: string
      ) => {
        const key = `${productId}-${color || ""}-${size || ""}`;
        try {
          await updateQuantity(productId, quantity, color, size);
          // Clear the pending quantity once server confirms the update
          setPendingQuantities((prev) => {
            const next = { ...prev };
            delete next[key];
            return next;
          });
        } catch (error) {
          console.error("Failed to update quantity:", error);
          // Revert optimistic update on error by clearing the pending quantity
          setPendingQuantities((prev) => {
            const next = { ...prev };
            delete next[key];
            return next;
          });
        }
      },
      500
    );
  }, [updateQuantity]);

  const handleQuantityChange = useCallback(
    (productId: string, newQuantity: number, color?: string, size?: string) => {
      const key = `${productId}-${color || ""}-${size || ""}`;
      // Optimistic UI update - immediate feedback
      setPendingQuantities((prev) => ({
        ...prev,
        [key]: newQuantity,
      }));

      // Debounced API call
      debouncedUpdateRef.current?.(productId, newQuantity, color, size);
    },
    []
  );

  const handleRemove = async (
    productId: string,
    color?: string,
    size?: string
  ) => {
    try {
      await removeFromCart(productId, color, size);
      // toast.success( )
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  const items = useMemo(() => cart?.productIds || [], [cart?.productIds]);

  // Calculate subtotal using local quantities for immediate feedback
  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => {
      const key = `${item?.productId?._id}-${item.color || ""}-${
        item.size || ""
      }`;
      const quantity = localQuantities[key] ?? item.quantity;
      return acc + item?.productId?.price * quantity;
    }, 0);
  }, [items, localQuantities]);

  // const shipping = 0;
  // const tax = 0;

  const { mutate: createPayment, isPending: isCheckoutLoading } = usePayment();

  const handleCheckout = () => {
    if (!cart) return;

    // Calculate total amount including shipping and tax
    // Using simple addition here, backend should ideally validate prices
    const totalAmount = subtotal;

    // Get array of product IDs
    const itemIds = cart._id;

    createPayment({
      userId: cart.userId,
      totalAmount,
      itemIds,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FBFBFB]">
        <ProductNavbar />
        <main className="container mx-auto px-6 pt-32 pb-20 max-w-[1240px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-8 h-8 animate-spin text-[#FF7F50]" />
            <p className="text-[#8B8B8B]">Loading your cart...</p>
          </div>
        </main>
        <ProductFooter />
      </div>
    );
  }

  return (
    <div className=" bg-[#FBFBFB]">
      {/* <ProductNavbar /> */}

      <main className="container mx-auto px-6 pt-16 pb-20 max-w-[1240px]">
        {/* Back Link */}
        <Link
          href="/game"
          className="inline-flex items-center gap-2 text-[#FF7F50] text-sm font-semibold mb-8 hover:underline decoration-2 underline-offset-4 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Cart Items List */}
          <div className="w-full lg:flex-1">
            {items.length > 0 ? (
              <div className="flex flex-col">
                {items.map((item) => {
                  const key = `${item?.productId?._id}-${item.color || ""}-${
                    item.size || ""
                  }`;
                  return (
                    <CartItem
                      key={key}
                      id={item?.productId?._id}
                      title={item?.productId?.productName}
                      description={item?.productId?.description}
                      price={item?.productId?.price}
                      color={item.color}
                      size={item.size}
                      imageUrl={
                        item?.productId?.imgs?.[0] ||
                        item?.productId?.img ||
                        "/no-image.jpg"
                      }
                      quantity={localQuantities[key] ?? item.quantity}
                      onQuantityChange={(id, qty) =>
                        handleQuantityChange(id, qty, item.color, item.size)
                      }
                      onRemove={() =>
                        handleRemove(
                          item?.productId?._id,
                          item.color,
                          item.size
                        )
                      }
                    />
                  );
                })}
              </div>
            ) : (
              <div className="bg-white border border-[#EFEFEF] rounded-2xl p-12 text-center flex flex-col items-center gap-4">
                <div className="text-4xl">🛒</div>
                <h3 className="text-xl font-bold text-[#111111]">
                  Your cart is empty
                </h3>
                <p className="text-[#8B8B8B]">
                  Looks like you haven&apos;t added anything to your cart yet.
                </p>
                <Link href="/game/">
                  <span className="inline-block bg-black text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-[#111111] transition-colors">
                    Start Shopping
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-[380px]">
            <OrderSummary
              subtotal={subtotal}
              // shipping={shipping}
              // tax={tax}
              onCheckout={handleCheckout}
              isCheckoutLoading={isCheckoutLoading}
              isDisabled={items.length === 0}
            />
          </div>
        </div>
      </main>

      {/* <ProductFooter /> */}
    </div>
  );
}
