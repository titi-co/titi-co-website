import { Section } from "@/components";
import { bodyFont } from "@/config/fonts";
import { Typography, Box } from "@mui/material";
import { Container } from "@mui/system";

export default function MyselfContainer({ children }) {
  return (
    <Section>
      <Section.Title>Myself</Section.Title>
      <Box height={25} />
      <Section.Body>
        <Typography
          variant="body1"
          className={bodyFont.className}
          fontWeight={400}
          mb={1}
          align="justify"
        >
          &emsp;&emsp;I graduated as computer scientist from Pontifical Catholic
          University of Minas Gerais (PUC Minas) and also have computer
          technician degree from Colégio e Faculdade COTEMIG. I started my
          career as an intern in projects for Vale and Grupo Petrópolis using
          the latest technologies. At free time I learn new techniques, tools,
          architectures and the best practices of the development world.
          Frequently I start new some projects on my own or with friends to
          improve my programming experience.
        </Typography>
      </Section.Body>
      <Box height={25} />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Section.ButtonLink>My portfolio</Section.ButtonLink>
      </Box>
    </Section>
  );
}
