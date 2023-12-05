import Layout from "@/components/layout";
import { MoreVerticalIcon, SendHorizonal, Trash2 } from "lucide-react";

const DetailPost = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center gap-8">
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
          <div className="flex flex-col gap-4 ">
            <div>
              <h1 className="font-semibold">John Doe</h1>
              <p className=" text-neutral-500 font-light text-xs">
                9 Sept 2023 | 09.00 pm
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt ornare massa eget egestas.
            </p>
            <hr />
            <h1 className="font-semibold">Komentar</h1>
            <div className="flex flex-col gap-6">
              {/* comment 1 */}
              <div className="flex gap-4">
                <div className="flex-none">
                  <img
                    src="https://github.com/shadcn.png"
                    alt="johndoe"
                    className="rounded-full w-10"
                  />
                </div>
                <div className="space-y-1 flex-auto">
                  <h1 className="font-semibold">
                    Cris{" "}
                    <span className="font-light text-sm">- 10 Sept 2023</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div>
                  <Trash2 />
                </div>
              </div>

              {/* comment 2 */}
              <div className="flex gap-4">
                <div className="flex-none">
                  <img
                    src="https://github.com/shadcn.png"
                    alt="johndoe"
                    className="rounded-full w-10 "
                  />
                </div>
                <div className="space-y-1 flex-auto">
                  <h1 className="font-semibold">
                    Amelia{" "}
                    <span className="font-light text-sm">- 12 Sept 2023</span>
                  </h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                  <Trash2 />
                </div>
              </div>

              {/* comment 3 */}
              <div className="flex gap-4">
                <div className="flex-none">
                  <img
                    src="https://github.com/shadcn.png"
                    alt="johndoe"
                    className="rounded-full w-10"
                  />
                </div>
                <div className="space-y-1 flex-auto">
                  <h1 className="font-semibold">
                    John Doe{" "}
                    <span className="font-light text-sm">- 16 Sept 2023</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
                <div>
                  <Trash2 />
                </div>
              </div>
            </div>
            <div className="flex gap-20 items-center">
              <input
                className="w-full h-fit justify-start italic bg-neutral-100 text-black/50 hover:bg-neutral-300 px-4 py-1 rounded-lg outline-none"
                placeholder="Add comment..."
                // onClick={() => navigate("/detail-post")}
              />

              <SendHorizonal size={35} />
            </div>
          </div>
          <div>
            <MoreVerticalIcon />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPost;
