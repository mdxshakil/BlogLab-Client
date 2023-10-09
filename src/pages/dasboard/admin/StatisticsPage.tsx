/* eslint-disable no-undefined */
import {
  AiFillBook,
  AiOutlineBook,
  AiOutlineUsergroupAdd,
  AiTwotoneBook,
} from "react-icons/ai";
import { BiBookReader, BiSolidUser } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import {
  useBlogsPerCategoryQuery,
  useGetStatisticsQuery,
} from "../../../redux/features/statistics/statisticsApi";
import LoadingSpinner from "../../../components/shared/LoadingSpinner";
import StatisticsCard from "../../../components/dashboard/StatisticsCard";
import BlogChart from "../../../components/dashboard/BlogChart";
const StatisticsPage = () => {
  const { data, isLoading } = useGetStatisticsQuery(undefined);
  const statisticsData = data?.data || {};
  const { data: blogsPerCategory } = useBlogsPerCategoryQuery(undefined);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const statisticsCards = [
    {
      title: "Total Approved Blogs",
      value: statisticsData.totalApprovedBlogsCount,
      icon: <AiFillBook className="w-8 h-8" />,
    },
    {
      title: "Total blogs this week",
      value: statisticsData.newBlogsInThisWeek,
      icon: <AiOutlineBook className="w-8 h-8" />,
    },
    {
      title: "Total blogs today",
      value: statisticsData.newBlogsToday,
      icon: <AiTwotoneBook className="w-8 h-8" />,
    },
    {
      title: "Total active bloggers",
      value: statisticsData.totalActiveBloggers,
      icon: <BsCodeSlash className="w-8 h-8" />,
    },
    {
      title: "Total active Users",
      value: statisticsData.totalActiveUsersCount,
      icon: <BiSolidUser className="w-8 h-8" />,
    },
    {
      title: "New users this week",
      value: statisticsData.newUsersInThisWeek,
      icon: <AiOutlineUsergroupAdd className="w-8 h-8" />,
    },
    {
      title: "New user today",
      value: statisticsData.newUsersToday,
      icon: <FaUserFriends className="w-8 h-8" />,
    },
    {
      title: "Total active readers",
      value: statisticsData.totalActiveReaders,
      icon: <BiBookReader className="w-8 h-8" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shadow">
      {statisticsCards.map((item, index) => (
        <StatisticsCard key={index} {...item} />
      ))}
      <div>
        <BlogChart data={blogsPerCategory?.data} />
      </div>
    </div>
  );
};

export default StatisticsPage;
