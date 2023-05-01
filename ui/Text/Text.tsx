import clsx from "clsx";
import { TextVariant } from "./Text.types";

interface TextProps {
  variant?: TextVariant;
  children: React.ReactNode;
}

const Text = ({
  variant = "body1",
  children,
  className
}: TextProps & { className?: string }) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={clsx("text-6xl font-bold", className)}>{children}</h1>
      );
    case "h2":
      return (
        <h2 className={clsx("text-5xl font-medium", className)}>{children}</h2>
      );
    case "h3":
      return (
        <h3 className={clsx("text-4xl font-medium", className)}>{children}</h3>
      );
    case "h4":
      return (
        <h4 className={clsx("text-3xl font-medium", className)}>{children}</h4>
      );
    case "h5":
      return <h5 className={clsx("text-2xl", className)}>{children}</h5>;
    case "h6":
      return <h6 className={clsx("text-xl", className)}>{children}</h6>;
    case "body1":
      return <p className={clsx("text-xl", className)}>{children}</p>;
    case "body2":
      return <p className={clsx("text-base", className)}>{children}</p>;
    case "overline":
      return <p className={clsx("text-base font-medium uppercase tracking-widest", className)}>{children}</p>
  }

  return <p className={clsx("", className)}>{children}</p>;
};

export default Text