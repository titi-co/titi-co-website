import { Callout, Header } from "@/components";
import { Box, Container } from "@mui/material";
import Head from "next/head";
import { Bio, FindMe, Hobby, Myself, Presentation, Footer } from "@/containers";

export default function Home() {
  return (
    <div>
      <Head>
        <title>titi.co</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header />

      <Box as="main" pt={14} px={2}>
        <Container maxWidth="sm">
          <Callout icon="/icons/emoji-hangloose.svg">
            Hi! I'm a brazilian software engineer!
          </Callout>
          <Box height={25} />
          <Presentation />
          <Box height={50} />
          <Myself />
          <Box height={25} />
          <Bio />
          <Box height={25} />
          <Hobby />
          <Box height={25} />
          <FindMe />
          <Footer />
        </Container>
      </Box>
    </div>
  );
}
