const AuthorAvatar = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="avatar">
        <div className="w-8 rounded-full">
          <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" />
        </div>
      </div>
      <div>
        <h6 className="font-bold text-sm">Shakil Ahmed</h6>
        <p className="text-gray-500 text-[12px] md:text-sm">Newbie</p>
      </div>
    </div>
  );
};

export default AuthorAvatar;
