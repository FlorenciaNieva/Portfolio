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
          mejorar la vida cotidiana de las personas al simplificar y optimizar
          procesos. Me fascina
          cómo el desarrollo de software y el testing se complementan,
          asegurando que las soluciones no solo sean innovadoras, sino también
          efectivas y confiables.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem mt={5} border="none">
        <h2>
          <AccordionButton bg="primary.200" borderRadius={10}>
            <Box as="span" flex="1" textAlign="left">
              <Heading as="h4" size="md">
                Mi misión
              </Heading>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Mi misión es crear software que simplifique las tareas diarias de las
          personas y que sea accesible para todos, incluidas las personas con
          discapacidades. Quiero usar mis habilidades para desarrollar
          soluciones tecnológicas que mejoren significativamente la vida de las
          personas, prestando especial atención a la accesibilidad y asegurando
          que sean útiles para todos, independientemente de sus capacidades.
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
          En mi tiempo libre, disfruto de escuchar música, aprender cosas nuevas, ver películas o
          series, y realizar deporte.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
