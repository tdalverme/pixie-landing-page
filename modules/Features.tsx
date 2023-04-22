import Feature from "@/components/Feature";
import { Center, Container, Tabs } from "@mantine/core";

const FEATURES = [
  {
    value: "appointment",
    title: "Seize Every Booking Opportunity",
    description:
      "Pixie offers a seamless online booking platform for customers to easily select services, choose day, time, and employee, with instant confirmation, reducing no-shows and cancellations.",
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg",
  },
  {
    value: "customization",
    title: "Craft Your Shop's Perfect Image",
    description:
      "Pixie empowers you to customize your shop profile, giving you full control to easily update and manage your business details in one place.",
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg",
  },
  {
    value: "employee",
    title: "Empower Your Team, Elevate Your Shop",
    description:
      "Pixie simplifies employee management, ensuring smooth coordination and utilization of your team, resulting in a more efficient and productive shop.",
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg",
  },
  {
    value: "stats",
    title: "Make Data-Driven Decisions",
    description:
      "Get real-time shop stats and analytics for tracking bookings, revenue, customer trends, and more. Optimize your business strategies with Pixie's comprehensive insights.",
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg",
  },
];

const Features = () => {
  return (
    <Container py={150} fluid>
      <Tabs defaultValue="appointment" variant="pills">
        <Center>
          <Tabs.List>
            <Tabs.Tab value="appointment">Appointment Booking</Tabs.Tab>
            <Tabs.Tab value="customization">Shop Customization</Tabs.Tab>
            <Tabs.Tab value="employee">Employee Management</Tabs.Tab>
            <Tabs.Tab value="stats">Stats and Analytics</Tabs.Tab>
          </Tabs.List>
        </Center>

        {FEATURES.map((feature, index) => (
          <Tabs.Panel key={index} value={feature.value} pt="xs">
            <Feature {...feature} />
          </Tabs.Panel>
        ))}
      </Tabs>
    </Container>
  );
}

export default Features