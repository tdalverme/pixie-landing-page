export type PricingVariant = "default" | "popular";

export type PricingVariantStyle = {
  [key in PricingVariant]: {
    container: string;
    header: string;
  };
};