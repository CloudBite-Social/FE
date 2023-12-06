import Layout from "@/components/layout";
import {
  MessageCircle,
  MoreVertical,
  UploadIcon,
  SendHorizontalIcon,
} from "lucide-react";

import { format } from "date-fns";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import CustomDialog from "@/components/dialog";
import PostCard from "@/components/post-card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { User, getUser } from "@/utils/apis/users";
import { toast } from "@/components/ui/use-toast";

const HistoryPost = () => {
  const navigate = useNavigate();

  const [historyPosts, setHistoryPosts] = useState<User>();
  console.log(historyPosts);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getUser();
      setHistoryPosts(result.data);
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
      <div className="w-full flex flex-col gap-8 items-center">
        {historyPosts?.posts.map((datas) => (
          <div className="w-1/2 h-fit flex bg-white dark:bg-black border p-5 gap-3 rounded-md justify-center shadow">
            <div className="flex-none">
              <img
                src={datas.image}
                alt="johndoe"
                className="rounded-full w-12"
              />
            </div>
            <div className="flex flex-col gap-4 grow">
              <div>
                <h1 className="font-medium">{}</h1>
                <p className=" text-neutral-500 font-light text-xs">
                  {format(new Date(datas.created_at), "eee, dd MMM Y")}
                </p>
              </div>
              <p>{datas.caption}</p>
              {datas?.image && (
                <img
                  src={datas.image}
                  alt={datas.image}
                  className="rounded-lg"
                />
              )}
              <div className="flex gap-1">
                <MessageCircle
                  className="cursor-pointer"
                  onClick={() => navigate("/detail-post")}
                />
                <p>{datas.comment_count}</p>
              </div>
              <hr />
              <Button
                className="h-fit justify-start italic bg-neutral-100 text-black/50 hover:bg-neutral-300"
                onClick={() => navigate("/detail-post")}
              >
                Add comment...
              </Button>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <MoreVertical className="cursor-pointer" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2" align="start">
                  <DropdownMenuItem
                  // onClick={() => ()}
                  >
                    <CustomDialog>Edit</CustomDialog>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                  // onClick={() => ()}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HistoryPost;
