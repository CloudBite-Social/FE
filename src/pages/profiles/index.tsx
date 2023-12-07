import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

import { User, getUser } from "@/utils/apis/users";

import { useToken } from "@/utils/contexts/token";

const Profie = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const { user } = useToken();

  const [profile, setProfile] = useState<User>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getUser();
      setProfile(result.data);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }
  return (
    <Layout>
      <div className="h-full flex flex-col items-center justify-center space-y-5">
        <div className="flex w-full md:w-2/3 lg:w-1/2 justify-between">
          <h1 className="text-4xl">Profile</h1>
          <img src={user.image} alt="" className="rounded-full w-24 h-24" />
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <p className="font-semibold dark:font-normal tracking-wide mb-2">
            Full Name
          </p>
          <div className="px-4 py-2 border border-slate-300 dark:border-white/30 rounded-md">
            <p>{profile?.name}</p>
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <p className="font-semibold dark:font-normal tracking-wide mb-2">
            Email
          </p>
          <div className="px-4 py-2 border border-slate-300 dark:border-white/30 rounded-md">
            <p>{profile?.email}</p>
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
