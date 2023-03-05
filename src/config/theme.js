import { alpha } from "@mui/material";

const getMode = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#F7EFE5",
          },
        }
      : {
          background: {
            default: "#202023",
          },
        }),
  },
});

export default getMode;
