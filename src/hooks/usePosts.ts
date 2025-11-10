import { useQuery } from "@tanstack/react-query";
import { fakeApi } from "../api/fakeApi";

export const usePosts = (
  page: number,
  limit: number,
  typeFilter: string,
  statusFilter: string,
  search: string
) => {
  return useQuery({
    queryKey: ["posts", page, limit, typeFilter, statusFilter, search],
    queryFn: () =>
      fakeApi.getPosts({
        page,
        limit,
        type: typeFilter,
        status: statusFilter,
        search,
      }),
  });
};
