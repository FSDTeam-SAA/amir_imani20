"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { useMutation } from "@tanstack/react-query";
import { Download } from "@/lib/api/download";
import { toast } from "sonner";

/* ------------------ validation schema ------------------ */
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
});

type FormValues = z.infer<typeof formSchema>;

const DownloadForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  const mutation = useMutation({
    mutationFn: (data: { name: string; email: string }) =>
      Download(data.name, data.email),
    onSuccess: (data) => {
      toast.success(data.message || "Successfuly added your Request");
    },
    onError: (err) => {
      toast.error(err.message || "Successfuly added your Request");
    },
  });

  /* ------------------ submit function ------------------ */
  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: (data) => {
        console.log("Success:", data);
        // form.reset(); // optional
      },
      onError: (error) => {
        console.error("Error:", error);
      },
    });
  };

  return (
    <section className="w-full flex justify-center py-16 px-8 rounded-2xl">
      <div className="w-full max-w-2xl rounded-xl bg-secondary p-6 shadow-sm">
        <h2 className="text-center text-lg font-semibold mb-6">
          Print and play
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      className="rounded-full"
                      {...field}
                    />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      className="rounded-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button
              type="submit"
              className="w-full rounded-full bg-primary hover:bg-primary/80 text-white"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default DownloadForm;
