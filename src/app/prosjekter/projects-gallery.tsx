"use client";

"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { Lightbox } from "@/components/Lightbox";

const ProjectsGallery = ({ projects }: { projects: Project[] }) => {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const activeProject = projects.find((p) => p.id === openProject);

  const openLightbox = (projectId: string, idx: number) => {
    setOpenProject(projectId);
    setImageIndex(idx);
  };

  const closeLightbox = () => setOpenProject(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const imageCount = project.images.length;
          return (
            <article
              key={project.id}
              className="card overflow-hidden shadow-sm"
            >
              <button
                onClick={() => openLightbox(project.id, 0)}
                className="group relative w-full aspect-square sm:aspect-[4/3] overflow-hidden"
                aria-label={`Åpne galleri for ${project.title}`}
              >
                <Image
                  src={project.images[0]}
                  alt={`${project.title} forsidebilde`}
                  fill
                  className="object-cover transition duration-200 group-hover:scale-105 group-hover:brightness-105"
                />
                <span className="absolute bottom-3 right-3 rounded-full bg-black/70 text-white text-xs font-semibold px-3 py-1">
                  {imageCount} {imageCount === 1 ? "bilde" : "bilder"}
                </span>
              </button>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {activeProject && (
        <Lightbox
          images={activeProject.images}
          startIndex={imageIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
};

export default ProjectsGallery;
