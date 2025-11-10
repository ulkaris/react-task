import { mockPosts } from "./mockData";

const posts = [...mockPosts];

export const fakeApi = {
  getPosts: async (
    page = 1,
    limit = 3
  ): Promise<{ data: typeof posts; total: number }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedPosts = posts.slice(start, end);
        resolve({ data: paginatedPosts, total: posts.length });
      }, 600);
    });
  },
};
