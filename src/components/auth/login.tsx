"use client";

import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// Import ShadCN form components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Minimum 6 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const Login = () => {
  const [isPending, setIsPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsPending(true);
    setError("");

    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      setIsPending(false);
      return;
    }

    router.push(callbackUrl);
    router.refresh();
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
          className="w-full h-full"
        />
      </div>
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-1">Welcome!</h2>
        <p className="text-gray-500 text-center mb-6">
          Manage your orders, track shipments, and configure products easily.
        </p>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="hello@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-gray-500"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between items-center">
              <p className="flex gap-3 items-center">
                <input type="checkbox" />
                <p>Remember me</p>
              </p>
              <Link href={'/reset-your-password'} className="text-sm font-medium  text-orange-500 hover:text-orange-700 cursor-pointer transition-colors">
                Forgot Password
              </Link>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full rounded-2xl bg-black"
            >
              {isPending ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </Form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Don&apos;t have an account?{" "}
          <span className="text-orange-500 cursor-pointer">Sign Up</span>
        </p>
      </div>
    </section>
  );
};

export default Login;
