import { alpha } from "@mui/material";

const getMode = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#6C00FF" },
          background: {
            default: "#F7EFE5",
            paper: "#fff",
          },
        }
      : {
          primary: { main: "#6C00FF" },
          background: {
            default: "#202023",
            paper: "#151933",
          },
        }),
  },
});

export default getMode;
