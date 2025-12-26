import axiosInstance from "./axios-instance";


export async function changePassword(oldPassword: string, newPassword: string) {
    try {   

        const response = await axiosInstance.post(`/auth/change-password`, {
          oldPassword,
          newPassword
        });
        return response.data;
    }catch (error) {
        if(error instanceof Error) {
        throw new Error(`Failed to change password: ${error.message}`);
    }}
}