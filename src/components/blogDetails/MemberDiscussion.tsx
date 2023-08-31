import AskToSignUp from "./AskToSignUp";
import CommentSection from "./CommentSection";

const MemberDiscussion = () => {
  const user = null;
  return (
    <div className="p-6 lg:p-12 bg-base-300 rounded-lg">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Member discussion</h2>
          <p>0 comments</p>
        </div>
        <div className="divider"></div>
        {user ? <AskToSignUp /> : <CommentSection />}
      </div>
    </div>
  );
};

export default MemberDiscussion;
