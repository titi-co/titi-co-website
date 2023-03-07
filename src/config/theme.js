import { alpha } from "@mui/material";

const getMode = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#865DFF" },
          background: {
            default: "#F7EFE5",
            paper: "#fff",
          },
          custom: {
            sectionUnderline: "#4d4c4c",
          },
        }
      : {
          primary: { main: "#6C00FF" },
          background: {
            default: "#202023",
            paper: "#151933",
          },
          custom: {
            sectionUnderline: "#464a53",
          },
        }),
  },
});

export default getMode;
