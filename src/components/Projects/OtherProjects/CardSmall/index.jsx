import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Button";

export default function index({ id, img, title }) {
  const navigate = useNavigate();
  return (
    <Flex
      direction="column"
      justify="start"
      align="start"
      p={5}
      borderRadius="16px"
      gap={5}
      maxW={{base:"55vw", md: "30vw", lg:"18vw"}}
      bg="neutral.100"
      boxShadow=" 0px 6px 6px 0px #00000021, 0px 13px 8px 0px #00000014, 0px 23px 9px 0px #00000005, 0px 36px 10px 0px #00000000, 0px 4px 4px 0px #00000040"
      border="1px solid"
      borderColor="#D9D9D9"
    >
      <Box pos="relative">
        <Image
          src={img}
          alt="Imagen del proyecto"
          aria-label="Imagen del proyecto"
          objectFit="cover"
          maxW="100%"
          h="auto"
          borderRadius="20px"
        />
        <Box
          pos="absolute"
          bottom="0"
          left="0"
          w="100%"
          h="100%"
          background="linear-gradient(179.62deg, rgba(0, 0, 0, 0) 42.75%, rgba(15, 16, 18, 0.1) 79.8%, rgba(30, 31, 36, 0.2) 99.67%)"
          borderRadius="20px"
        />
      </Box>
      <Heading fontSize="2xl">{title}</Heading>
      <Flex alignSelf="end">
        <Button onClick={() => navigate(`/project/${id}`)} title="VER MÁS" />
      </Flex>
    </Flex>
  );
}
