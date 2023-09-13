const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center mb-6 bg-base-200 rounded-lg py-10">
      <div className="flex flex-col gap-3 items-center justify-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="">
          <h2 className="text-center font-bold text-lg">Shakil Ahmed</h2>
          <p className="text-center text-sm text-primary">Web Developer</p>
        </div>
        <div className="flex items-center justify-between gap-6 text-sm">
          <p>5239 followers</p>
          <p>Follow</p>
        </div>
        <button className="btn btn-sm rounded-lg btn-primary">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
