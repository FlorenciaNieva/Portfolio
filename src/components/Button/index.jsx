import React from "react";
import { Button, Link, Image } from "@chakra-ui/react";
import arrow from "../../assets/svg/icons/arrowOutward.svg";

export default function index({ onClick, title, href }) {
  return (
    <Link onClick={onClick} href={href} target="_blank">
      <Button
        mt={6}
        bg="black"
        color="white"
        borderRadius="8px"
        padding="6px"
        fontSize="md"
        fontFamily="Satoshi-Light"
        _hover={{ background: "primary.500" }}
        _active={{
          brackground: "primary.500",
          boxShadow: ` 0px 1px 3px 0px rgba(0, 0, 0, 0.1) inset, 0px 5px 5px 0px rgba(0, 0, 0, 0.07) inset, 0px 12px 7px 0px rgba(0, 0, 0, 0.05) inset, 0px 21px 9px 0px rgba(0, 0, 0, 0.03) inset, 0px 33px 9px 0px rgba(0, 0, 0, 0.00) inset`,
        }}
      >
        {title}
        <Image
          pl={2}
          src={arrow}
          alt="Icono de flecha"
          aria-label="Icono de flecha"
          title="Flecha"
        />
      </Button>
    </Link>
  );
}
