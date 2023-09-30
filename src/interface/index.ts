export type ICategory = {
  id: string;
  title: string;
};

export type IPreviewBlog = {
  title: string;
  content: string;
  banner: string;
  category: string;
};

export type IComment = {
  id: string;
  comment: string;
  profileId: string;
  blogId: string;
};
