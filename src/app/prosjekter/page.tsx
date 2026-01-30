import { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import ProjectsGallery from "./projects-gallery";

export const metadata: Metadata = {
  title: "Prosjekter – AAEN Eiendom",
  description: "Se utvalgte prosjekter fra AAEN Eiendom innen rehabilitering, modernisering og oppussing i Bergen.",
};

const ProjectsPage = () => {
  return (
    <div className="section-shell py-12 lg:py-16 space-y-8">
      <SectionHeader
        eyebrow="Prosjekter"
        title="Utvalgte jobber i Bergen"
        description="Et samlet galleri – klikk på bildene for å bla i prosjektet."
      />
      <ProjectsGallery projects={projects} />
    </div>
  );
};

export default ProjectsPage;
