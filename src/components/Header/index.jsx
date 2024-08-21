import React from "react";
import { Flex, Link, Image, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/svg/logo/logo.svg";
import Navbar from "./Navbar";
import Drawer from "./Drawer";

export default function index() {
  const navigate = useNavigate();
  const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {isLargerThanMd ? (
        <div style={{ padding: "30px 40px" }}>
          <Flex
            align="center"
            p="10px 40px"
            borderTop="1px solid"
            borderBottom="1px solid"
            borderColor="neutral.500"
            gap={10}
          >
            <Link onClick={() => navigate("/")}>
              <Image src={logo} alt="Logo" aria-label="Logo" title="Logo" />
            </Link>
            <Navbar direction="row" />
          </Flex>
        </div>
      ) : (
        <div style={{ padding: "30px 40px" }}>
          <Flex
            justify="space-between"
            align="center"
            p={{ base: "10px 2px", sm: "10px 40px" }}
            borderTop="1px solid"
            borderBottom="1px solid"
            borderColor="neutral.500"
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
