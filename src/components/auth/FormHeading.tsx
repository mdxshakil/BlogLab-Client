type IProps = {
  title: string;
  message: string;
};

const FormHeading = ({ title, message }: IProps) => {
  return (
    <>
      <h2 className="font-bold text-2xl text-primary">{title}</h2>
      <p className="text-xs my-4 text-primary">{message}</p>
    </>
  );
};

export default FormHeading;
