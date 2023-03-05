import { Header } from "@/components";
import { Box, Container, Link, Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Box as="main" pt={14}>
        <Container>
          <Typography variant="h2">
            Welcome to{" "}
            <Link color="primary" href="https://nextjs.org">
              Next.js!
            </Link>{" "}
            integrated with <Link href="https://mui.com/">Material-UI!</Link>
          </Typography>
          <Typography variant="subtitle1">
            Get started by editing pages/index.js
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
