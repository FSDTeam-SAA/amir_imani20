import axiosInstance from "./axios-instance";
import { ProductsResponse, SingleProductResponse } from "../types/ecommerce";

export const productService = {
  /**
   * Fetch all available products for shop listing.
   */
  getProducts: async (): Promise<ProductsResponse> => {
    const response = await axiosInstance.get<ProductsResponse>("/products");
    return response.data;
  },

  /**
   * Fetch full product details for product detail page.
   */
  getProductById: async (productId: string): Promise<SingleProductResponse> => {
    const response = await axiosInstance.get<SingleProductResponse>(`/products/${productId}`);
    return response.data;
  },
};
