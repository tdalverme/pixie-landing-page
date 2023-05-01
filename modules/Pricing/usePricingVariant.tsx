import { PricingVariant, PricingVariantStyle } from "./Pricing.types"

const usePricingVariant = (variant: PricingVariant) => {
  const variantStyles: PricingVariantStyle = {
    default: {
      container: "",
      header: ""
    },
    popular: {
      container: "border-2 border-violet-600",
      header: "bg-violet-600"
    },
  };

  return { variantStyles: variantStyles[variant] };
};

export default usePricingVariant;