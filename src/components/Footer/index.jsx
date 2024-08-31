import React from "react";
import { Flex, Image, Link, Text } from "@chakra-ui/react";
import Github from "../../assets/svg/socialMedia/github.svg";
import Gmail from "../../assets/svg/socialMedia/gmail.svg";
import Linkedin from "../../assets/svg/socialMedia/linkedin.svg";

export default function index() {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      mb={20}
      mt={32}
      gap={5}
    >
      <Flex justify="center" align="center" gap={10}>
        <Link
          href="https://github.com/FlorenciaNieva"
          isExternal
          _hover={{ color: "primary.800", textDecoration: "none" }}
        >
          <Flex direction="column" alignItems="center">
            <Image
              src={Github}
              alt="Icono de github"
              aria-label="Icono de github"
              title="GitHub"
            />
            <Text fontSize="md" fontFamily="Satoshi-Light">
              GitHub
            </Text>
          </Flex>
        </Link>
        <Link
          href="https://www.linkedin.com/in/florencianievaa"
          isExternal
          _hover={{ color: "primary.800", textDecoration: "none" }}
        >
          <Flex direction="column" alignItems="center">
            <Image
              src={Linkedin}
              alt="Icono de linkdin"
              aria-label="Icono de linkdin"
              title="LinkdIn"
            />
            <Text fontSize="md" fontFamily="Satoshi-Light">
              LinkedIn
            </Text>
          </Flex>
        </Link>
        <Link
          href="mailto:florencianieva930@gmail.com"
          isExternal
          _hover={{ color: "primary.800", textDecoration: "none" }}
        >
          <Flex direction="column" alignItems="center">
            <Image
              src={Gmail}
              alt="Icono de email"
              aria-label="Icono de email"
              title="Email"
            />
            <Text fontSize="md" fontFamily="Satoshi-Light">
              Email
            </Text>
          </Flex>
        </Link>
      </Flex>
      <Text color="neutral.1000">
        Developed by{" "}
        <Link href="https://www.linkedin.com/in/florencianievaa">
          Florencia Nieva
        </Link>
      </Text>
    </Flex>
  );
}
