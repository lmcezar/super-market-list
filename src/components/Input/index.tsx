import "./index.css";

interface IUsernameProps {
  label: string;
  placeholder: string;
  value?: string;
  handleUsernameChange: (text: string) => void;
}
export const Input = ({
  label,
  placeholder,
  value,
  handleUsernameChange,
}: IUsernameProps) => {
  return (
    <div className="input-container">
      <span className="input-label">{label}</span>
      <input
        onChange={(e) => handleUsernameChange(e.target.value)}
        value={value || ""}
        type="text"
        className="input"
        placeholder={placeholder}
      />
    </div>
  );
};
