import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";

export default function index() {
  return (
    <Accordion allowToggle w={{ base: "80vw", lg: "20vw" }}>
      <AccordionItem border="none">
        <h2>
          <AccordionButton bg="primary.200" borderRadius={10}>
            <Box as="span" flex="1" textAlign="left">
              <Heading as="h4" size="md">
                Mis pasiones
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lo que me apasiona del desarrollo de software es su capacidad para
          mejorar la vida de las personas al simplificar y optimizar
          procesos.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem mt={5} border="none">
        <h2>
          <AccordionButton bg="primary.200" borderRadius={10}>
            <Box as="span" flex="1" textAlign="left">
              <Heading as="h4" size="md">
                Mis hobbies
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          En mi tiempo libre disfruto de escuchar música y realizar deporte.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
