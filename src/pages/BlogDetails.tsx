import BlogDetailsCard from "../components/blogDetails/BlogDetailsCard";
import ShareArticle from "../components/blogDetails/ShareArticle";
import Sidebar from "../components/shared/Sidebar";
import MemberDiscussion from "../components/blogDetails/MemberDiscussion";
import ProfileCard from "../components/blogDetails/ProfileCard";

const BlogDetails = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 w-full">
          <BlogDetailsCard />
          <ShareArticle />
          <MemberDiscussion />
        </div>
        <Sidebar title="More from shakil">
          <ProfileCard />
        </Sidebar>
      </div>
    </section>
  );
};

export default BlogDetails;
