import { Center, Stack, Title, Group, Text, Image, Container, Flex } from "@mantine/core"

const Integrations = (): React.ReactElement => {
  return (
    <Flex style={{ backgroundColor: "#EFE5FF" }} mt={80} py={70} justify='center'>
      <Stack spacing='lg'>
        <Title order={2} align="center">
          Integrations with your favorite tools
        </Title>

        <Text align="center">Integrates with 10+ tools you already use</Text>

        <Center>
          <Group>
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src="https://static.vecteezy.com/system/resources/previews/002/909/206/original/abstract-background-for-landing-pages-banner-placeholder-cover-book-and-print-geometric-pettern-on-screen-gradient-colors-design-vector.jpg"
                alt=""
                radius="md"
                width={50}
                height={50}
              />
            ))}
          </Group>
        </Center>
      </Stack>
    </Flex>
  );
}

export default Integrations