import React, { useEffect, useState } from "react";
import { Flex, Link, Image, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/svg/logo/logo.svg";
import Navbar from "./Navbar";
import Drawer from "./Drawer";

export default function index() {
  const navigate = useNavigate();
  const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isLargerThanMd ? (
        <div
          style={{
            paddingTop: "15px",
            paddingRight: "25px",
            paddingLeft: "25px",
            marginBottom: "40px",
            position: "fixed",
            width: "100%",
            backgroundColor: scrolled ? "#FaF8F8" : "",
            boxShadow: scrolled
              ? "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 1px 0px 0px"
              : "",
            zIndex: "2",
            transition:
              "background-color 0.3s ease, box-shadow, padding-top 0.1s ease",
          }}
        >
          <Flex
            align="center"
            p="10px 40px"
            borderTop="1px solid"
            borderBottom="1px solid"
            borderColor={scrolled ? "white" : "neutral.500"}
            gap={10}
          >
            <Link onClick={() => navigate("/")}>
              <Image src={logo} alt="Logo" aria-label="Logo" title="Logo" />
            </Link>
            <Navbar direction="row" />
          </Flex>
        </div>
      ) : (
        <div
          style={{
            paddingTop: "15px",
            paddingRight: "25px",
            paddingLeft: "25px",
            marginBottom: "40px",
            position: "fixed",
            width: "100%",
            backgroundColor: scrolled ? "#FaF8F8" : "",
            boxShadow: scrolled
              ? "#C4A6CF 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 1px 0px 0px"
              : "",
            zIndex: "2",
            transition:
              "background-color 0.3s ease, box-shadow, padding-top 0.1s ease",
          }}
        >
          <Flex
            justify="space-between"
            align="center"
            p={{ base: "10px 2px", sm: "10px 40px" }}
            borderTop="1px solid"
            borderBottom="1px solid"
            borderColor={scrolled ? "white" : "neutral.500"}
          >
            <Link onClick={() => navigate("/")}>
              <Image src={logo} alt="Logo" aria-label="Logo" title="Logo" />
            </Link>
            <Drawer />
          </Flex>
        </div>
      )}
    </>
  );
}
