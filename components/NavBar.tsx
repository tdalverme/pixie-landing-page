import NavBarLink, { NavBarLinkProps } from '@/ui/NavBarLink';
import { Group, Button, Flex, Text } from "@mantine/core";
import React from 'react'

interface NavBarProps {
  items: NavBarLinkProps[];
}

const NavBar = ({ items }: NavBarProps): React.ReactElement => {
  return (
    <Flex justify='space-between' py="md" px="xl">
      <Group>
        <Text color="black">Pixie</Text>
      </Group>

      <Group spacing="xl" grow>
        {items.map((item) => (
          <NavBarLink key={item.link} {...item} />
        ))}
      </Group>

      <Button>
        Sign Up
      </Button>
    </Flex>
  );
};

export default NavBar