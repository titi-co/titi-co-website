import { bodyFont } from "@/config/fonts";
import { Box, Typography, useTheme } from "@mui/material";

export default function Footer({ children, ...restProps }) {
  const theme = useTheme();
  return (
    <Box p={theme.spacing(4)}>
      <Typography
        variant="subtitle2"
        className={bodyFont.className}
        fontWeight={400}
        align="center"
        color={theme.palette.text.disabled}
      >
        {children}
      </Typography>
    </Box>
  );
}
