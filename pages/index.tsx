import NavBar from "@/components/NavBar";
import Benefits from "@/modules/Benefits";
import Features from "@/modules/Features";
import Hero from "@/modules/Hero";
import Integrations from "@/modules/Integrations";
import { AppShell, Container } from "@mantine/core";

export default function Home() {
  return (
    <AppShell
      header={
        <NavBar
          items={[
            { label: "Features", link: "" },
            { label: "Pricing", link: "" },
          ]}
        />
      }
    >
      <Container px={100} fluid>
        <Hero />
        <Features />
        <Benefits />
        <Integrations />
      </Container>
    </AppShell>
  );
}
