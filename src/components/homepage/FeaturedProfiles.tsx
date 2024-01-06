/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undefined */
import { IFeaturedProfile } from "../../interface";
import { useGetFeaturedProfilesQuery } from "../../redux/features/profile/profileApi";
import FeaturedBloggerCard from "../FeaturedBloggerCard";
import LoadingSpinner from "../shared/LoadingSpinner";
import SectionTitle from "./SectionTitle";

export default function FeaturedProfiles() {
  const {
    data: featuredProfiles,
    isLoading,
    isError,
  } = useGetFeaturedProfilesQuery(undefined);

  let content;
  if (isLoading) {
    return <LoadingSpinner />;
  } else if (!isLoading && isError) {
    content = <p className="text-error">There was an error</p>;
  } else if (!isLoading && !isError && featuredProfiles?.data?.length === 0) {
    content = <p className="text-error">No featured profiles available</p>;
  } else if (!isLoading && !isError && featuredProfiles?.data?.length > 0) {
    content = (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {featuredProfiles?.data?.map((profile: any) => (
          <FeaturedBloggerCard key={profile?.id} profile={profile as IFeaturedProfile} />
        ))}
      </div>
    );
  }

  return (
    <div className="mb-12 md:mb-16">
      <SectionTitle title="Featured Bloggers" />
      {content}
    </div>
  );
}
