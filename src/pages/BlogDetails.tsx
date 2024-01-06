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
import useGetUserFromStore from "../hooks/useGetUser";
import { useIsFollowingQuery } from "../redux/features/following/followingApi";

const BlogDetails = () => {
  const { blogId } = useParams();
  const { data: blog, isLoading, isError } = useGetBlogByIdQuery(blogId);
  const { profileId } = useGetUserFromStore();
  const {
    data: authorBlogs,
    isLoading: authorBlogsLoading,
    isError: authorBlogsError,
  } = useGetBlogByAuthorIdQuery(blog?.data?.authorId);

  const { data } = useIsFollowingQuery({
    userId: profileId,
    followingId: blog?.data?.authorId,
  });

  let blogDetailsContent;
  if (isLoading) {
    return <LoadingSpinner />;
  } else if (!isLoading && isError) {
    blogDetailsContent = <p className="text-error">An error occured</p>;
  } else if (!isLoading && !isError && authorBlogs?.data?.length === 0) {
    blogDetailsContent = <p className="text-error">No content found</p>;
  } else if (!isLoading && !isError && authorBlogs?.data?.length > 0) {
    blogDetailsContent = <BlogDetailsCard blog={blog?.data} />;
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
          title={`More from ${blog?.data?.author?.firstName}`}
          blogs={authorBlogs}
          isLoading={authorBlogsLoading}
          isError={authorBlogsError}
        >
          <ProfileCard
            author={blog?.data?.author}
            isAlreadyFollowing={data?.data}
          />
        </Sidebar>
      </div>
    </section>
  );
};

export default BlogDetails;
