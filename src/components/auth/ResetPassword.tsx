"use client";
import React from 'react'
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from 'next/image';

const formSchema = z.object({
  email: z.string().email("Invalid email"),
});

const ResetPassword = () => {
  const router = useRouter();
  const [isPending, setIsPending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const mockResetPassword = async (email: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  };

  async function onSubmit(values: { email: string }) {
    setIsPending(true);
    setError(null);
    
    try {
      await mockResetPassword(values.email);
      alert("Reset code sent to your email!");
      router.push(`/verify-otp?email=${values.email}`);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
      alert(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center 
      bg-[linear-gradient(0deg,rgba(212,161,50,0.90)_0%,rgba(212,161,50,0.90)_100%),url('/bg.png')] 
      bg-cover bg-center bg-no-repeat bg-lightgray flex-col gap-5"
    >
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <Image
          src="/logo.svg"
          alt="logo"
          width={50}
          height={60}
          className="w-auto h-auto"
        />
      </div>
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-1">Reset Password</h2>
        <p className="text-gray-500 text-center mb-6">
          Enter your email address and we&apos;ll send you a code to reset your password.
        </p>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="hello@example.com" 
                      {...field} 
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full rounded-full bg-black hover:bg-gray-800 text-white font-semibold py-2.5"
            >
              {isPending ? "Sending reset code..." : "Send Reset Code"}
            </Button>
          </form>
        </Form>

        {/* Back to Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Remember your password?{" "}
            <span 
              className="text-orange-500 hover:text-orange-600 cursor-pointer font-medium transition-colors"
              onClick={() => router.push("/login")}
            >
              Back to Login
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;