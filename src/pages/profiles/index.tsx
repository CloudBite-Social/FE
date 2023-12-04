import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { CircleUserIcon, FileEdit } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Profie = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      {/* <div className="w-full flex justify-end mb-10">
        <Link
          to={"/edit-profile"}
          className="p-3 bg-white dark:bg-black/40 rounded-md shadow-md hover:bg-indigo-100 dark:hover:bg-indigo-950"
        >
          <FileEdit strokeWidth={"1.2px"} />
        </Link>
      </div> */}
      <div className="h-full flex flex-col items-center justify-center space-y-5">
        <div className="flex w-full md:w-2/3 lg:w-1/2 justify-between">
          <h1 className="text-4xl">Profile</h1>
          <CircleUserIcon strokeWidth={1} size={80} />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <p className="font-semibold dark:font-normal tracking-wide mb-2">
            Full Name
          </p>
          <div className="px-4 py-2 border border-slate-300 dark:border-white/30 rounded-md">
            <p>John Doe</p>
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <p className="font-semibold dark:font-normal tracking-wide mb-2">
            Email
          </p>
          <div className="px-4 py-2 border border-slate-300 dark:border-white/30 rounded-md">
            <p>johndoe@mail.com</p>
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <Button
            className="bg-white text-black border h-fit hover:bg-gray-200 hover:text-black"
            onClick={() => navigate("/edit-profile")}
          >
            Edit
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Profie;
