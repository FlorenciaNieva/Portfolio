import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import vector from "../../assets/svg/vectors/vector-home.svg";
import Projects from "../../components/Projects";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

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
        px={{ base: "42px", sm: "80px" }}
        pt="28vh"
        justifyContent="center"
        w={{ base: "100%", md: "60%" }}
        minH="80vh"
        pos="relative"
      >
        <Text fontSize="2xl">Hola, soy</Text>
        <Heading
          size={{ base: "3xl", md: "2xl" }}
          fontFamily="Cabinet-Bold"
          lineHeight="1.2"
        >
          Florencia{" "}
          <span style={{ fontFamily: "Megalona", fontSize: "48px" }}>
            Nieva
          </span>
        </Heading>
        <Text fontSize="xl" fontFamily="Satoshi-Bold">
          Junior Software Engineer
        </Text>
        <Text mt={4}>
          ¡Hola! Soy Flor, Junior Software Engineer y estudiante de la
          Tecnicatura en Tecnologías de la Información. Mi objetivo es
          desarrollar software que facilite los procesos diarios de las
          personas. Estoy comprometida a ampliar continuamente mis habilidades
          para crear soluciones tecnológicas.
        </Text>
        <Box mt={6}>
          <Button onClick={() => navigate("/about-me")} title="SOBRE MÍ" />
        </Box>
      </Flex>
      <Projects />
    </>
  );
}
