import RegisterForm from "@/components/form/register-form";
import { Toaster } from "@/components/ui/toaster";

const Login = () => {
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
        <RegisterForm />
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
