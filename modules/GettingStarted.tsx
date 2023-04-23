import { Accordion, Center, Flex, Image, Text, Title } from "@mantine/core";
import React, { useState } from "react";

const STEPS = [
  {
    value: "create",
    title: "Create an Account",
    description:
      "Add your services, prices, and duration of services. You can also add employees and assign them to specific services. Customize your availability and working hours to match your shop's schedule.",
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg",
  },
  {
    value: "setup",
    title: "Set Up Services and Employees",
    description:
      "Add your services, prices, and duration of services. You can also add employees and assign them to specific services. Customize your availability and working hours to match your shop's schedule.",
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg",
  },
  {
    value: "share",
    title: "Share Your Booking URL",
    description:
      "Add your services, prices, and duration of services. You can also add employees and assign them to specific services. Customize your availability and working hours to match your shop's schedule.",
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg",
  },
  {
    value: "manage",
    title: "Manage Appointments and Stats",
    description:
      "Add your services, prices, and duration of services. You can also add employees and assign them to specific services. Customize your availability and working hours to match your shop's schedule.",
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg",
  },
  {
    value: "optimize",
    title: "Optimize Your Business",
    description:
      "Add your services, prices, and duration of services. You can also add employees and assign them to specific services. Customize your availability and working hours to match your shop's schedule.",
    imgSrc:
      "https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg",
  },
];

const GettingStarted = (): React.ReactElement => {
  const [stepSelected, setStepSelected] = useState("create");

  return (
    <Center m="auto" maw="80%">
      <Flex align="center" justify="center" gap={50} py={100}>
        <Accordion
          defaultValue="create"
          variant="contained"
          onChange={(value) => setStepSelected(value ?? "")}
        >
          {STEPS.map((step, index) => (
            <Accordion.Item key={index} value={step.value}>
              <Accordion.Control>
                <Title order={6}>{step.title}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>{step.description}</Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>

        <Image
          src={
            STEPS[STEPS.findIndex(({ value }) => value === stepSelected)]
              ?.imgSrc
          }
          alt=""
          radius="lg"
        />
      </Flex>
    </Center>
  );
};

export default GettingStarted;
