import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../../../firestore.config";
import { Box, Flex, Heading, Image, Text, Spinner } from "@chakra-ui/react";
import Button from "../../Button";
import SafePaws from "../../../assets/img/SafePaws.webp";
import MovieApp from "../../../assets/img/MovieApp.webp";
import Carrers from "../../../assets/img/Carrers.webp";
import AhorrAdas from "../../../assets/img/Ahorradas.webp";
import MemeGenerator from "../../../assets/img/MemeGenerate.webp";
import Justina from "../../../assets/img/Justina.webp";
import OtherProjects from "../OtherProjects";

const imageMap = {
  SafePaws,
  MovieApp,
  Carrers,
  MemeGenerator,
  AhorrAdas,
  Justina,
};

export default function index() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "projects", id);
        const docSnap = await getDoc(docRef);

        if (doc) {
          setData({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No such document!");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error.message);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <Flex justify="center" align="center" pt={{ base: "15vh", sm: "25vh" }}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          size="lg"
          color="primary.700"
        />
      </Flex>
    );
  }

  return (
    <>
      <Flex
        direction={{ base: "column-reverse", lg: "row" }}
        px={{ base: "42px", sm: "80px" }}
        pt={{ base: "15vh", sm: "25vh" }}
        justify="start"
        align="stretch"
        gap={{ base: 10, lg: 40 }}
      >
        <Flex
          direction="column"
          justify="space-between"
          w={{ base: "100%", md: "80%" }}
          gap={2}
        >
          <Flex direction="column" gap={2}>
            <Heading>{data.title}</Heading>
            <Text>{data.description}</Text>
          </Flex>
          <Flex
            gap={{ base: 0, lg: 3 }}
            direction={{ base: "column", lg: "row" }}
          >
            <Button title="IR AL PROYECTO" href={data.link} />
            <Button title="IR AL REPOSITORIO" href={data.repo} />
          </Flex>
        </Flex>

        <Box pos="relative" w={{ base: "100%", lg: "80%" }}>
          <Image
            src={imageMap[data.title]}
            alt="Imagen del proyecto"
            aria-label="Imagen del proyecto"
            objectFit="cover"
            maxW="100%"
            h="100%"
            borderRadius="20px"
          />
          <Box
            pos="absolute"
            bottom="0"
            left="0"
            w="100%"
            h="100%"
            background="linear-gradient(179.62deg, rgba(0, 0, 0, 0) 42.75%, rgba(15, 16, 18, 0.1) 79.8%, rgba(30, 31, 36, 0.2) 99.67%)"
            borderRadius="20px"
          />
        </Box>
      </Flex>
      <Flex
        borderRadius={20}
        bg="primary.300"
        justify="center"
        align="center"
        mx={{ base: "42px", sm: "80px" }}
        p={10}
        mt={10}
      >
        <Text w="48%" textAlign="center">
          {data.tools}
        </Text>
      </Flex>
      <OtherProjects id={data.id} />
    </>
  );
}
