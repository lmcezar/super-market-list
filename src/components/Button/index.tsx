import "./index.css";

interface IProps {
  children: string;
  onClick: () => React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: IProps) => {
  return (
    <button onClick={onClick} className="button-container">
      {children}
    </button>
  );
};
