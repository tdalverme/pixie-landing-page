import clsx from "clsx";
import useButtonVariant from "./useButtonVariant";
import { ButtonSize, ButtonVariant } from "./Button.types";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className
}: ButtonProps & { className?: string }) => {
  const { variantStyles, sizeStyles } = useButtonVariant(variant, size);

  return (
    <button
      type="button"
      className={clsx(
        "px-7 py-3 rounded-full text-center font-bold",
        variantStyles.container,
        sizeStyles.container,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button