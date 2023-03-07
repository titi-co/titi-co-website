import { alpha } from "@mui/material";

const getMode = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#865DFF", light: "#b399ff" },
          secondary: { main: "#F56EB3" },
          info: { light: "#8af4f1", main: "#0b7471", dark: "#042f2d" },
          background: {
            default: "#F7EFE5",
            paper: "#fff",
          },
          custom: {
            sectionUnderline: "#4d4c4c",
            headerSelected: "#fff",
          },
        }
      : {
          primary: { main: "#6C00FF", light: "#b399ff" },
          secondary: { main: "#FB2576" },
          info: { light: "#ffcc80", main: "#FFB84C", dark: "#b36b00" },

          background: {
            default: "#202023",
            paper: "#151933",
          },
          custom: {
            sectionUnderline: "#464a53",
            headerSelected: "#fff",
          },
        }),
  },
});

export default getMode;
