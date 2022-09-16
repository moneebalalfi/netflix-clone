import { extendTheme, theme } from "@chakra-ui/react";

const myCustomTheme = {
  ...theme,
  styles: {
    global: {
      body: {
        bg: "bgColor",
        color: "white",
        fontWeight: "normal",
      },
    },
  },
  fonts: {
    body: "'Kanit', sans-serif, system-ui",
    heading: "'Kanit', sans-serif",
  },
  colors: {
    transparent: "transparent",
    blue: "#3182CE",
    black: "#000",
    white: "#fff",
    bgColor: "#141414",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
};

const customTheme = extendTheme(myCustomTheme);
export default customTheme;
