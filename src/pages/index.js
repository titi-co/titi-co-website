import { Callout, Header } from "@/components";
import { Box, Container } from "@mui/material";
import Head from "next/head";
import { Presentation } from "@/containers";

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
          <Callout icon="./icons/emoji-hangloose.svg">
            Hi! I'm a brazilian software engineer!
          </Callout>
          <Box height={25} />
          <Presentation />
        </Container>
      </Box>
    </div>
  );
}
