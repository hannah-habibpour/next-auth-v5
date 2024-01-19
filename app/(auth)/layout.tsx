const AuthLayout = ({ children }: any) => {
  return (
    <div>
      <nav className="bg-red-500 text-white">
        This is navbar without /augh prefix
      </nav>
      {children}
    </div>
  );
};
