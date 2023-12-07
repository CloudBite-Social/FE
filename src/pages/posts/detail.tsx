import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";

import { DetailPost, getDetailPosts } from "@/utils/apis/posts";

import { CustomFormField } from "@/components/CustomForm";
import { useToast } from "@/components/ui/use-toast";
import { Form } from "@/components/ui/form";
import Layout from "@/components/layout";

import {
  ChevronLeft,
  Loader2,
  MoreVerticalIcon,
  SendHorizontalIcon,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommentSchema,
  addComments,
  commentSchema,
  deleteComments,
} from "@/utils/apis/comments";
import { Input } from "@/components/ui/input";

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

  const form = useForm<CommentSchema>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      post_id: detailPosts?.post_id,
      text: "",
    },
  });

  async function onSubmit(data: CommentSchema) {
    try {
      const result = await addComments(data);
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

  async function handleDeleteComments(comment_id: string) {
    try {
      const result = await deleteComments(comment_id);
      toast({ description: result.message });

      navigate(`/detail-post/${comment_id}`);
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
                    <Trash2
                      className="cursor-pointer"
                      onClick={() =>
                        handleDeleteComments(data.comment_id.toString())
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex items-center gap-6">
                  <div className="flex-auto">
                    <CustomFormField control={form.control} name="text">
                      {(field) => (
                        <Input
                          {...field}
                          placeholder="Add comment..."
                          className="border-none bg-neutral-200/40 rounded-xl placeholder:italic px-4"
                          disabled={form.formState.isSubmitting}
                          aria-disabled={form.formState.isSubmitting}
                        />
                      )}
                    </CustomFormField>
                  </div>
                  <Button
                    className="bg-neutral-50 dark:bg-black outline-none hover:bg-white"
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        <p>Please wait</p>
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
          <div>
            <MoreVerticalIcon />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPosts;
