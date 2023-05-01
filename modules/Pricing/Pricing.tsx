import PricingCard from "@/components/PricingCard";

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
    <div className="flex justify-center p-24 gap-7">
      {PRICINGS.map((pricing) => (
        <PricingCard info={pricing} />
      ))}
    </div>
  );
};

export default Pricing;
