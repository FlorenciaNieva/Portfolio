import React from "react";
import { Link, Flex } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

export default function index({ direction, onClose }) {
  const navigate = useNavigate();
  let location = useLocation();

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (location.pathname === "/") {
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
      onClose();
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
          });
        }
        onClose();
      }, 500);
    }
  };

  return (
    <nav>
      <Flex direction={direction} align="center" gap={10}>
        <Link
          onClick={() => {
            navigate("/");
            onClose();
          }}
          fontFamily="Satoshi-Bold"
          zIndex="overlay"
          _hover={{ color: "primary.500", textDecoration: "none" }}
        >
          INICIO
        </Link>
        <Link
          onClick={() => handleNavigation("projects")}
          fontFamily="Satoshi-Bold"
          zIndex="overlay"
          _hover={{ color: "primary.500", textDecoration: "none" }}
        >
          PROYECTOS
        </Link>
        <Link
          onClick={() => {
            navigate("/about-me");
            onClose();
          }}
          fontFamily="Satoshi-Bold"
          zIndex="overlay"
          _hover={{ color: "primary.500", textDecoration: "none" }}
        >
          SOBRE MÍ
        </Link>
        <Link
          onClick={() => {
            navigate("/contact");
            onClose();
          }}
          fontFamily="Satoshi-Bold"
          zIndex="overlay"
          _hover={{ color: "primary.500", textDecoration: "none" }}
        >
          CONTACTO
        </Link>
      </Flex>
    </nav>
  );
}
