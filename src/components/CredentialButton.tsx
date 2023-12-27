type IProps = {
  buttonText: string;
  isActive: boolean;
  onClick: () => void;
};

export default function CredentialButton({
  buttonText,
  isActive,
  onClick,
}: IProps) {
  return (
    <button
      className={`btn btn-xs ${isActive ? "btn-primary" : ""}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
