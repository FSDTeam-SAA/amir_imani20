export interface Product {
  _id: string;
  productName: string;
  price: number;
  feature: string;
  description: string;
  videoLink?: string;
  img: string;
}

export interface CartItem {
  productId: Product;
  quantity: number;
}

export interface Cart {
  _id: string;
  userId: string;
  productIds: CartItem[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResponse {
  success: boolean;
  message: string;
  data: Product[];
}

export interface SingleProductResponse {
  success: boolean;
  data: Product;
}

export interface CartResponse {
  success: boolean;
  message: string;
  data: Cart;
}

export interface PaymentData {
  checkoutUrl: string;
  paymentId: string;
}

export interface CreatePaymentRequest {
  userId: string;
  totalAmount: number;
  itemIds: string;
}

export interface CreatePaymentResponse {
  success: boolean;
  message: string;
  data: PaymentData;
}
