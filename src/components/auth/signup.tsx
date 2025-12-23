"use client";

import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().optional(),
  email: z.string().email("Invalid email"),
  gender: z.string().min(1, "Gender is required"),
  age: z.string().min(1, "Age is required"),
  address: z.string().min(1, "Address is required"),
});

type FormValues = z.infer<typeof formSchema>;

const Signup = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      gender: "",
      age: "",
      address: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsPending(true);
    setError("");
    
    // Here you would implement your signup logic
    console.log(values);
    
    // Simulate API call
    setTimeout(() => {
      setIsPending(false);
      // router.push("/dashboard"); // Redirect after successful signup
    }, 1000);
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center 
  bg-[linear-gradient(0deg,rgba(212,161,50,0.90)_0%,rgba(212,161,50,0.90)_100%),url('/bg.png')] 
  bg-cover bg-center bg-no-repeat bg-lightgray flex-col gap-5 py-8"
    >
      {/* Logo */}
      <div className="flex justify-center mb-2">
        <Image
          src="/logo.svg"
          alt="logo"
          width={50}
          height={60}
          className="w-auto h-auto"
        />
      </div>
      
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-1">
          Create Your Account
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Create your account to start booking, hosting, and sharing kitchens
        </p>
        
        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* First Name & Last Name - Side by side */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Lorem" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Ipsum" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="(704) 555-0027" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="hello@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Gender & Age - Side by side */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">
                          Prefer not to say
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input placeholder="26" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="2972 Westheimer Rd. Santa Ana, Illinois 85488" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Sign Up Button */}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full rounded-full bg-black hover:bg-gray-800 text-white font-semibold py-2.5 mt-2"
            >
              {isPending ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>
        </Form>

        {/* Sign In link */}
        <p className="text-sm text-gray-500 mt-6 text-center">
          Already have an account?{" "}
          <span 
            className="text-orange-500 hover:text-orange-600 cursor-pointer font-medium transition-colors"
            onClick={() => router.push("/login")}
          >
            Sign in
          </span>
        </p>
      </div>
    </section>
  );
};

export default Signup;