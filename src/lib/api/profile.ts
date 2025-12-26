import axiosInstance from "./axios-instance";


export async function changePassword(oldPassword: string, newPassword: string,token:string) {
    console.log('token is',token)
    try {   

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/change-password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            oldPassword,
            newPassword
          })
        }); 

        return response.json();
    }catch (error) {
        if(error instanceof Error) {
        throw new Error(`Failed to change password: ${error.message}`);
    }}      

}
