import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { bodyFont } from "@/config/fonts";

export default function Callout({ children, icon, ...restProps }) {
  const theme = useTheme();
  return (
    <Box
      component="div"
      display="flex"
      justifyContent="start"
      alignItems="center"
      bgcolor={theme.palette.divider}
      p={2}
      borderRadius={1}
    >
      <Box display="flex" flex={1}>
        <Image src={icon} width={20} height={20} />
      </Box>
      <Box display="flex" flex={8}>
        <Typography variant="p" className={bodyFont.className} fontWeight={500}>
          {children}
        </Typography>
      </Box>
    </Box>
  );
}
