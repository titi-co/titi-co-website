import { Header } from "@/components";
import { Footer, Projects } from "@/containers";
import { Box, Container } from "@mui/material";
import Head from "next/head";

export default function Works() {
  return (
    <div>
      <Head>
        <title>titi.co - Works</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />

      <Box as="main" pt={14} px={2}>
        <Container maxWidth="sm">
          <Projects />
          <Footer />
        </Container>
      </Box>
    </div>
  );
}
