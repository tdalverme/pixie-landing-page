import PricingCard from "@/components/PricingCard";
import { Flex } from "@mantine/core";

const PRICINGS = [
  {
    name: "Pro",
    price: 9.99,
    description: "For small businesses.",
    features: [
      "Unlimited employee management",
      "Advanced shop stats",
      "SMS appointments reminders",
      "Social media integration",
      "Custom booking URL",
      "500 appointments per month",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    price: 9.99,
    description: "For small businesses.",
    features: [
      "Unlimited employee management",
      "Advanced shop stats",
      "SMS appointments reminders",
      "Social media integration",
      "Custom booking URL",
      "500 appointments per month",
    ],
    mostPopular: true,
  },
  {
    name: "Pro",
    price: 9.99,
    description: "For small businesses.",
    features: [
      "Unlimited employee management",
      "Advanced shop stats",
      "SMS appointments reminders",
      "Social media integration",
      "Custom booking URL",
      "500 appointments per month",
    ],
    mostPopular: false,
  },
];

const Pricing = (): React.ReactElement => {
  return (
    <Flex gap="lg" justify="center">
      {PRICINGS.map((pricing, index) => (
        <PricingCard key={index} info={pricing} />
      ))}
    </Flex>
  );
};

export default Pricing;
