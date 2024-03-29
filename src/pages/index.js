import { Callout, Header } from "@/components";
import { Box, Container } from "@mui/material";
import Head from "next/head";
import {
  Bio,
  FindMe,
  Hobby,
  Myself,
  Presentation,
  Footer,
  PageWrapper,
} from "@/containers";

export default function Home() {
  return (
    <div>
      <Head>
        <title>titi.co</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <PageWrapper>
        <Box as="main" pt={10} px={2}>
          <Container maxWidth="sm">
            <Callout icon="/icons/emoji-hangloose.svg">
              Hi! I&apos;m a brazilian software engineer!
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
      </PageWrapper>
    </div>
  );
}
