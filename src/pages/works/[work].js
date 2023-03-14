import { Header } from "@/components";
import { Footer, PageWrapper, Project } from "@/containers";
import { getWorkDetails, getWorkNameList } from "@/fixtures/projects";
import { Box, Container } from "@mui/material";
import Head from "next/head";

export async function getStaticPaths() {
  const paths = await getWorkNameList();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const workData = await getWorkDetails(params.work);
  const work = JSON.parse(JSON.stringify(workData));
  return {
    props: {
      work,
    },
  };
}

export default function Work({ work }) {
  return (
    <div>
      <Head>
        <title>{`titi.co - ${work.name}`}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <PageWrapper>
        <Box as="main" pt={10} px={2}>
          <Container maxWidth="sm">
            <Project work={work} />
            <Footer />
          </Container>
        </Box>
      </PageWrapper>
    </div>
  );
}
