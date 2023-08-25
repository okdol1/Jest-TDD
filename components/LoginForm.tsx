import { useState } from "react";

const LoginForm: React.FC<{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({ onSubmit }) => {
  const [clicked, setClicked] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onSubmit(e);
    setClicked(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="id" />
      <input type="password" id="password" />
      <button type="submit" disabled={clicked}>
        button
      </button>
    </form>
  );
};

export default LoginForm;
