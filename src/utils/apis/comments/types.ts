import * as z from "zod";

export const commentSchema = z.object({
  post_id: z.number(),
  text: z.string().min(3).max(280),
});
export type CommentSchema = z.infer<typeof commentSchema>;
