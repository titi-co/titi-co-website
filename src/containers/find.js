import { Section } from "@/components";
import { Box, Stack, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function FindContainer({ children }) {
  const theme = useTheme();
  return (
    <Section>
      <Section.Title>Find me</Section.Title>
      <Box height={25} />
      <Section.Body>
        <Stack direction="column" alignItems="start" spacing={2}>
          <Section.SocialButton
            href="https://github.com/titi-co"
            icon={<GitHubIcon color="info" />}
          >
            @titi-co
          </Section.SocialButton>
          <Section.SocialButton
            href="https://www.linkedin.com/in/thiago-oliveira-982532259/"
            icon={<LinkedInIcon color="info" />}
          >
            @thiago-oliveira
          </Section.SocialButton>
        </Stack>
      </Section.Body>
    </Section>
  );
}
