import { Section } from "@/components";
import { bodyFont } from "@/config/fonts";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function HobbyContainer({ children }) {
  return (
    <Section>
      <Section.Title>
        <Image
          alt="emoji-heart"
          src="./icons/emoji-heart.svg"
          width={20}
          height={20}
        />
      </Section.Title>
      <Box height={25} />
      <Section.Body>
        <Typography
          variant="body1"
          className={bodyFont.className}
          fontWeight={500}
          mb={1}
          align="justify"
        >
          &emsp;&emsp;Art,{" "}
          <Section.BodyLink href="https://music.apple.com/profile/cotitico">
            Music
          </Section.BodyLink>
          , Gym, Movies, Deep Learning, Algorithms, playing games (specially
          Destiny) and trying Oreo and Nutella milkshake from all the
          restaurants I visit.
        </Typography>
      </Section.Body>
    </Section>
  );
}
