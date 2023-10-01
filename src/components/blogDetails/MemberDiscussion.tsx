import { useAppSelector } from "../../redux/hooks";
import AskToSignUp from "./AskToSignUp";
import CommentSection from "./CommentSection";

const MemberDiscussion = ({ blogId }: { blogId: string }) => {
  const { profileId } = useAppSelector((state) => state?.auth?.user);
  return (
    <div className="p-6 lg:p-12 bg-base-300 rounded-lg">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Member discussion</h2>
          <p>0 comments</p>
        </div>
        <div className="divider"></div>
        {!profileId ? <AskToSignUp /> : <CommentSection blogId={blogId} />}
      </div>
    </div>
  );
};

export default MemberDiscussion;
