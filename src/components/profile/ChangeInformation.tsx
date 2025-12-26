'use client';

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const profileSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  address: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const ChangeInformation = () => {
  const { data: session } = useSession();
  const [isPending, setIsPending] = React.useState(false);

  // Helper to split name
  const splitName = (fullName: string | null | undefined) => {
    if (!fullName) return { firstName: '', lastName: '' };
    const parts = fullName.split(' ');
    const firstName = parts[0];
    const lastName = parts.slice(1).join(' ');
    return { firstName, lastName: lastName || '' }; // Handle case with single name
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
    },
  });
  // Update form values when session loads
  useEffect(() => {
    if (session?.user) {
      const { firstName, lastName } = splitName(session.user.name);
      form.reset({
        firstName: firstName,
        lastName: lastName,
        email: session.user.email || '',
        phone: '', 
        address: '',
      });
    }
  }, [session, form]);

  async function onSubmit(values: ProfileFormValues) {
    setIsPending(true);
    try {
      // Simulate API call to update profile
      console.log('Update Profile Values:', values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success('Profile updated successfully!');
    } catch (error) {
      console.error('Profile update error:', error);
      toast.error('Failed to update profile.');
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className='max-w-2xl w-full'>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold text-gray-900'>Change User Information</h2>
        <p className='text-gray-500 mt-1'>Manage your personal information and profile details.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Hasibul" {...field} />
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
                    <Input placeholder="Hasan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+1234567890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="123 Street Name, City, Country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='pt-2'>
            <Button
              type="submit"
              disabled={isPending}
              className="bg-primary hover:bg-primary/90 text-white min-w-[140px]"
            >
              {isPending ? "Saving..." : "Save Changes"}
            </Button>
          </div>

        </form>
      </Form>
    </div>
  );
};

export default ChangeInformation;