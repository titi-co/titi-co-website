import ColorModeContext from "@/contexts/colorModeContext";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Inter_Tight } from "next/font/google";
import Image from "next/image";
import { useContext } from "react";

const logoFont = Inter_Tight({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Header({ children, ...restProps }) {
  const theme = useTheme();
  return (
    <Box
      position="fixed"
      width="100%"
      p={1}
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor:
          theme.palette.mode == "dark"
            ? "rgba(32, 32, 35, .8)"
            : "rgba(255, 255, 255, 0.4)",
      }}
    >
      <Container maxWidth="md">
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Logo />
          <ColorMode />
        </Box>
      </Container>
    </Box>
  );
}

const Logo = function HeaderLogo({ children, ...restProps }) {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        src={`./icons/${
          theme.palette.mode == "dark" ? "ghost-white" : "ghost-black"
        }.svg`}
        width={20}
        height={20}
      />
      <Typography
        pl={1}
        className={logoFont.className}
        fontWeight={600}
        variant="h5"
      >
        titi.co
      </Typography>
    </Box>
  );
};

const ColorMode = function HeaderLogo({ children, ...restProps }) {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const lightModeColor = "#FFD56F";
  const darkModeColor = "#865DFF";

  return (
    <Box
      onClick={colorMode.toggleColorMode}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={2}
      p={1}
      bgcolor={theme.palette.mode == "dark" ? lightModeColor : darkModeColor}
      sx={{
        cursor: "pointer",
      }}
    >
      <Image
        src={`./icons/${theme.palette.mode == "dark" ? "sun" : "moon"}.svg`}
        width={25}
        height={25}
      />
    </Box>
  );
};
