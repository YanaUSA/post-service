// interface ButtonProps {
//   className?: string;
//   variant?: string;
//   type: "button" | "submit" | "reset";
//   text?: string;
//   isDisabled?: boolean;
//   onClick?: () => void;
//   children?: React.ReactNode;
// }

const Button = ({
  // const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  type,
  text,
  isDisabled,
  onClick,
  children,
  ...rest
}) => {
  const buttonClassName = isDisabled;
  // ? `${styles.button} ${styles.unActive} ${styles[variant]}`
  // : `${styles.button} ${styles[variant]}`;

  return (
    <button
      className={buttonClassName}
      type={type}
      text={text}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
