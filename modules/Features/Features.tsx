import Feature from "@/components/Feature/Feature";
import TabItem from "@/ui/TabItem/TabItem";
import * as Tabs from "@radix-ui/react-tabs";

const FEATURES = [
  {
    value: "appointment",
    label: "Appointment Booking",
    icon: "calendar_today",
    title: "Seize Every Booking Opportunity",
    description:
      "Pixie offers a seamless online booking platform for customers to easily select services, choose day, time, and employee, with instant confirmation, reducing no-shows and cancellations.",
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg",
  },
  {
    value: "customization",
    label: "Shop Customization",
    icon: "storefront",
    title: "Craft Your Shop's Perfect Image",
    description:
      "Pixie empowers you to customize your shop profile, giving you full control to easily update and manage your business details in one place.",
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg",
  },
  {
    value: "employee",
    label: "Employees Management",
    icon: "group",
    title: "Empower Your Team, Elevate Your Shop",
    description:
      "Pixie simplifies employee management, ensuring smooth coordination and utilization of your team, resulting in a more efficient and productive shop.",
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg",
  },
  {
    value: "stats",
    label: "Stats & Analytics",
    icon: "show_chart",
    title: "Make Data-Driven Decisions",
    description:
      "Get real-time shop stats and analytics for tracking bookings, revenue, customer trends, and more. Optimize your business strategies with Pixie's comprehensive insights.",
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg",
  },
];

const Features = () => {
  return (
    <Tabs.Root defaultValue="appointment">
      <Tabs.List aria-label="Pixie's features" className="flex items-center justify-center">
        {FEATURES.map((feature) => (
          <Tabs.Trigger
            key={feature.value}
            value={feature.value}
            className="group"
          >
            <TabItem icon={feature.icon}>{feature.label}</TabItem>
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {FEATURES.map((feature) => (
        <Tabs.Content key={feature.value} value={feature.value}>
          <Feature {...feature} />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}

export default Features