import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import Navbar from "../Navbar";

export default function index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box>
      <Button
        bgColor="transparent"
        zIndex="overlay"
        p={0}
        ref={btnRef}
        onClick={onOpen}
        _focus={{ outline: "none" }}
        _active={{ bgColor: "transparent" }}
      >
        <IoMenu size={30} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody py={16}>
            <Navbar direction="column" onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
