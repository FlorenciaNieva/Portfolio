import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";
import FormContact from "../../components/FormContact";
import vector from "../../assets/svg/vectors/vector-contact.svg";

export default function index() {
  return (
    <>
      <Image
        src={vector}
        alt="vector de fondo"
        pos="absolute"
        top={20}
        right={0}
        zIndex={-1}
      />
      <Flex
        direction="column"
        justify="space-between"
        align="center"
        pos="relative"
        px={{ base: "42px", sm: "80px" }}
        pt="20vh"
        gap={3}
      >
        <Heading>Contactame</Heading>
        <FormContact />
      </Flex>
    </>
  );
}
