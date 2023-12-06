import PostCard from "@/components/post-card";
import Layout from "@/components/layout";

import { SendHorizontalIcon, UploadIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getPosts } from "@/utils/apis/posts";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CustomFormField } from "@/components/CustomForm";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Loader2 } from "lucide-react";
import { PostPayloadSchema, postPayloadSchema } from "@/utils/apis/posts/types";
import { addPosts } from "@/utils/apis/posts/api";

const Home = () => {
  const { toast } = useToast();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getPosts();
      setPosts(result.data);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  const form = useForm<PostPayloadSchema>({
    resolver: zodResolver(postPayloadSchema),
    defaultValues: {
      caption: "",
      image: "",
    },
  });

  const fileRef = form.register("image", { required: true });

  async function onSubmit(data: PostPayloadSchema) {
    data.image = data.image[0].name;
    try {
      const result = await addPosts(data);
      toast({
        description: result.message,
      });
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
      <div className="w-full flex flex-col items-center gap-8 transition-all">
        <div className="w-1/2 h-fit bg-white dark:bg-black rounded-lg p-6 border shadow">
          <Form {...form}>
            <form
              className="w-full flex flex-col gap-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex items-start gap-4">
                <div className="flex-none">
                  <img
                    src="https://github.com/shadcn.png"
                    alt="johndoe"
                    width={80}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex-auto mt-[-9px]">
                  <CustomFormField control={form.control} name="caption">
                    {(field) => (
                      <Textarea
                        {...field}
                        placeholder="What’s up?"
                        className="resize-none"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                      />
                    )}
                  </CustomFormField>
                </div>
              </div>
              <hr />
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex items-center justify-center rounded-md p-2 bg-neutral-100 dark:bg-black dark:border">
                    <UploadIcon />
                  </div>
                  <CustomFormField control={form.control} name="image">
                    {() => (
                      <Input
                        {...fileRef}
                        type="file"
                        accept="image/jpg, image/jpeg, image/png"
                        className="cursor-pointer text-black/50 dark:text-white/50 bg-white dark:bg-black border-none"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                      />
                    )}
                  </CustomFormField>
                </div>
                <Button
                  className="bg-white dark:bg-black outline-none hover:bg-white"
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                      wait
                    </>
                  ) : (
                    <div className="flex gap-3 items-center cursor-pointer text-black dark:text-white">
                      <SendHorizontalIcon />
                      <p>Post</p>
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
        {posts.map((post, i) => (
          <PostCard key={i} data={post} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
