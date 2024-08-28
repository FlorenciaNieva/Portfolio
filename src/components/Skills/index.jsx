import React from 'react'
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function index() {
  return (
    <Flex justify="center" gap={20} mt={20}>
      <Flex
      direction="column"
      textAlign="center"
      w="25vw"
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
          Trabajo en equipo / Autodidacta / Escucha activa / Comunicación efectiva / Gestión del tiempo / Adaptabilidad / Productividad / Atención al cliente
        </Text>
      </Box>
    </Flex>

    <Flex
      direction="column"
      textAlign="center"
      w="25vw"
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
        HTML / CSS / JavaScript / React.js / Responsive Desing / Bootstrap / Tailwind / Bulma / Chakra UI / Styled Components / VSCode / GIT / GitHub / NPM / Netlify / Vercel / GitHub Pages / FireStor / Trello / Canva / Figma /Herramientas de microsoft
        </Text>
      </Box>
    </Flex>
    </Flex>
  )
}
