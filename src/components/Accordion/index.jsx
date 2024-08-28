import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Image,
  Heading,
} from "@chakra-ui/react";
import plus from "../../assets/svg/icons/plus.svg";

export default function index() {
  return (
    <Accordion allowToggle w={{ base: "60vw", lg: "20vw" }}>
      <AccordionItem border="none">
        <h2>
          <AccordionButton bg="primary.200" borderRadius={10}>
            <Box as="span" flex="1" textAlign="left">
              <Heading as="h4" size="md">
                Mis pasiones
              </Heading>
            </Box>
            <Image src={plus} alt="Icono de más" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lo que me apasiona del desarrollo de software es su capacidad para
          mejorar la vida cotidiana de las personas al simplificar y optimizar
          procesos. Me motiva la idea de crear soluciones que tengan un impacto
          positivo en las actividades diarias de la gente. También me fascina
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
            <Image src={plus} alt="Icono de más" />
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
            <Image src={plus} alt="Icono de más" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          En mi tiempo libre, disfruto de escuchar música, ver películas y
          series, y realizar deporte. Estas actividades me ayudan a desconectar.
          Además, me interesa mucho la capacitación continua, ya que me permite
          seguir creciendo en mi campo.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
