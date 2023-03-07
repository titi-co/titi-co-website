import { headerFont } from "@/config/fonts";
import ColorModeContext from "@/contexts/colorModeContext";
import { Box, Container, Menu, MenuItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { AnimatePresence, motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

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
            : "rgba(255, 255, 255, 0.25)",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            paddingX: { md: 10, lg: 10 },
          }}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Logo />
          <Pages />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <ColorMode />
            <MenuButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const Logo = function HeaderLogo({ children, ...restProps }) {
  const theme = useTheme();

  const [hover, setHover] = useState(false);

  const hoverVariants = {
    hovering: { y: -5 },
    notHovering: { y: 0 },
  };

  const router = useRouter();

  return (
    <Box
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => router.push("/")}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        cursor: "pointer",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        component={motion.div}
        variants={hoverVariants}
        animate={hover ? "hovering" : "notHovering"}
      >
        <Image
          src={`./icons/${
            theme.palette.mode == "dark" ? "ghost-white" : "ghost-black"
          }.svg`}
          width={20}
          height={20}
        />
      </Box>
      <Typography
        pl={1}
        className={headerFont.className}
        fontWeight={600}
        variant="h6"
      >
        titi.co
      </Typography>
    </Box>
  );
};

const Pages = function HeaderPages({ children, ...restProps }) {
  const router = useRouter();
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="start"
      alignItems="center"
      flex={1}
      px={5}
      sx={{
        display: { xs: "none", sm: "none", md: "flex" },
      }}
    >
      <HeaderItem path={router.pathname} href="/works">
        Work
      </HeaderItem>
      <HeaderItem
        path={router.pathname}
        href="https://github.com/titi-co/titi-co-website"
      >
        Source
      </HeaderItem>
    </Box>
  );
};

const HeaderItem = function HeaderItem({ children, href, path, ...restProps }) {
  const [hover, setHover] = useState(false);
  const theme = useTheme();

  const active = href == path;

  return (
    <Box
      bgcolor={active ? theme.palette.primary.main : undefined}
      py={1}
      px={2}
    >
      <Link
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        href={href}
        style={{
          textDecoration: "none",
          color: active
            ? theme.palette.custom.headerSelected
            : theme.palette.text.primary,
        }}
      >
        <Typography
          display="inline-block"
          position="relative"
          variant="subtitle1"
          fontWeight={500}
          className={headerFont.className}
          sx={
            hover
              ? {
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: 2,
                    backgroundColor: active
                      ? theme.palette.custom.headerSelected
                      : theme.palette.text.primary,
                    borderRadius: 1,
                  },
                }
              : {}
          }
        >
          {children}
        </Typography>
      </Link>
    </Box>
  );
};

const ColorMode = function HeaderColorMode({ children, ...restProps }) {
  const theme = useTheme();

  const [hover, setHover] = useState(false);

  const colorMode = useContext(ColorModeContext);
  const lightModeColor = "#FFD56F";
  const lightModeColorHover = "#E7B10A";
  const darkModeColor = "#865DFF";
  const darkModeColorHover = "#4E31AA";

  const hoverVariants = {
    hovering: {
      backgroundColor:
        theme.palette.mode == "dark" ? lightModeColorHover : darkModeColorHover,
    },
    notHovering: {
      backgroundColor:
        theme.palette.mode == "dark" ? lightModeColor : darkModeColor,
    },
  };

  return (
    <Box
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
      onMouseUp={() => {
        setHover(false);
      }}
      component={motion.div}
      overflow="hidden"
      onClick={colorMode.toggleColorMode}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={2}
      p={1}
      variants={hoverVariants}
      animate={hover ? "hovering" : "notHovering"}
      sx={{
        cursor: "pointer",
      }}
    >
      <AnimatePresence mode="wait">
        <Box
          overflow="hidden"
          display="flex"
          key={theme.palette.mode}
          justifyContent="center"
          alignItems="center"
          component={motion.div}
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          exit={{ x: 50 }}
          sx={{ overflowX: "hidden" }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.25 }}
        >
          <Image
            src={`./icons/${theme.palette.mode == "dark" ? "sun" : "moon"}.svg`}
            width={25}
            height={25}
          />
        </Box>
      </AnimatePresence>
    </Box>
  );
};

const MenuButton = function HeaderMenu({ children, ...restProps }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNavigation = (path) => {
    router.push(path);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter();

  return (
    <>
      <Box
        onClick={handleClick}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius={2}
        border={1}
        borderColor="gray"
        p={1}
        ml={2}
        sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
      >
        <Image
          src={`./icons/${
            theme.palette.mode == "dark" ? "menu-white" : "menu-black"
          }.svg`}
          width={25}
          height={25}
        />
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            width: 250,
            marginTop: 10,
          },
        }}
      >
        <MenuItem onClick={() => handleNavigation("/works")}>
          <HeaderItem href="/works">Works</HeaderItem>
        </MenuItem>
        <MenuItem
          onClick={() =>
            handleNavigation("https://github.com/titi-co/titi-co-website")
          }
          LinkComponent={Link}
        >
          <HeaderItem href="https://github.com/titi-co/titi-co-website">
            View Source Code
          </HeaderItem>
        </MenuItem>
      </Menu>
    </>
  );
};
