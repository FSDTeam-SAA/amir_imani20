import axiosInstance from "./axios-instance";
import { ProductsResponse, SingleProductResponse } from "../types/ecommerce";
import { get } from "http";

export const productService = {
  /**
   * Fetch all available products for shop listing.
   */
  getProducts: async (): Promise<ProductsResponse> => {
    const response = await axiosInstance.get<ProductsResponse>("/products");
    return response.data;
  },
  getmarchandice: async (): Promise<ProductsResponse> => {
    const response = await axiosInstance.get<ProductsResponse>(`/products?type=marchandice`);
    return response.data;
  },
   

  /**
   * Fetch full product details for product detail page.
   */
  getProductById: async (productId: string): Promise<SingleProductResponse> => {
    const response = await axiosInstance.get<SingleProductResponse>(`/products/${productId}`);
    return response.data;
  },
  //   getMerchandiseById: async (productId: string): Promise<SingleProductResponse> => {
  //   const response = await axiosInstance.get<SingleProductResponse>(`/products/${productId}`);
  //   return response.data;
  // },
 
    getSearchProduct: async (search: string): Promise<ProductsResponse> => {
    const response = await axiosInstance.get<ProductsResponse>(`/products?search=${search}`);
    return response.data;
  },
};
