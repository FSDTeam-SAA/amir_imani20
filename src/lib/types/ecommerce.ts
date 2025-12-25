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
  productId: string | Product;
  productName: string;
  price: number;
  quantity: number;
  subtotal: number;
  img: string;
}

export interface Cart {
  _id: string;
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
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
  data: Cart;
}
