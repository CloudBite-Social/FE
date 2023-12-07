import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";

import { DetailPost, deletePosts, getDetailPosts } from "@/utils/apis/posts";

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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  CommentSchema,
  addComments,
  commentSchema,
  deleteComments,
} from "@/utils/apis/comments";
import { Input } from "@/components/ui/input";
import CustomDialog from "@/components/dialog";
import EditPostForm from "@/components/form/edit-post-form";
import { useToken } from "@/utils/contexts/token";

const DetailPosts = () => {
  const navigate = useNavigate();
  const { token, user } = useToken();
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
      console.log(result.message);
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

  async function handleDeletePost(post_id: string) {
    try {
      const result = await deletePosts(post_id);
      toast({ description: result.message });

      navigate("/");
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
        <div className="w-fit xl:w-[60%] h-fit flex p-5 gap-3 rounded-md justify-center">
          <Button
            className="w-fit py-0 px-1 h-fit mr-4 rounded-md shadow border"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={40} />
          </Button>
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
                    {token && user.user_id == detailPosts?.user.user_id && (
                      <Trash2
                        className="cursor-pointer"
                        onClick={() =>
                          handleDeleteComments(data.comment_id.toString())
                        }
                      />
                    )}
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
                          disabled={!token || form.formState.isSubmitting}
                          aria-disabled={form.formState.isSubmitting}
                        />
                      )}
                    </CustomFormField>
                  </div>
                  <Button
                    className="bg-neutral-50 dark:bg-black outline-none hover:bg-white"
                    type="submit"
                    disabled={!token || form.formState.isSubmitting}
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
            {token && user.user_id == detailPosts?.user.user_id && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <MoreVerticalIcon className="cursor-pointer" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 flex flex-col" align="end">
                  <DropdownMenuItem asChild>
                    <CustomDialog
                      description={
                        <EditPostForm
                          post_id={detailPosts?.post_id.toString()!}
                        />
                      }
                    >
                      <p className="dark:hover:bg-white/25 rounded">Edit</p>
                    </CustomDialog>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <CustomDialog
                      title="Are you sure delete this post?"
                      onAction={() =>
                        handleDeletePost(detailPosts?.post_id.toString()!)
                      }
                    >
                      <p className="dark:hover:bg-white/25 rounded">Delete</p>
                    </CustomDialog>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPosts;
