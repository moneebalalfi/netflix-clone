import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

const Overlay: FC = ({ children }) => {
  return (
    <Box
      h="100%"
      w="100vw"
      bgImage="linear-gradient(180deg, rgba(37,37,37, 0.30), #141414)"
    >
      {children}
    </Box>
  );
};

export default Overlay;
