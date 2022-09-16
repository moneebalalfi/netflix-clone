import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import YouTube, { Options } from "react-youtube";
// @ts-ignore
import axios, { ImgBaseUrl } from "../libs/axios";
interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const Row: FC<RowProps> = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState<TMovies>();
  const [trailerUrl, setTrailerUrl] = useState("kzQTc0-iBX8");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(fetchUrl);
      setMovies(data.results);
    };

    getData();
  }, [fetchUrl]);

  const handleClick = (movie: TMovie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    }
  };

  const opts: Options = {
    height: "400",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <Box ml={4} my={2}>
      <Heading fontWeight="normal" fontSize="1.4rem" ml="inherit">
        {title}
      </Heading>
      <Stack spacing={2} overflowX="auto" padding={4} isInline>
        {movies?.map((movie) => (
          <Box key={movie.id} w={{ base: "100px", md: "160px" }} flexShrink={0}>
            <Image
              src={`${ImgBaseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              onClick={() => handleClick(movie)}
              rounded={4}
              alt={movie.title}
              w="100%"
              maxH={isLargeRow ? "250px" : { base: "100px", md: "160px" }}
              objectFit="contain"
              transition="transform 500ms"
              _hover={{ transform: isLargeRow ? "scale(1.09)" : "scale(1.07)" }}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Row;
