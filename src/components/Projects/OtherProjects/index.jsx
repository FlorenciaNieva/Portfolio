import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, Image, Text, Spinner } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../../firestore.config";
import Card from "./CardSmall";
import SafePaws from "../../../assets/img/SafePaws.webp";
import MovieApp from "../../../assets/img/MovieApp.webp";
import Carrers from "../../../assets/img/Carrers.webp";
import AhorrAdas from "../../../assets/img/Ahorradas.webp";
import MemeGenerator from "../../../assets/img/MemeGenerate.webp";

const imageMap = {
  SafePaws,
  MovieApp,
  Carrers,
  MemeGenerator,
  AhorrAdas,
};

export default function index({ id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collec = collection(db, "projects");
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

  const filteredData = data.filter((info) => info.id !== id).slice(0, 3);

  return (
    <Flex
      direction="column"
      px={{ base: "42px", sm: "80px" }}
      justify="start"
      align="center"
      gap={16}
      mt={16}
    >
      <Flex justify="center" align="center" w="50vw" gap={5}>
        <Flex borderTop="1px solid" borderColor="neutral.1000" flex="1"></Flex>
        <Text fontSize="xl" color="neutral.1000" whiteSpace="nowrap">
          Mira otros proyectos
        </Text>
        <Flex borderTop="1px solid" borderColor="neutral.1000" flex="1"></Flex>
      </Flex>

      <Flex direction={{base: "column", md: "row"}} justify="center" align="stretch" gap={{base: 8, lg: 20}} wrap="wrap">
        {loading ? (
          <div>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              size="lg"
              color="primary.700"
            />
          </div>
        ) : (
          filteredData.map((info) => (
            <Card
              key={info?.id}
              id={info?.id}
              img={imageMap[info?.title]}
              title={info?.title}
            />
          ))
        )}
      </Flex>
    </Flex>
  );
}
