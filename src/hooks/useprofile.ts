import { changePassword } from "@/lib/api/profile";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
// import { da } from "zod/v4/locales";

export const useChangePassword = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({
      oldPassword,
      newPassword,
      token,
    }: {
      oldPassword: string;
      newPassword: string;
      token: string;
    }) => changePassword(oldPassword, newPassword, token),
    onSuccess: (data) => {
      // console.log('hello',data.message);
      //   router.push('/login');
      if (data?.message === "Unauthorized") {
        toast.error(`Failed to change password: ${data?.message}`);
      } else {
        toast.success(data?.message || "Password changed successfully!");
        router.push("/login");
      }
    },
    onError: (error) => {
      toast.error(`Failed to change password: ${error.message}`);
    },
  });
};
