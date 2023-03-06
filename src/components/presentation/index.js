import { bodyFont } from "@/config/fonts";
import { Typography } from "@mui/material";

export default function Presentation({ children, ...restProps }) {
  return <>{children}</>;
}

Presentation.Title = function PresentationTitle({ children, ...restProps }) {
  return (
    <Typography
      variant="h4"
      className={bodyFont.className}
      fontWeight={700}
      mb={1}
    >
      {children}
    </Typography>
  );
};

Presentation.Subtitle = function PresentationSubtitle({
  children,
  ...restProps
}) {
  return (
    <Typography
      variant="subtitle1"
      className={bodyFont.className}
      fontWeight={400}
      lineHeight="normal"
    >
      {children}
    </Typography>
  );
};
