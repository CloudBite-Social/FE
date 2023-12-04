import Layout from "@/components/layout";
import {
  SendHorizontal,
  Upload,
  MessageCircle,
  Pencil,
  MoreVertical,
  CircleUser,
} from "lucide-react";

const ListPost = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-3">
          <div className=" w-3/4 h-fit border border-black/25 p-5 flex flex-col gap-5 rounded-md justify-center">
            <div className="flex gap-4 items-center pb-4">
              <div className="flex items-center gap-4">
                <div className=" w-14 h-14 bg-gray-50 border border-gray-300 rounded-md"></div>
                <p className=" text-gray-500">Whats up</p>
              </div>
            </div>
            <hr />

            <div className=" flex justify-between">
              <div className="flex gap-2">
                <Upload />
                <button>Upload image</button>
              </div>
              <div className="flex gap-2">
                <SendHorizontal />
                <button>Post</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 pb-4">
          <div className="  w-3/4 h-fit border border-black/25 p-5 flex gap-5 rounded-md justify-center">
            <div>
              <CircleUser size={40} strokeWidth={1} />
            </div>

            <div className="flex flex-col gap-4">
              <div className="">
                <p className=" ">John Doe</p>
                <p className=" text-neutral-500 font-light text-xs">
                  7 Sept 2023 | 07.00 pm
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tincidunt ornare massa eget egestas.
              </p>
              <div className="flex gap-2">
                <MessageCircle />
                <p>2</p>
              </div>
              <hr />
              <button className=" w-8/9 h-8 rounded-md bg-gray-100">
                <p className=" italic text-left pl-4 text-gray-500 text-sm">
                  add comment...
                </p>
              </button>
            </div>

            <div>
              <MoreVertical />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListPost;
