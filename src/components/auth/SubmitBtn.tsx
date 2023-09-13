type IProps = {
  isLoading: boolean;
};

const SubmitBtn = ({ isLoading }: IProps) => {
  return (
    <button
      type="submit"
      className="bg-primary rounded-xl text-white py-2 hover:scale-105 duration-300"
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <span>Signup</span>
      )}
    </button>
  );
};

export default SubmitBtn;
