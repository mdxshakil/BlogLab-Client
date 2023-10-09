type IProps = {
  onClick: () => void;
  title: string;
  classNames: string;
  isLoading: boolean;
};

const AdminActionButton = ({
  title,
  classNames,
  onClick,
  isLoading,
}: IProps) => {
  return (
    <button
      className={`${classNames} btn btn-xs rounded-full ${
        isLoading ? "loading" : ""
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default AdminActionButton;
