/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "../components/shared/BlogCard";
import Carousel from "../components/homepage/Carousel";
import Sidebar from "../components/shared/Sidebar";
import {
  useGetLatestBlogsQuery,
  useGetPreferredBlogsQuery,
} from "../redux/features/blog/blogApi";
import { useAppSelector } from "../redux/hooks";
import { AiFillSetting } from "react-icons/ai";
import ChooseCategory from "../components/homepage/ChooseCategory";
import { useState } from "react";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import SearchBar from "../components/shared/SearchBar";
import MostLikedPosts from "../components/homepage/MostLikedPosts";

const Home = () => {
  const [page, setPage] = useState(1);
  const [myFeedCategoryModal, setMyFeedCategoryModal] = useState(false);
  const { profileId } = useAppSelector((state) => state.auth.user);
  const {
    data: preferredBlogs,
    isLoading,
    isError,
  } = useGetPreferredBlogsQuery({
    profileId,
    page,
  });
  const {
    data: latestBlogs,
    isLoading: latestBlogsLoading,
    isError: latestBlogsError,
  } = useGetLatestBlogsQuery("");

  const handleCategoryChooseModal = () => {
    setMyFeedCategoryModal(!myFeedCategoryModal);
  };

  let content;
  if (isLoading) {
    return <LoadingSpinner />;
  } else if (!isLoading && isError) {
    content = <p className="text-error">There was an error</p>;
  } else if (
    !isLoading &&
    !isError &&
    preferredBlogs?.data?.data.length === 0
  ) {
    content = <p className="text-error">No result available</p>;
  } else if (!isLoading && !isError && preferredBlogs?.data?.data?.length > 0) {
    content = preferredBlogs?.data?.data?.map((blog: any) => (
      <BlogCard key={blog?.id} blog={blog} />
    ));
  }

  return (
    <div className="py-6 relative">
      <div className="">
        <SearchBar />
      </div>
      <Carousel />
      {profileId && (
        <div>
          <button
            className="flex items-center gap-2 my-6 btn bg-transparent border-0"
            onClick={() => handleCategoryChooseModal()}
          >
            <span className="font-bold md:text-2xl text-lg">My Feed</span>
            <AiFillSetting className="h-6 w-6" />
          </button>
        </div>
      )}
      {/* modal */}
      {myFeedCategoryModal && (
        <ChooseCategory handleCategoryChooseModal={handleCategoryChooseModal} />
      )}
      <div className="flex flex-col lg:flex-row gap-6">
        <div>
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-3 md:gap-6 w-full px-2 md:px-0">
            {content}
          </div>
          {/* pagination start */}
          <div className="flex justify-center mt-6">
            <div className="join">
              <button
                className="join-item btn bg-base-300"
                onClick={() => setPage((prevPage) => prevPage - 1)}
                disabled={page === 1}
              >
                «
              </button>
              <button className="join-item btn bg-base-300">{page}</button>
              <button
                className="join-item btn bg-base-300"
                onClick={() => setPage((prevPage) => prevPage + 1)}
                disabled={preferredBlogs?.data?.meta?.pageCount === page}
              >
                »
              </button>
            </div>
          </div>
          {/* pagination end */}
        </div>
        <Sidebar
          title="Latest posts"
          blogs={latestBlogs}
          isLoading={latestBlogsLoading}
          isError={latestBlogsError}
        />
      </div>
      <MostLikedPosts />
    </div>
  );
};

export default Home;
