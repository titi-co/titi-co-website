import {
  Inter_Tight,
  M_PLUS_Rounded_1c,
  IBM_Plex_Sans,
} from "next/font/google";

export const bodyFont = IBM_Plex_Sans({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const headerFont = Inter_Tight({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
});
