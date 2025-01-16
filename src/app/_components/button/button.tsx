import cx from "classnames";

type ButtonTypes = {
  children: React.ReactNode;
  props: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

const Button = ({ children, ...props }: ButtonTypes) => (
  <button
    {...props}
    className={cx(
      "p-1 bg-tron-sky-950 border border-tron-sky-1000 hover:bg-tron-dark-green rounded-md",
      props.className
    )}
  >
    {children}
  </button>
);

export default Button;
