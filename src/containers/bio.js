import { Section } from "@/components";
import { Box } from "@mui/material";

export default function BioContainer({ children }) {
  return (
    <Section>
      <Section.Title>My life</Section.Title>
      <Box height={25} />
      <Section.Body>
        <Section.Timeline>
          <Section.TimelineItem
            date="2000"
            description="Born in Belo Horizonte, Brazil"
          />
          <Section.TimelineItem
            date="2018"
            description="Completed Technician Degree in COTEMIG"
          />
          <Section.TimelineItem
            date="2019"
            description="Worked at Seidor Brasil as an Intern."
          />
          <Section.TimelineItem
            date="2021"
            description="Worked at nata.house as JavaScript and Flutter Developer."
          />
          <Section.TimelineItem
            date="2023"
            description="Completed Bachelor's Degree in Computer Science PUCMINAS."
          />
        </Section.Timeline>
      </Section.Body>
    </Section>
  );
}
