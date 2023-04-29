import { ButtonSize, ButtonSizeStyle, ButtonVariant, ButtonVariantStyle } from "./Button.types";

const useButtonVariant = (variant: ButtonVariant, size: ButtonSize) => {
  const variantStyles: ButtonVariantStyle = {
    primary: {
      container: "bg-violet-600 text-white",
    },
    outline: {
      container: "",
    },
    ghost: {
      container: "",
    },
    white: {
      container: "bg-white text-violet-600",
    },
    "white-ghost": {
      container: "text-white",
    },
  };

  const sizeStyles: ButtonSizeStyle = {
    sm: {
      container: "text-sm"
    },
    md: {
      container: ""
    },
    lg: {
      container: "text-lg",
    },
    "full-width": {
        container: "w-full"
    }
  };

  return {
    variantStyles: variantStyles[variant],
    sizeStyles: sizeStyles[size],
  };
};

export default useButtonVariant;