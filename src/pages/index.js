import { Header } from "@/components";
import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { Presentation } from "@/containers";

const mp = M_PLUS_Rounded_1c({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>titi.co</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Box as="main" pt={14} px={2}>
        <Container maxWidth="sm">
          <Presentation />
        </Container>
      </Box>
    </div>
  );
}
