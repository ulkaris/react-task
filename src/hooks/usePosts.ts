import { useQuery } from "@tanstack/react-query";
import { fakeApi } from "../api/fakeApi";

export const usePosts = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["posts", page, limit],
    queryFn: () => fakeApi.getPosts(page, limit),
  });
};
