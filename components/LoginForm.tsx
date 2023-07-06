const LoginForm: React.FC<{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" id="id" />
      <input type="password" id="password" />
      <button type="submit">button</button>
    </form>
  );
};

export default LoginForm;
