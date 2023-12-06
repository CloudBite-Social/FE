import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

import EditPostForm from "@/components/form/edit-post-form";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import CustomDialog from "@/components/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Edit2, MessageCircle, MoreVerticalIcon, Trash2 } from "lucide-react";
import { Post, deletePosts } from "@/utils/apis/posts";

interface Props {
  data: Post;
}

const PostCard = (props: Props) => {
  const { data } = props;
  const navigate = useNavigate();
  const { toast } = useToast();

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
    <div className="w-1/2 h-fit">
      <div className="flex bg-white dark:bg-black border p-5 gap-3 rounded-md justify-center shadow">
        <div className="flex-none">
          <img
            src={data.user.image}
            alt={data.user.name}
            className="rounded-full w-12 h-12"
          />
        </div>
        <div className="flex flex-col gap-4 grow">
          <div>
            <h1 className="font-medium">{data.user.name}</h1>
            <p className=" text-neutral-500 font-light text-xs">
              {format(new Date(data.created_at), "dd MMM Y - p")}
            </p>
          </div>
          <p>{data.caption}</p>
          {data.image && (
            <img src={data.image} alt={data.image} className="rounded-lg" />
          )}
          <div className="flex gap-1">
            <MessageCircle
              className="cursor-pointer"
              onClick={() => navigate(`/detail-post/:${data.post_id}`)}
            />
            <p>{data.comment_count}</p>
          </div>
          <hr />
          <Button
            className="h-fit justify-start italic bg-neutral-100 text-black/50 hover:bg-neutral-300"
            onClick={() => navigate(`/detail-post/:${data.post_id}`)}
          >
            Add comment...
          </Button>
        </div>
        <div>
          <div className="flex gap-2">
            <CustomDialog
              description={<EditPostForm post_id={data.post_id.toString()} />}
            >
              <Edit2 className="cursor-pointer" />
            </CustomDialog>
            <Trash2
              onClick={() => handleDeletePost(data.post_id.toString())}
              className="cursor-pointer"
            />
          </div>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <MoreVerticalIcon className="cursor-pointer" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2">
              <DropdownMenuItem
              // onClick={() => ()}
              >
                <CustomDialog>Edit</CustomDialog>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
              // onClick={() => ()}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
