import { Badge, Button, Card, Center, CheckIcon, Container, Flex, Group, rem, Stack, Text } from '@mantine/core'

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
  return (
    <Card p="sm" w={350} withBorder={info.mostPopular} radius="md">
      {/* <Card.Section>
        <Center py="md" sx={{ backgroundColor: info.mostPopular ? "blue" : "lightblue" }}>
          <Text size="sm" transform="uppercase" weight="bold">
            {info.name}
          </Text>
        </Center>
      </Card.Section> */}

      <Container px="lg" py="md">
        <Group position="apart">
          <Text size="xl" weight="bold">
            {info.name}
          </Text>
          {info.mostPopular && <Badge>Popular</Badge>}
        </Group>

        <Flex align="center" gap="md">
          <Flex align="center" gap="xs">
            <Text size="xl" weight="bold">
              $
            </Text>
            <Text size={rem(36)} weight="bold">
              {info.price}
            </Text>
          </Flex>
          <Text c="dimmed">/month</Text>
        </Flex>

        <Text size="sm" c="dimmed">
          {info.description}
        </Text>

        <Button
          fullWidth
          mt="md"
          size="lg"
          variant={info.mostPopular ? "filled" : "outline"}
        >
          Get Started
        </Button>

        <Container p={0} mt="md">
          <Text transform="uppercase" weight="bold" size="sm">
            Features
          </Text>

          <Stack spacing="sm" mt="xs">
            {info.features.map((feature, index) => (
              <Flex key={index} gap="sm">
                <CheckIcon width={12} />
                <Text size="sm">{feature}</Text>
              </Flex>
            ))}
          </Stack>
        </Container>
      </Container>
    </Card>
  );
}

export default PricingCard