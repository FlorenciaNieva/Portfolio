import React from "react";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
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
        justifyContent="center"
        w={{ base: "100%", md: "60%" }}
        minH="80vh"
        pos="relative"
      >
        <Text fontSize="2xl">Hola, soy</Text>
        <Heading size={{base:"3xl", md:"2xl"}} fontFamily="Cabinet-Bold" lineHeight="1.2">
          Florencia{" "}
          <span style={{ fontFamily: "Megalona", fontSize: "48px" }}>
            Nieva
          </span>
        </Heading>
        <Text fontSize="xl" fontFamily="Satoshi-Bold">
          Desarrolladora Frontend y QA Tester
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
          <Button onClick={() => navigate("/about-me")} title="SOBRE MÍ" />
        </div>
      </Flex>
      <Projects />
    </>
  );
}
