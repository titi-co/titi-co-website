import { Presentation } from "@/components";
import Image from "next/image";

export default function HomeBoxContainer({ children }) {
  return (
    <Presentation>
      <Presentation.Title>Thiago Oliveira</Presentation.Title>
      <Presentation.Subtitle>
        Software Engineer & Creative Developer (Computer Scientist / Developer)
      </Presentation.Subtitle>
    </Presentation>
  );
}
