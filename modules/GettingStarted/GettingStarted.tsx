import Text from '@/ui/Text/Text';
import * as Accordion from '@radix-ui/react-accordion';
import { useState } from "react";
import { MaterialSymbol } from 'react-material-symbols';

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
    <div className="flex gap-20">
      <Accordion.Root
        type="single"
        defaultValue="create"
        collapsible
        className="flex-1"
        onValueChange={(value) => setStepSelected(value)}
      >
        {STEPS.map((step) => (
          <Accordion.Item
            value={step.value}
            className="group flex-1 rdx-state-open:bg-slate-300 rounded-lg"
          >
            <Accordion.Trigger className="flex items-center gap-4 py-4 px-5 w-full">
              <div className="text-left w-full text-lg group-rdx-state-open:font-medium">
                {step.title}
              </div>
              <MaterialSymbol icon={stepSelected === step.value ? "expand_more" : "chevron_right"} size={20} />
            </Accordion.Trigger>

            <Accordion.Content className="pl-5 pr-10 pb-8">
              <Text variant="body2">{step.description}</Text>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>

      <img
        src="https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg"
        className="max-w-md object-cover"
      />
    </div>
  );
};

export default GettingStarted;
