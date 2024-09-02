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
        <Flex direction="column" w={{ base: "80vw", lg: "60vw", "2xl": "50vw" }}>
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
              Hola, me llamo Flor, tengo 19 años y me encanta la tecnología.
              Estoy muy interesada en el desarrollo de software accesible y en
              la implementación de soluciones innovadoras para mejorar la
              experiencia del usuario. Me caracterizo por ser responsable,
              autodidacta y proactiva.
              <br />
              <br />
              En 2023, me enfoqué en el desarrollo Front-End y terminé la
              capacitación en febrero de 2024. Posteriormente, participé en una
              simulación laboral en NoCountry como desarrolladora Front-End,
              donde interactué con roles interdisciplinarios y desarrollé mis
              habilidades blandas.
              <br />
              <br />
              Gracias a una beca, cursé Testing Máster en la UTN y lo completé
              en agosto de este año. Actualmente, me encuentro cursando la
              Tecnicatura Universitaria en Tecnologías de la Información en UTN
              FRAV para seguir expandiendo mis conocimientos. Además, estudio
              inglés en un instituto desde hace 2 años.
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex justify="center" my={16}>
        {data.map((info, index) => (
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
