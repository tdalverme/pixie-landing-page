import { Button, Card, Flex, Stack, Text, Title } from "@mantine/core";

interface CTABannerProps {
    title: string
    description: string
    buttonLabel: string
}

const CTABanner = ({ title, description, buttonLabel }: CTABannerProps) => {
  return (
    <Card withBorder p={40} radius="lg">
      <Flex gap={40} justify="space-between" align="center">
        <Stack>
          <Title order={2}>{title}</Title>
          <Text size="md" c="dimmed">
            {description}
          </Text>
        </Stack>

        <Button size="md">{buttonLabel}</Button>
      </Flex>
    </Card>
  );
};

export default CTABanner