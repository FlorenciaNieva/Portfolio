import React, { useState, useEffect } from "react";
import { Flex, Heading, Spinner } from "@chakra-ui/react";
import Card from "./Card";
import { collection, getDocs } from "firebase/firestore";
import db from "../../../firestore.config";
import SafePaws from "../../assets/img/SafePaws.webp";
import MovieApp from "../../assets/img/MovieApp.webp";
import Carrers from "../../assets/img/Carrers.webp";
import AhorrAdas from "../../assets/img/Ahorradas.webp";
import MemeGenerator from "../../assets/img/MemeGenerate.webp";
import Justina from "../../assets/img/Justina.webp";

const imageMap = {
  SafePaws,
  MovieApp,
  Carrers,
  MemeGenerator,
  AhorrAdas,
  Justina,
};

export default function index() {
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

  return (
    <Flex
      id="projects"
      direction="column"
      justify="space-between"
      align="center"
      zIndex={1}
      pos="relative"
      pt={{base: 32, "2xl": 44}}
    >
      <Heading mb={20}>Mis Proyectos</Heading>
      <Flex justify="center" align="stretch" gap={20} wrap="wrap" px={{ base: "42px", sm: "60px", "2xl": "80px" }}>
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
          data.map((info, index) => (
            <Card
              key={info?.id}
              id={info?.id}
              img={imageMap[info?.title]}
              title={info?.title}
              summary={info?.summary}
            />
          ))
        )}
      </Flex>
    </Flex>
  );
}
