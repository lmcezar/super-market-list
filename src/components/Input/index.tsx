import "./index.css";

interface IInputProps {
  label: string;
  placeholder?: string;
  value?: string | number;
  handleChange: (text: string) => void;
  type: string;
}
export const Input = ({
  label,
  placeholder,
  value,
  handleChange,
  type = "text",
}: IInputProps) => {
  return (
    <div className="input-container">
      <span className="input-label">{label}</span>
      <input
        onChange={(e) => handleChange(e.target.value)}
        value={value || ""}
        type={type}
        className="input"
        placeholder={placeholder}
      />
    </div>
  );
};
