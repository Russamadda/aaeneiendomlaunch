import Image from "next/image";
import { Project } from "@/data/projects";

export const ProjectCard = ({ project }: { project: Project }) => {
  const cover = project.images[project.images.length - 1] ?? project.images[0];
  return (
    <div className="card overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[4/3]">
        <Image
          src={cover}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
        </div>
        <p className="text-sm text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};
