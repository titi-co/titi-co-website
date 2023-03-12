import { bodyFont } from "@/config/fonts";
import { alpha, useTheme } from "@mui/material/styles";
import { Typography, Box, Button, Stack, Grid } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Section({ children, ...restProps }) {
  return <>{children}</>;
}

Section.Title = function SectionTitle({ children, ...restProps }) {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h6"
        display="inline-block"
        position="relative"
        className={bodyFont.className}
        fontWeight={700}
        mb={1}
        sx={{
          "&:after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: -5,
            width: "100%",
            height: 4,
            backgroundColor: theme.palette.custom.sectionUnderline,
            borderRadius: 1,
          },
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

Section.Body = function SectionSubtitle({ children, ...restProps }) {
  return <> {children}</>;
};

Section.Timeline = function SectionTimeline({ children, ...restProps }) {
  return <Box> {children}</Box>;
};

Section.TimelineItem = function SectionTimelineItem({
  date,
  description,
  ...restProps
}) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography
        variant="subtitle1"
        className={bodyFont.className}
        fontWeight={700}
      >
        {date}
      </Typography>
      <Typography
        variant="subtitle1"
        className={bodyFont.className}
        fontWeight={400}
      >
        {description}
      </Typography>
    </Stack>
  );
};

Section.ButtonLink = function SectionButtonLink({ children, ...restProps }) {
  return (
    <Button
      variant="contained"
      disableElevation
      disableRipple
      endIcon={<KeyboardArrowRightRoundedIcon />}
      sx={{ textTransform: "none" }}
    >
      {children}
    </Button>
  );
};

Section.SocialButton = function SectionSocialButton({
  children,
  icon,
  href,
  ...restProps
}) {
  const theme = useTheme();
  const [hover, setHover] = useState(false);
  return (
    <Button
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      variant="contained"
      disableElevation
      disableRipple
      disableFocusRipple
      startIcon={icon}
      sx={{
        textTransform: "none",
        backgroundColor: theme.palette.background.default,
        "&.MuiButtonBase-root:hover": {
          bgcolor: alpha(
            theme.palette.mode == "dark"
              ? theme.palette.info.dark
              : theme.palette.info.light,
            0.4
          ),
        },
      }}
    >
      <Link
        href={href}
        style={{ textDecoration: "none", color: theme.palette.info.main }}
      >
        <Typography
          display="inline-block"
          position="relative"
          variant="subtitle1"
          fontWeight={500}
          className={bodyFont.className}
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
                    backgroundColor: theme.palette.info.main,
                    borderRadius: 1,
                  },
                }
              : {}
          }
        >
          {children}
        </Typography>
      </Link>
    </Button>
  );
};

Section.BodyLink = function SectionBodyLink({ children, href, ...restProps }) {
  const [hover, setHover] = useState(false);
  const theme = useTheme();

  return (
    <Link
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      href={href}
      style={{ textDecoration: "none", color: theme.palette.secondary.main }}
    >
      <Typography
        component="span"
        display="inline-block"
        position="relative"
        variant="subtitle1"
        fontWeight={500}
        className={bodyFont.className}
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
                  backgroundColor: theme.palette.secondary.main,
                  borderRadius: 1,
                },
              }
            : {}
        }
      >
        {children}
      </Typography>
    </Link>
  );
};

Section.SectionGrid = function SectionGrid({ children, ...restProps }) {
  return (
    <Grid container spacing={3}>
      {children}
    </Grid>
  );
};

Section.SectionGridItem = function SectionGridItem({
  key,
  children,
  ...restProps
}) {
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={key}>
      <Box display="flex" flex={1}>
        {children}
      </Box>
    </Grid>
  );
};

Section.SectionWorkCard = function SectionWorkCard({
  name,
  description,
  cover,
  ...restProps
}) {
  return (
    <Box>
      <Box
        position="relative"
        width="100%"
        borderRadius={2}
        overflow="hidden"
        sx={{
          height: {
            xs: 250,
            sm: 250,
            md: 150,
            lg: 150,
            xl: 150,
          },
        }}
      >
        <Image src={`/images/${cover}`} alt={`${name}-cover`} fill />
      </Box>
      <Box height={25} />
      <Typography
        variant="subtitle1"
        className={bodyFont.className}
        fontWeight={700}
      >
        {name}
      </Typography>
      <Typography
        variant="caption"
        className={bodyFont.className}
        fontWeight={400}
      >
        {description}
      </Typography>
    </Box>
  );
};
