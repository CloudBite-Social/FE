import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  ChevronRightIcon,
  MessageCircleIcon,
  Pencil,
  UploadIcon,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import PostCard from "@/components/post-card";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="w-full flex flex-col items-center gap-10 transition-all">
        <div className="w-1/2 h-fit rounded-lg p-6 border-[2px]">
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
              <div className="flex items-center justify-center rounded-full p-2 bg-slate-200 dark:bg-black dark:border">
                <UploadIcon />
              </div>
              <p>Upload image</p>
            </div>
            <div className="flex mt-4 gap-1 items-center cursor-pointer">
              <ChevronRightIcon />
              <p>Post</p>
            </div>
          </div>
        </div>
        {/* Post 1 */}
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
                    This action cannot be undone. This will permanently update
                    your post from our servers.
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
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt ornare massa eget egestas.
            </p>
            <div className="flex cursor-pointer gap-2">
              <MessageCircleIcon onClick={() => navigate("/list-post")} />
              <p>4</p>
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
        {/* Post 2 */}
        <PostCard />
      </div>
    </Layout>
  );
};

export default Home;
