"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  repassword: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      repassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full h-screen flex items-center font-inter overflow-auto">
      <div className="container w-full md:w-[34.75rem] h-full md:h-fit p-8 md:p-14 lg:py-20 lg:px-14 flex flex-col items-center justify-center bg-white dark:bg-black/25 dark:border rounded-md border shadow">
        <h1 className="text-4xl font-black mb-16">
          Cloud<span className="text-teal-600">bite</span>
        </h1>
        <p className="font-inter text-center text-3xl font-semibold mb-2">
          Register
        </p>
        <p className="text-[#ABABAB] dark:text-white text-base font-normal mb-10">
          Register for create account
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" type="text" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@mail.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" type="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="repassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" type="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className=" w-full" type="submit">
              Register
            </Button>
          </form>
          <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-center text-sm text-gray-600 dark:text-white">
              Already a User? &nbsp;
              <Link to="/login" className="text-blue-500 hover:underline">
                Login Here
              </Link>
            </p>
            <Link
              to="/"
              className="text-center text-sm text-gray-600 dark:text-white hover:text-blue-500 dark:hover:text-blue-500"
            >
              Use as Guest
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
