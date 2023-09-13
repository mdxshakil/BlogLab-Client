const LoadingSpinner = () => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary"></div>
      <img
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        className="rounded-full h-24 w-24 animate-pulse"
      />
    </div>
  );
};

export default LoadingSpinner;
