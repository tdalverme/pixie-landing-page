export type ButtonVariant =
  | "primary"
  | "outline"
  | "ghost"
  | "white"
  | "white-ghost";

export type ButtonVariantStyle = {
  [key in ButtonVariant]: {
    container: string;
  };
};

export type ButtonSize = "sm" | "md" | "lg" | "full-width";

export type ButtonSizeStyle = {
  [key in ButtonSize]: {
    container: string;
  };
};