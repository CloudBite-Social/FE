import { useEffect, useState } from "react";

import { User, getUser } from "@/utils/apis/users";

import PostCardHistory from "@/components/post-card-history";
import { toast } from "@/components/ui/use-toast";
import Layout from "@/components/layout";

const HistoryPost = () => {
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
          <PostCardHistory data={datas} />
        ))}
      </div>
    </Layout>
  );
};

export default HistoryPost;
