import { Center, Container, Flex, Image, rem, Stack, Text, Title } from "@mantine/core"

const BENEFITS = [
    {
        title: 'Reduce no-shows and improve customer satisfaction',
        description: 'Implement an automated reminder system to send SMS or email notifications to customers and shops before their appointments.',
        imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg'
    },
    {
        title: 'Simplify the payment process and reduce the risk',
        description: 'Allow shops to integrate with various payment gateways, such as Stripe or PayPal, to accept online payments for their services.',
        imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg'
    }
]

const Benefits = () => {
  return (
    <Center py={50}>
      <Flex direction="column" gap={150} maw={rem("80%")}>
        {BENEFITS.map((benefit, index) => (
          <Flex
            key={index}
            gap={50}
            direction={index % 2 === 0 ? "row" : "row-reverse"}
          >
            <Image src={benefit.imgSrc} alt="" radius='lg' />
            <Stack>
              <Title order={2}>{benefit.title}</Title>
              <Text>{benefit.description}</Text>
            </Stack>
          </Flex>
        ))}
      </Flex>
    </Center>
  );
}

export default Benefits