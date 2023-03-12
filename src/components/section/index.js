import { bodyFont } from "@/config/fonts";
import { alpha, useTheme } from "@mui/material/styles";
import {
  Typography,
  Box,
  Button,
  Stack,
  Grid,
  Breadcrumbs,
} from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import YouTube from "react-youtube";

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

Section.ButtonLink = function SectionButtonLink({
  href,
  children,
  ...restProps
}) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Button
        variant="contained"
        disableElevation
        disableRipple
        endIcon={<KeyboardArrowRightRoundedIcon />}
        sx={{ textTransform: "none" }}
      >
        {children}
      </Button>
    </Link>
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

Section.BodyLink = function SectionBodyLink({
  variant = "subtitle1",
  children,
  href,
  ...restProps
}) {
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
        variant={variant}
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
  href,
  children,
  ...restProps
}) {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <Box display="flex" flex={1}>
        <Link
          style={{ textDecoration: "none", color: theme.palette.text.primary }}
          href={`/works/${href}`}
        >
          {children}{" "}
        </Link>
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
        <Image
          src={`/images/${cover}`}
          alt={`${name}-cover`}
          fill
          style={{ objectFit: "cover" }}
        />
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
        variant="body2"
        className={bodyFont.className}
        fontWeight={400}
      >
        {description}
      </Typography>
    </Box>
  );
};

Section.Breadcrumbs = function SectionBreadcrumbs({
  dateBegin,
  dateEnd,
  children,
  ...restProps
}) {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Section.BodyLink href="/works">Works</Section.BodyLink>

        <Typography
          variant="subtitle1"
          fontWeight={700}
          className={bodyFont.className}
          color={theme.palette.text.primary}
        >
          {children}
        </Typography>
      </Breadcrumbs>
      <Box width={5} />
      <Box
        bgcolor={theme.palette.divider}
        borderRadius={0.5}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          paddingX: 0.5,
          paddingY: 0.25,
        }}
      >
        <Typography
          lineHeight={1}
          variant="caption"
          fontWeight={700}
          className={bodyFont.className}
          color={theme.palette.text.primary}
        >{`${dateBegin}-${dateEnd}`}</Typography>
      </Box>
    </Box>
  );
};

Section.Detail = function SectionDetail({ name, children, ...restProps }) {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="start"
      alignItems="center"
    >
      <Box
        bgcolor={alpha(theme.palette.custom.detailBgColor, 0.5)}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius={0.5}
        sx={{
          paddingX: 0.5,
          paddingY: 0.25,
        }}
      >
        <Typography
          lineHeight={1}
          variant="caption"
          fontWeight={700}
          className={bodyFont.className}
          color={theme.palette.custom.detailTextColor}
        >
          {name}
        </Typography>
      </Box>
      <Box width={25} />
      <Typography
        align="center"
        lineHeight={1}
        variant="body2"
        fontWeight={700}
        className={bodyFont.className}
        color={theme.palette.text.primary}
      >
        {children}
      </Typography>
    </Box>
  );
};

Section.Image = function SectionImage({ image, alt, children, ...restProps }) {
  return (
    <Box
      position="relative"
      width="100%"
      borderRadius={2}
      overflow="hidden"
      sx={{
        height: {
          xs: 250,
          sm: 250,
          md: 400,
          lg: 400,
          xl: 400,
        },
      }}
    >
      <Image
        src={`/images/${image}`}
        fill
        style={{ objectFit: "cover" }}
        alt={alt}
      />
    </Box>
  );
};

Section.Video = function SectionVideo({ video, children, ...restProps }) {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Box width="100%" height={390}>
      <YouTube opts={opts} videoId={video} />
    </Box>
  );
};
