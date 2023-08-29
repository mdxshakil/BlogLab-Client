const AskToSignUp = () => {
  return (
    <div>
      <h3 className="text-center text-xl font-semibold mb-3">
        Start the conversation
      </h3>
      <p className="text-center">
        Become a member of BlogLab to start commenting
      </p>
      <div className="flex flex-col mt-4 items-center justify-center gap-3">
        <button className="btn btn-primary btn-sm">Sign up now</button>
        <p>
          Already a member?{" "}
          <span className="text-primary font-bold cursor-pointer">Sign in</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default AskToSignUp;
