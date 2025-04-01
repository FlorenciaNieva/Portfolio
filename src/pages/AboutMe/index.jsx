import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import profile from "../../assets/img/profile.webp";
import vector from "../../assets/svg/vectors/vector-about-me.svg";
import Accordion from "../../components/Accordion";
import Skills from "../../components/Skills";
import Button from "../../components/Button";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../firestore.config";

export default function index() {
  const [isLg] = useMediaQuery("(min-width: 992px)");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collec = collection(db, "cv");
        const docs = await getDocs(collec);
        const documents = docs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(documents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error.menssage);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Image
        src={vector}
        alt="vector de fondo"
        pos="absolute"
        top={{ base: 450, lg: 0 }}
        right={0}
        zIndex={0}
      />
      <Flex
        direction={{ base: "column", lg: "row" }}
        px={{ base: "42px", sm: "80px" }}
        pt={{ base: "15vh", sm: "25vh", "2xl": "15vh" }}
        justify="space-between"
        align={{ base: "center", lg: "start" }}
        pos="relative"
        gap={16}
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          w={{ base: "50vw", lg: "20vw" }}
          gap={5}
        >
          <Image
            src={profile}
            alt="Imagen de perfil"
            aria-label="Imagen de perfil"
            w="100%"
          />
          {isLg ? <Accordion /> : ""}
        </Flex>
        <Flex
          direction="column"
          w={{ base: "80vw", lg: "60vw", "2xl": "50vw" }}
        >
          <Heading textAlign="center" mb={5}>
            Sobre mí
          </Heading>
          <Box
            p={6}
            borderRadius={20}
            shadow="0px 20px 40px 0px #0000001A"
            backdropFilter="blur(5px)"
          >
            <Text>
              ¡Hola! soy Florencia Nieva
              <br />
              <br />
              Actualmente, soy <strong>Junior Software Engineer</strong> en NTT
              DATA desde noviembre de 2024, donde me encuentro trabajando en
              proyectos que me permiten aprender y crecer profesionalmente.
              <br />
              <br />
              Me encuentro cursando la{" "}
              <strong>Tecnicatura en Tecnologías de la Información</strong> en
              la Universidad Tecnológica Nacional y tengo el honor de haber sido elegida en distintas becas de
              fundaciones que me motivan a seguir estudiando y crecer tanto
              personal como profesionalmente gracias a mi compromiso y
              dedicación.
              <br />
              <br />
              Mi mayor motivación es desarrollar software que impacte en la vida
              diaria de las personas y que sea accesible para todos.
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex justify="center" my={16}>
        {data.map((info) => (
          <Button title="DESCARGA MI CV" href={info.link} />
        ))}
      </Flex>
      <Skills />
      <Flex justify="center" mt={20}>
        {!isLg ? <Accordion /> : ""}
      </Flex>
    </>
  );
}
