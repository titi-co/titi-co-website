import { bodyFont } from "@/config/fonts";
import { alpha, useTheme } from "@mui/material/styles";
import { Typography, Box, Button, Stack } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useState } from "react";
import Link from "next/link";

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
