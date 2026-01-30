export type Project = {
  id: string;
  title: string;
  description: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: "terrasse",
    title: "Terrasse – før og etter",
    description:
      "Oppgradering av terrasse med moderne uttrykk og bedre bruksmuligheter.",
    images: [
      "/projects/gammelterasse.jpg",
      "/projects/gammelterasse1.jpg",
      "/projects/nyterasse.jpg",
      "/projects/nyterasse1.jpg",
    ],
  },
  {
    id: "walkincloset",
    title: "Walk-in closet",
    description:
      "Skreddersydd garderobeløsning med praktisk lagring og rent uttrykk.",
    images: ["/projects/walkincloset.jpg", "/projects/walkincloset1.jpg"],
  },
];
