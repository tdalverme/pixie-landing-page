import { Button, Container, Image, Stack, Title } from "@mantine/core"

const Hero = (): React.ReactElement => {
  return (
    <Container py="md">
      <Stack align="center">
        <Title order={1} maw={800} align="center">
          Easily Handle Your Shop's Appointments, Services, and More
        </Title>

        <Button>Sign up for free</Button>

        <Image
          radius="lg"
          mt="xl"
          src="https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg"
        />
      </Stack>
    </Container>
  );
}

export default Hero