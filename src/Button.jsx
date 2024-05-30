const Button = (props) => {
  const { children } = props;

  return (
    <button
      type="button"
      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:-translate-y-1 hover:ease-in-out duration-150  rounded-lg text-md px-6 py-3.5 text-center shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 "
    >
      {children}
    </button>
  );
};

const ButtonOutline = ({ children, size = "lg" }) => {
  return (
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  hover:-translate-y-1 hover:ease-in-out duration-150">
      <span
        class={`relative ${
          size === "lg" ? "px-6 py-3.5" : "px-4 py-1"
        } bg-body rounded-md `}
      >
        {children}
      </span>
    </button>
  );
};

export { Button, ButtonOutline };
