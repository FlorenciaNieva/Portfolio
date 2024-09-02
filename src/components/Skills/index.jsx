import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function index() {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      justify="center"
      align={{ base: "center", lg: "stretch" }}
      gap={20}
      mt={20}
    >
      <Flex
        direction="column"
        textAlign="center"
        w={{ base: "80vw", lg: "25vw" }}
        shadow="0px 20px 40px 0px #0000001A"
        borderRadius={20}
        p="40px 25px"
        gap={5}
      >
        <Heading as="h3" size="lg">
          Soft Skills
        </Heading>
        <Box>
          <Text>
            Trabajo en equipo - Autodidacta - Escucha activa - Comunicación
            efectiva - Gestión del tiempo - Adaptabilidad - Proactividad -
            Atención al cliente
          </Text>
        </Box>
      </Flex>

      <Flex
        direction="column"
        textAlign="center"
        w={{ base: "80vw", lg: "25vw" }}
        shadow="0px 20px 40px 0px #0000001A"
        borderRadius={20}
        p="40px 25px"
        gap={5}
      >
        <Heading as="h3" size="lg">
          Hard Skills
        </Heading>
        <Box>
          <Text>
            HTML - CSS - JavaScript - React.js - Responsive Desing - Bootstrap -
            Tailwind CSS - Bulma - Chakra UI - Styled Components - Visual Studio Code - GIT -
            GitHub - NPM - Netlify - Vercel - GitHub Pages - FireStore - Trello -
            Canva - Figma - Microsoft 365
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
