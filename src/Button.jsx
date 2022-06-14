const Button = (props) => {
  const { children } = props;

  return (
    <button
      type="button"
      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:-translate-y-1 hover:ease-in-out duration-150 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-md px-6 py-3.5 text-center shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 "
    >
      {children}
    </button>
  );
};

export default Button;
