import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
      },
    },
  },
  fonts: {
    body: "Satoshi-Regular",
    heading: "Cabinet-Bold",
  },
  colors: {
    white: "#FaF8F8",
    black: "#1E1F24",
    primery: {
      100: "#F5EEF7",
      200: "#EFE4F2",
      300: "#E0CEE6",
      400: "#D5BEDD",
      500: "#C4A6CF",
      600: "#A97FB8",
      700: "#9D73AB",
      800: "#7A5588",
      900: "#341F3C",
    },
    neutral: {
      100: "#F6F4F4",
      200: "#EFF0F3",
      300: "#E7E8EC",
      400: "#E0E1E6",
      500: "#D8D9E0",
      600: "#CDCED7",
      700: "#B9BBC6",
      800: "#8B8D98",
      900: "#80828D",
      1000: "#62636C",
    },
  },
});

export default theme;
