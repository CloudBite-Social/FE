import { ReactNode } from "react";

import Navbar from "@/components/navbar";
import { Toaster } from "./ui/toaster";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;

  return (
    <div className="w-full h-screen flex flex-col bg-neutral-50 dark:bg-black font-inter transition-all duration-200 overflow-auto">
      <Navbar />
      <div className="grow overflow-auto flex flex-col p-6">{children}</div>
      <Toaster />
    </div>
  );
};

export default Layout;
