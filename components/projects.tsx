import { getProjects } from "@/server/getProjects";
import ProjectCard from "./project-card";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div id="projects">
      <h1 className="py-8 px-32 text-xl font-bold">Some Projects:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-32">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
