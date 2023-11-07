type props = {
  inputType: React.HTMLInputTypeAttribute;
  value: string;
  onValueChange: (value: string) => void;
  id: string;
  placeholder?: string;
};
function TextField({
  inputType,
  value,
  onValueChange,
  id,
  placeholder,
}: props) {
  return (
    <input
      type={inputType}
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      placeholder={placeholder}
      id={id}
      name={id}
      className="px-4 py-2 shadow-sm rounded-sm bg-background"
    />
  );
}

export default TextField;
