import { Section } from "@/components";
import { bodyFont } from "@/config/fonts";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function ProjectContainer({ work, children }) {
  return (
    <Section>
      <Section.Breadcrumbs dateBegin={work.dateBegin} dateEnd={work.dateEnd}>
        {work.name}
      </Section.Breadcrumbs>
      <Box height={25} />
      <Section.Body>
        <Typography
          variant="body2"
          className={bodyFont.className}
          fontWeight={500}
          mb={1}
          align="justify"
        >
          &emsp;&emsp;{work.description}
        </Typography>
        <Box height={25} />
        <Section.Detail name="WEBSITE">
          <Section.BodyLink href={work.website} variant="body2">
            {work.website.replace("https://", "")}
          </Section.BodyLink>
        </Section.Detail>
        <Box height={10} />
        <Section.Detail name="PLATFORM">{work.platform}</Section.Detail>
        <Box height={10} />
        <Section.Detail name="STACK">{work.stack}</Section.Detail>
        <Box height={25} />
        {work.images.map((image, index) => (
          <>
            <Section.Image key={index} image={image} alt={`work-${index}`} />
            <Box height={10} />
          </>
        ))}
        {work.video != "" ? <Section.Video video={work.video} /> : null}
      </Section.Body>
    </Section>
  );
}
