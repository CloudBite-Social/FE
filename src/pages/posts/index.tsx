import Layout from "@/components/layout";

import PostCard from "@/components/post-card";

const ListPost = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center gap-8">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </Layout>
  );
};

export default ListPost;
