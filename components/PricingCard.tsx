import usePricingVariant from "@/modules/Pricing/usePricingVariant"
import Button from "@/ui/Button/Button"
import Text from "@/ui/Text/Text"
import clsx from "clsx"
import { MaterialSymbol } from "react-material-symbols"

interface PricingInfo {
    name: string
    price: number
    description: string
    features: string[]
    mostPopular?: boolean
}

interface PricingCardProps {
    info: PricingInfo
}

const PricingCard = ({info}: PricingCardProps) => {
  const { variantStyles } = usePricingVariant(
    info.mostPopular ? "popular" : "default"
  );

  return (
    <div
      className={clsx(
        "flex flex-col rounded-2xl overflow-hidden",
        variantStyles.container
      )}
    >
      <div className={clsx("flex justify-center py-6", variantStyles.header)}>
        <Text variant="overline" className="text-white">
          {info.mostPopular ? "Most Popular" : "a"}
        </Text>
      </div>

      <div className="flex flex-col p-10 gap-8">
        <div className="flex flex-col gap-5">
          <Text
            variant="h4"
            className={info.mostPopular ? "text-violet-600" : "text-violet-400"}
          >
            {info.name}
          </Text>
          <div className="flex items-end gap-5">
            <div className="flex items-center gap-5">
              <Text variant="h4" className="font-light text-gray-400">
                $
              </Text>
              <Text variant="h2">{info.price}</Text>
            </div>
            <Text variant="body2" className="leading-loose text-gray-400">
              /month
            </Text>
          </div>

          <Text variant="body2" className="text-gray-400">
            {info.description}
          </Text>
        </div>

        <Button
          variant={info.mostPopular ? "primary" : "outline"}
          size="full-width"
        >
          Get Started
        </Button>

        <div className="flex flex-col gap-4">
          <Text variant="overline">Features</Text>
          <div className="flex flex-col gap-4">
            {info.features.map((feature) => (
              <div className="flex items-center gap-3">
                <div className="text-violet-600 flex items-center justify-center">
                  <MaterialSymbol icon="check" size={16} />
                </div>
                <Text variant="body2">{feature}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCard