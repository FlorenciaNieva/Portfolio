import React from "react";
import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import vector from "../../assets/svg/vectors/vector-home.svg";
import arrow from "../../assets/svg/icons/arrowOutward.svg";
import { useNavigate } from "react-router-dom";
import Projects from "../../components/Projects"

export default function index() {
  const navigate = useNavigate();

  return (
    <>
      <Image
        src={vector}
        alt="Imagen de fondo"
        aria-label="Imagen de fondo"
        pos="absolute"
        top={{ base: 20, md: 10 }}
        right={0}
        zIndex={0}
      />
      <Flex
        direction="column"
        px={{base: "42px", sm:"80px"}}
        justifyContent="center"
        w={{ base: "100%", md: "60%" }}
        minH="80vh"
        pos="relative"
      >
        <Text fontSize="2xl">Hola, soy</Text>
        <Flex gap={2}>
          <Heading size="2xl" fontFamily="Cabinet-Bold">
            Florencia
          </Heading>
          <Heading size="2xl" fontFamily="Satoshi-Italic">
            Nieva
          </Heading>
        </Flex>
        <Text fontSize="xl" fontFamily="Satoshi-Bold">
          Desarrolladora Frontend y QA tester
        </Text>
        <Text mt={4}>
          ¡Hola! Soy Flor, Desarrolladora Front-End junior y QA Tester junior.
          Me apasiona desarrollar softwares que impacten la vida diaria de las
          personas, facilitando los procesos diarios de una manera accesible
          para todos. Estoy comprometida a aprender y aplicar continuamente mis
          habilidades para crear soluciones tecnológicas que cambien la vida
          diaria de las personas.
        </Text>
        <div>
          <Link onClick={() => navigate("/about-me")}>
            <Button
              mt={6}
              bg="black"
              color="white"
              borderRadius="8px"
              padding="6px"
              fontSize="md"
              fontFamily="Satoshi-Light"
              _hover={{ backgroundColor: "black", color: "white" }}
            >
              SOBRE MÍ
              <Image
                pl={2}
                src={arrow}
                alt="Icono de flecha"
                aria-label="Icono de flecha"
                title="Flecha"
              />
            </Button>
          </Link>
        </div>
        
      
      </Flex>
      <Projects />
    </>
  );
}
