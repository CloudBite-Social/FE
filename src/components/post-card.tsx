// import { useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { MessageCircle, MoreVerticalIcon } from "lucide-react";

import CustomDialog from "@/components/dialog";

const PostCard = () => {
  // const navigate = useNavigate();

  return (
    <div className="w-1/2 h-fit flex bg-white dark:bg-black border p-5 gap-3 rounded-md justify-center shadow">
      <div>
        <img
          src="https://github.com/shadcn.png"
          alt="johndoe"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="font-medium">John Doe</h1>
          <p className=" text-neutral-500 font-light text-xs">
            7 Sept 2023 | 07.00 pm
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
          ornare massa eget egestas.
        </p>
        <img
          src="https://github.com/shadcn.png"
          alt="avatar"
          className="object-cover h-[20rem] rounded-md"
        />
        <div className="flex gap-1">
          <MessageCircle
            className="cursor-pointer"
            // onClick={() => navigate("/page-comments/:id_post")}
          />
          <p>2</p>
        </div>
        <hr />
        <Button
          className="h-fit justify-start italic bg-neutral-100 text-black/50 hover:bg-neutral-300"
          // onClick={() => navigate("/page-comments/:id_post")}
        >
          Add comment...
        </Button>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>
              <MoreVerticalIcon className="cursor-pointer" />
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
  );
};

export default PostCard;
