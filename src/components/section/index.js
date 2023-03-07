import { bodyFont } from "@/config/fonts";
import { useTheme } from "@mui/material/styles";
import { Typography, Box, Button } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

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
