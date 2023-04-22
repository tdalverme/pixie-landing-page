import { Container, Flex, Image, Stack, Text, Title } from '@mantine/core';

interface FeatureProps {
  title: string;
  description: string;
  imgSrc: string;
}

const Feature = ({ title, description, imgSrc }: FeatureProps) => {
  return (
    <Container fluid>
      <Flex gap="lg" py="md">
        <Stack>
          <Title order={2}>{title}</Title>
          <Text>{description}</Text>
        </Stack>

        <Image src={imgSrc} radius="lg" width={550} />
      </Flex>
    </Container>
  );
};

export default Feature