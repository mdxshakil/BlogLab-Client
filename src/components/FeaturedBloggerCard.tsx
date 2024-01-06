/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { IFeaturedProfile } from "../interface";

type IProps = {
  profile: IFeaturedProfile;
};

export default function FeaturedBloggerCard({ profile }: IProps) {
  const navigate = useNavigate();
  const {
    id,
    bloggerLevel,
    firstName,
    lastName,
    blogs,
    followers,
    following,
    profilePicture,
  } = profile;

  return (
    <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-base-300 w-full mb-6 shadow-lg rounded-xl mt-16 text-center">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full flex justify-center">
            <div className="relative">
              <img
                src={profilePicture}
                alt={firstName || "Blogger Profile"}
                className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
              />
            </div>
          </div>
          <div className="w-full text-center mt-20">
            <div className="flex justify-center lg:pt-4 pt-8 pb-0">
              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                  {blogs.length}
                </span>
                <span className="text-sm text-slate-400">Blogs</span>
              </div>
              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                  {followers.length}
                </span>
                <span className="text-sm text-slate-400">Followers</span>
              </div>

              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                  {following.length}
                </span>
                <span className="text-sm text-slate-400">Following</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <h3 className="text-2xl font-bold leading-normal mb-1">
            {firstName + " " + lastName}
          </h3>
          <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
            {bloggerLevel}
          </div>
        </div>
        <button
          className="btn btn-sm w-full mb-3 bg-base-200 hover:bg-base-100"
          onClick={() => navigate(`/profile/${id}`)}
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
