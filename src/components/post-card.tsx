import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { MessageCircleIcon, Pencil } from "lucide-react";

import { useNavigate } from "react-router-dom";

const PostCard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-1/2 h-fit rounded-lg p-6 border-[2px]">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <img
            src="https://github.com/shadcn.png"
            alt="johndoe"
            width={40}
            className="rounded-full"
          />
          <p>John Doe</p>
        </div>
        {/* { user.id === id (
          <Dialog>
          <DialogTrigger asChild>
            <div className="bg-neutral-200 p-2 rounded-lg dark:bg-black dark:border cursor-pointer">
              <Pencil />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Post</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently update your
                post from our servers.
              </DialogDescription>
            </DialogHeader>
            <div>
              <form action="" className="flex flex-col gap-1">
                <label>Caption</label>
                <textarea
                  rows={4}
                  placeholder="write here..."
                  className="p-2 border rounded-md italic font-light text-sm dark:bg-black/0"
                ></textarea>
                <label>Picture?</label>
                <input type="file" />
              </form>
            </div>
            <DialogFooter>
              <Button>Submit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        )} */}
        <Dialog>
          <DialogTrigger asChild>
            <div className="bg-neutral-200 p-2 rounded-lg dark:bg-black dark:border cursor-pointer">
              <Pencil />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Post</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently update your
                post from our servers.
              </DialogDescription>
            </DialogHeader>
            <div>
              <form action="" className="flex flex-col gap-1">
                <label>Caption</label>
                <textarea
                  rows={4}
                  placeholder="write here..."
                  className="p-2 border rounded-md italic font-light text-sm dark:bg-black/0"
                ></textarea>
                <label>Picture?</label>
                <input type="file" />
              </form>
            </div>
            <DialogFooter>
              <Button>Submit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="px-12 flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
          ornare massa eget egestas.
        </p>
        {/* {image && (
          <img
            src="https://github.com/shadcn.png"
            alt="johndoe"
            className="w-full object-cover h-[20rem] rounded-lg"
          />
        )} */}
        <img
          src="https://github.com/shadcn.png"
          alt="johndoe"
          className="w-full object-cover h-[20rem] rounded-lg"
        />
        <div className="flex cursor-pointer gap-2">
          <MessageCircleIcon onClick={() => navigate("/list-post")} />
          <p>8</p>
        </div>
        <hr />
        <Button
          className="bg-neutral-200 w-full italic font-light justify-start pl-6 text-black/50 hover:bg-neutral-200 hover:text-black/50 dark:bg-black dark:border dark:text-white"
          onClick={() => navigate("/list-post")}
        >
          Add comment...
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
