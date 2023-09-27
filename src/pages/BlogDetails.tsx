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
  const { data, isLoading } = useGetBlogByIdQuery(blogId);

  const { data: authorBlogs } = useGetBlogByAuthorIdQuery(data?.data?.authorId);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 w-full">
          <BlogDetailsCard blog={data?.data} />
          <ShareArticle />
          <MemberDiscussion />
        </div>
        <Sidebar
          title={`More from ${data?.data?.author?.firstName}`}
          blogs={authorBlogs}
        >
          <ProfileCard author={data?.data?.author} />
        </Sidebar>
      </div>
    </section>
  );
};

export default BlogDetails;
