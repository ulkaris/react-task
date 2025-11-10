import { mockPosts } from "./mockData";

let posts = [...mockPosts];

interface GetPostsParams {
  page?: number;
  limit?: number;
  type?: string; // "news" | "announcements" | "all posts"
  status?: string; // "active" | "inactive" | "all"
  search?: string;
}

export const fakeApi = {
  getPosts: async ({
    page = 1,
    limit = 3,
    type = "all posts",
    status = "all",
    search = "",
  }: GetPostsParams): Promise<{ data: typeof posts; total: number }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filteredPosts = [...posts];

        // Type filter
        if (type !== "all posts") {
          filteredPosts = filteredPosts.filter(
            (p) => p.type.toLowerCase() === type.toLowerCase()
          );
        }

        // Status filter
        if (status !== "all") {
          filteredPosts = filteredPosts.filter(
            (p) => p.status.toLowerCase() === status.toLowerCase()
          );
        }

        // Search filter
        if (search.trim() !== "") {
          const term = search.toLowerCase();
          filteredPosts = filteredPosts.filter(
            (p) =>
              p.title.toLowerCase().includes(term) ||
              p.desc.toLowerCase().includes(term)
          );
        }

        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedPosts = filteredPosts.slice(start, end);

        resolve({ data: paginatedPosts, total: filteredPosts.length });
      }, 600);
    });
  },
  deletePost: async (id: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        posts = posts.filter((p) => p.id !== id);
        resolve();
      }, 300);
    });
  },
};
