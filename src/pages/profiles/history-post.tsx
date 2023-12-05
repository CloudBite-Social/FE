import Layout from "@/components/layout";
import {
  MessageCircle,
  MoreVertical,
  UploadIcon,
  SendHorizontalIcon,
} from "lucide-react";

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

const HistoryPost = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="w-full flex flex-col gap-8 items-center">
        <div className="w-1/2 h-fit bg-white dark:bg-black rounded-lg p-6 border shadow">
          <div className="flex items-center gap-6 mb-10">
            <img
              src="https://github.com/shadcn.png"
              alt="johndoe"
              width={80}
              className="rounded-lg"
            />
            <p className="text-neutral-500">What’s up?</p>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <div className="flex mt-4 gap-3 items-center cursor-pointer">
              <div className="flex items-center justify-center rounded-md p-2 bg-neutral-100 dark:bg-black dark:border">
                <UploadIcon />
              </div>
              <p>Upload image</p>
            </div>
            <div className="flex mt-4 gap-3 items-center cursor-pointer">
              <SendHorizontalIcon />
              <p>Post</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-fit flex bg-white dark:bg-black border p-5 gap-3 rounded-md justify-center shadow">
          <div className="flex-none">
            <img
              src="https://github.com/shadcn.png"
              alt="johndoe"
              className="rounded-full w-12"
            />
          </div>
          <div className="flex flex-col gap-4 grow">
            <div>
              <h1 className="font-medium">John Doe</h1>
              <p className=" text-neutral-500 font-light text-xs">
                7 Sept 2023 | 07.00 pm
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt ornare massa eget egestas.
            </p>
            <div className="flex gap-1">
              <MessageCircle
                className="cursor-pointer"
                onClick={() => navigate("/detail-post")}
              />
              <p>2</p>
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

        <PostCard />

        <div className="w-1/2 h-fit flex bg-white dark:bg-black border p-5 gap-3 rounded-md justify-center shadow">
          <div className="flex-none">
            <img
              src="https://github.com/shadcn.png"
              alt="johndoe"
              className="rounded-full w-12"
            />
          </div>
          <div className="flex flex-col gap-4 grow">
            <div>
              <h1 className="font-medium">John Doe</h1>
              <p className=" text-neutral-500 font-light text-xs">
                7 Sept 2023 | 07.00 pm
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt ornare massa eget egestas.
            </p>
            <div className="flex gap-1">
              <MessageCircle
                className="cursor-pointer"
                onClick={() => navigate("/detail-post")}
              />
              <p>2</p>
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

        <PostCard />
      </div>
    </Layout>
  );
};

export default HistoryPost;
