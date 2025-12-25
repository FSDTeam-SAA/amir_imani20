import axiosInstance from "./axios-instance";
import { CartResponse } from "../types/ecommerce";

export const cartService = {
  /**
   * Fetch current user's cart.
   */
  getCart: async (): Promise<CartResponse> => {
    const response = await axiosInstance.get<CartResponse>("/cart");
    return response.data;
  },

  /**
   * Add an item to the cart.
   * If item exists, backend increases quantity.
   */
  addToCart: async (productId: string, quantity: number, userId: string): Promise<CartResponse> => {
    const response = await axiosInstance.post<CartResponse>("/cart", {
     userId: ""
      , productIds: {
      productId,
      quantity,}
    });
    return response.data;
  },

  /**
   * Update item quantity in the cart.
   */
  updateCartItem: async (productId: string, quantity: number): Promise<CartResponse> => {
    const response = await axiosInstance.patch<CartResponse>("/cart/update", {
      productId,
      quantity,
    });
    return response.data;
  },

  /**
   * Remove a specific item from the cart.
   */
  removeFromCart: async (productId: string): Promise<CartResponse> => {
    const response = await axiosInstance.delete<CartResponse>(`/cart/remove/${productId}`);
    return response.data;
  },

  /**
   * Clear all items from the user's cart.
   */
  clearCart: async (): Promise<CartResponse> => {
    const response = await axiosInstance.delete<CartResponse>("/cart/clear");
    return response.data;
  },
};


export async function sendContactForm(data:{firstName:string,lastName:string,email:string,phoneNumber:string,message:string}){
  try{

    const res= await axiosInstance.post("/contact-us",data);
    return res.data;
  }catch(err){
    if(err instanceof Error){
    throw new Error(err.message);
  }}

}