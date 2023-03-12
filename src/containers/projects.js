import { Section } from "@/components";
import { projects } from "@/fixtures/projects";
import { Box } from "@mui/material";

export default function ProjectsContainer({ children }) {
  return (
    <Section>
      <Section.Title>Projects</Section.Title>
      <Box height={25} />
      <Section.Body>
        <Section.SectionGrid>
          {projects.map((project, index) => (
            <Section.SectionGridItem key={index}>
              <Section.SectionWorkCard
                name={project.name}
                description={project.description}
                cover={project.cover}
              />
            </Section.SectionGridItem>
          ))}
        </Section.SectionGrid>
      </Section.Body>
      <Box height={25} />
      <Section.Title>Collaborations</Section.Title>
      <Box height={25} />
      <Section.Body></Section.Body>
    </Section>
  );
}
