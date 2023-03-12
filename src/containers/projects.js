import { Section } from "@/components";
import { collaborations, projects } from "@/fixtures/projects";
import { Box } from "@mui/material";

export default function ProjectsContainer({ children }) {
  return (
    <Section>
      <Section.Title>Projects</Section.Title>
      <Box height={25} />
      <Section.Body>
        <Section.SectionGrid>
          {projects.map((project, index) => (
            <Section.SectionGridItem key={index} href={project.href}>
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
      <Section.Body>
        <Section.SectionGrid>
          {collaborations.map((collaboration, index) => (
            <Section.SectionGridItem key={index} href={collaboration.href}>
              <Section.SectionWorkCard
                name={collaboration.name}
                description={collaboration.description}
                cover={collaboration.cover}
              />
            </Section.SectionGridItem>
          ))}
        </Section.SectionGrid>
      </Section.Body>
    </Section>
  );
}
