import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios, { ImgBaseUrl } from "../libs/axios";
import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import requests from "../libs/requests";
import truncate from "../helpers/truncate";
import Overlay from "./Overlay";
import getRandomMovie from "../helpers/getRandomMovie";

const Banner = () => {
  const [movie, setMovie] = useState<TMovie>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(requests.trendingMovies);

      const movie = getRandomMovie(data.results);
      setMovie(movie);
      console.log(movie);
    };

    getData();
  }, []);
  return (
    <Flex
      as="header"
      bgImage={`url(${ImgBaseUrl}${movie?.backdrop_path!})`}
      bgSize="cover"
      backgroundPosition={{ base: "center", md: "unset" }}
      objectFit="contain"
      height="500px"
      alignItems="center"
    >
      <Overlay>
        <Box ml={{ base: 8, md: 12 }} mt={24}>
          <Heading as="h1" fontSize={{ base: "2rem", md: "4rem" }}>
            {movie?.title || movie?.original_title || movie?.name}
          </Heading>
          <Text
            w="45rem"
            lineHeight="1.3"
            pt="1rem"
            fontSize={{ base: ".8rem", md: "1rem" }}
            fontWeight="medium"
            maxW="360px"
            maxH="100px"
          >
            {truncate(movie?.overview!, 180)}
          </Text>
          <Stack isInline fontWeight="normal" mt={4}>
            <Button
              leftIcon={<FaPlay />}
              variant="sold"
              bg="white"
              color="black"
              w={{ base: "130px", md: "150px" }}
            >
              Play
            </Button>
            <Button
              leftIcon={<ImInfo />}
              bg="rgba(109,109,110,0.7)"
              color="white"
              fontWeight="medium"
              w={{ base: "120px", md: "140px" }}
            >
              More Info
            </Button>
          </Stack>
        </Box>
      </Overlay>
    </Flex>
  );
};

export default Banner;
