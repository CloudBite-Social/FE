import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";

import { DetailPost, getDetailPosts } from "@/utils/apis/posts";

import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout";

import {
  ChevronLeft,
  MoreVerticalIcon,
  SendHorizonal,
  Trash2,
} from "lucide-react";

const DetailPosts = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const params = useParams();

  const [detailPosts, setDetailPosts] = useState<DetailPost>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailPosts(params.post_id!);
      setDetailPosts(result.data);
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
      <div className="w-full flex flex-col items-center gap-8">
        <div className="w-[60%] h-fit flex p-5 gap-3 rounded-md justify-center">
          <div className="flex-none h-fit mr-4 rounded-md bg-white hover:bg-black/5 dark:bg-black dark:hover:bg-white/10 shadow border mx-3 cursor-pointer">
            <ChevronLeft size={40} onClick={() => navigate(-1)} />
          </div>
          <div className="flex-none">
            <img
              src={detailPosts?.user.image}
              alt={detailPosts?.user.name}
              className="rounded-full w-12"
            />
          </div>
          <div className="flex flex-col gap-4 grow">
            <div>
              <h1 className="font-semibold">{detailPosts?.user.name}</h1>
              {detailPosts?.created_at.toString() && (
                <p className=" text-neutral-500 font-light text-xs">
                  {format(new Date(detailPosts?.created_at), "dd MMM Y - p")}
                </p>
              )}
            </div>
            <p>{detailPosts?.caption}</p>
            {detailPosts?.image && (
              <img
                src={detailPosts.image}
                alt={detailPosts.image}
                className="rounded-lg"
              />
            )}
            <hr />
            <h1 className="font-semibold">Komentar</h1>
            <div className="flex flex-col gap-6">
              {detailPosts?.comment.map((data) => (
                <div className="flex gap-4" key={data.comment_id}>
                  <div className="flex-none">
                    <img
                      src={data.user.image}
                      alt="johndoe"
                      className="rounded-full w-10"
                    />
                  </div>
                  <div className="space-y-1 flex-auto">
                    <h1 className="font-semibold leading-none">
                      {data.user.name}
                      <span className="ml-2 font-light text-sm">
                        {format(new Date(data.created_at), "dd MMM Y - p")}
                      </span>
                    </h1>
                    <p>{data.text}</p>
                  </div>
                  <div>
                    <Trash2 />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-20 items-center">
              <input
                className="w-full h-fit justify-start italic bg-neutral-100 text-black/50 hover:bg-neutral-300 px-4 py-1 rounded-lg outline-none"
                placeholder="Add comment..."
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

export default DetailPosts;
