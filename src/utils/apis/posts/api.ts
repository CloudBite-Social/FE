import { Response, ResponsePagination } from "@/utils/types/api";
import { PostPayloadSchema } from "./types";

import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get(
      `https://virtserver.swaggerhub.com/HERUSETIAWAN_1/sosmed/1.0.0/posts?start=0&limit=5&keyword=post`
    );

    return response.data as ResponsePagination;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getDetailPosts = async (post_id: string) => {
  try {
    const response = await axios.get(
      `https://virtserver.swaggerhub.com/HERUSETIAWAN_1/sosmed/1.0.0/posts/${post_id}`
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const addPosts = async (body: PostPayloadSchema) => {
  try {
    const response = await axios.post(
      `https://virtserver.swaggerhub.com/HERUSETIAWAN_1/sosmed/1.0.0/posts`,
      body
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const editPosts = async (post_id: string, body: PostPayloadSchema) => {
  try {
    const response = await axios.put(
      `https://virtserver.swaggerhub.com/HERUSETIAWAN_1/sosmed/1.0.0/posts/${post_id}`,
      body
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deletePosts = async (post_id: string) => {
  try {
    const response = await axios.delete(
      `https://virtserver.swaggerhub.com/HERUSETIAWAN_1/sosmed/1.0.0/posts/${post_id}`
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
