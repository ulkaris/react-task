import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fakeApi } from "../api/fakeApi";

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>(
    {
      mutationFn: (id: number) => fakeApi.deletePost(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["posts"] });
      },
    }
  );
};
