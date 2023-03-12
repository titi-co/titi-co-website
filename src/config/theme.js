const getMode = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#865DFF", light: "#b399ff" },
          secondary: { main: "#332FD0" },
          info: { light: "#8af4f1", main: "#0b7471", dark: "#042f2d" },
          background: {
            default: "#F7EFE5",
            paper: "#fff",
          },
          custom: {
            sectionUnderline: "#4d4c4c",
            headerSelected: "#fff",
            detailTextColor: "#395144",
            detailBgColor: "#B3FFAE",
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
            detailTextColor: "#B3FFAE",
            detailBgColor: "#7D8F69",
          },
        }),
  },
});

export default getMode;
