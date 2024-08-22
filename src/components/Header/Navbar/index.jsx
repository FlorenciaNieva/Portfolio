import React from "react";
import { Link, Flex } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

export default function index({ direction }) {
  const navigate = useNavigate();
  let location = useLocation();

  const handleNavigation = (sectionId) => {
    if (location.pathname === "/") {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        window.scrollTo({
          top: sectionElement.offsetTop,
          behavior: "smooth",
        });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          window.scrollTo({
            top: sectionElement.offsetTop,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  return (
    <nav>
      <Flex direction={direction} align="center" gap={10}>
        <Link
          onClick={() => navigate("/")}
          fontFamily="Satoshi-Bold"
          zIndex="overlay"
          _hover={{ color: "primary.500", textDecoration: "none"}}
        >
          INICIO
        </Link>
        <Link
          onClick={() => handleNavigation("projects")}
          fontFamily="Satoshi-Bold"
          zIndex="overlay"
          _hover={{ color: "primary.500", textDecoration: "none"}}
        >
          PROYECTOS
        </Link>
        <Link
          onClick={() => navigate("/about-me")}
          fontFamily="Satoshi-Bold"
          zIndex="overlay"
          _hover={{ color: "primary.500", textDecoration: "none"}}
        >
          SOBRE MÍ
        </Link>
        <Link
          onClick={() => navigate("/contact")}
          fontFamily="Satoshi-Bold"
          zIndex="overlay"
          _hover={{ color: "primary.500", textDecoration: "none"}}
        >
          CONTACTO
        </Link>
      </Flex>
    </nav>
  );
}
