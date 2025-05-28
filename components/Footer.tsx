"use client";

import {
  ActionIcon,
  Box,
  Container,
  Flex,
  Stack,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function Footer() {
  const { toggleColorScheme } = useMantineColorScheme();
  const colorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: false,
  });
  return (
    <Stack
      component={"footer"}
      justify="center"
      align="center"
      p={"md"}
      bg={"cyan"}
      color="white"
    >
      {/* <footer className="flex justify-center items-center p-4 text-white"> */}
      <Flex align={"center"}>
        <Text size="sm">
          © {new Date().getFullYear()} Jesper Svensson. All rights reserved.
        </Text>
        <ActionIcon
          variant="outline"
          color={colorScheme === "dark" ? "yellow.5" : "dark"}
          pos={"absolute"}
          right={"2rem"}
          radius="md"
          onClick={toggleColorScheme}
          aria-label="Toggle color scheme"
        >
          <Box lightHidden>
            <IconSun size={18} />
          </Box>
          <Box darkHidden>
            <IconMoon size={18} />
          </Box>
        </ActionIcon>
      </Flex>
    </Stack>
  );
}
