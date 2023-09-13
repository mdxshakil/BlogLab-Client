import { Link } from "react-router-dom";

type IProps = {
  label: string;
  path: string;
};

const FormFooter = ({ label, path }: IProps) => {
  return (
    <>
      <div className="mt-3 text-xs text-primary">
        <Link to={path}>{label}</Link>
      </div>
      <div className="py-3">
        <Link to="/" className="py-2 font-semibold cursor-pointer">
          Back to home
        </Link>
      </div>
    </>
  );
};

export default FormFooter;
