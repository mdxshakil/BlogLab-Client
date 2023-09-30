import BlogDetailsCard from "../components/blogDetails/BlogDetailsCard";
import ShareArticle from "../components/blogDetails/ShareArticle";
import Sidebar from "../components/shared/Sidebar";
import MemberDiscussion from "../components/blogDetails/MemberDiscussion";
import ProfileCard from "../components/blogDetails/ProfileCard";
import { useParams } from "react-router-dom";
import {
  useGetBlogByAuthorIdQuery,
  useGetBlogByIdQuery,
} from "../redux/features/blog/blogApi";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const BlogDetails = () => {
  const { blogId } = useParams();
  const { data, isLoading, isError } = useGetBlogByIdQuery(blogId);

  const {
    data: authorBlogs,
    isLoading: authorBlogsLoading,
    isError: authorBlogsError,
  } = useGetBlogByAuthorIdQuery(data?.data?.authorId);

  let blogDetailsContent;
  if (isLoading) {
    blogDetailsContent = <LoadingSpinner />;
  } else if (!isLoading && isError) {
    blogDetailsContent = <p className="text-error">An error occured</p>;
  } else if (!isLoading && !isError && authorBlogs?.data?.length === 0) {
    blogDetailsContent = <p className="text-error">No content found</p>;
  } else if (!isLoading && !isError && authorBlogs?.data?.length > 0) {
    blogDetailsContent = <BlogDetailsCard blog={data?.data} />;
  }

  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 w-full">
          {blogDetailsContent}
          <ShareArticle />
          <MemberDiscussion blogId={blogId as string} />
        </div>
        <Sidebar
          title={`More from ${data?.data?.author?.firstName}`}
          blogs={authorBlogs}
          isLoading={authorBlogsLoading}
          isError={authorBlogsError}
        >
          <ProfileCard author={data?.data?.author} />
        </Sidebar>
      </div>
    </section>
  );
};

export default BlogDetails;
