import { changePassword } from "@/lib/api/profile";
import { useMutation } from "@tanstack/react-query";

import { toast } from "sonner";



export const useChangePassword=()=>{
    return useMutation({
        mutationFn:({oldPassword,newPassword}:{oldPassword:string;newPassword:string})=>changePassword(oldPassword,newPassword),    
        onSuccess:(data)=>{
            toast.success(data?.message || "Password changed successfully!");
        },
        onError:(error)=>{
            toast.error(`Failed to change password: ${error.message}`);
        }
    })
}