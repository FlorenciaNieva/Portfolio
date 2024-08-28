import React from "react";
import {
  Button,
  Box,
  Flex,
  FormControl,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "@formspree/react";

export default function index() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORM_KEY);

  if (state.succeeded) {
    return <Text fontSize="2xl">Gracias por comunicarte conmigo</Text>;
  }

  return (
    <Box
      borderRadius={20}
      shadow="0px 20px 40px 0px #0000001A"
      background="linear-gradient(167.69deg, rgba(255, 255, 255, 0.5) 8.02%, rgba(255, 255, 255, 0.1) 111.34%)"
      w={{base: "80vw", sm: "50vw", lg:"25vw"}}
      p={6}
    >
      <form
        onSubmit={handleSubmit}
        data-aos="zoom-out"
        data-aos-duration="2000"
      >
        <FormControl>
          <Flex direction="column" align="center" gap={5}>
            <Input
              type="text"
              name="name"
              id="name"
              isRequired
              borderRadius={10}
              border="1px solid black"
              focusBorderColor="primary.700"
              placeholder="Nombre"
              _placeholder={{ color: "black" }}
              _hover={{ border: "1px solid", borderColor: "primary.700" }}
            />
            <Input
              type="number"
              name="tel"
              id="tel"
              isRequired
              borderRadius={10}
              border="1px solid black"
              focusBorderColor="primary.700"
              placeholder="Teléfono"
              _placeholder={{ color: "black" }}
              _hover={{ border: "1px solid", borderColor: "primary.700" }}
            />
            <Input
              type="email"
              name="email"
              id="email"
              isRequired
              borderRadius={10}
              border="1px solid black"
              focusBorderColor="primary.700"
              placeholder="Email"
              _placeholder={{ color: "black" }}
              _hover={{ border: "1px solid", borderColor: "primary.700" }}
            />
            <Textarea
              name="textarea"
              id="textarea"
              isRequired
              focusBorderColor="primary.700"
              borderRadius={10}
              border="1px solid black"
              placeholder="Escribí tu mensaje acá :)"
              _placeholder={{ color: "black" }}
              _hover={{ border: "1px solid", borderColor: "primary.700" }}
            />
            <Button
              type="submit"
              isLoading={state.submitting}
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
              ENVIAR
            </Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
}
