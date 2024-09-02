import React from "react";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import Button from "../../components/Button";
import alert from "../../assets/svg/icons/alert.svg";
import vector1 from "../../assets/svg/vectors/vector1-error.svg";
import vector2 from "../../assets/svg/vectors/vector2-error.svg";
import { useNavigate } from "react-router-dom";

export default function index() {
  const navigate = useNavigate();
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      pos="relative"
      px={{ base: "42px", sm: "80px" }}
      pt={{ base: "15vh", sm: "25vh" }}
      minH="100vh"
    >
      <Image
        src={vector1}
        alt="vector de fondo"
        pos="absolute"
        top={0}
        right={0}
        zIndex={-1}
      />
      <Image
        src={vector2}
        alt="vector de fondo"
        pos="absolute"
        bottom={0}
        left={0}
        zIndex={-1}
      />
      <Image
        src={alert}
        alt="Icono de alerta"
        aria-label="Icono de alerta"
        w={{ base: "30vw", lg: "10vw" }}
      />
      <Heading textAlign="center">La página no fue encontrada</Heading>
      <Text textAlign="center">
        No pudimos encontrar la página que estabas buscando
      </Text>
      <Button title="VOLVER AL INICIO" onClick={() => navigate("/")} />
    </Flex>
  );
}
