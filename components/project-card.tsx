import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@prisma/client";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const formattedDate = new Date(project.createdAt).toLocaleDateString(
    "ro-RO",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <Card className="overflow-hidden pt-0">
      {project.imageUrl && (
        <div className="w-full h-48 sm:h-60 md:h-72 relative">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw,
               (max-width: 768px) 50vw,
               33vw"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        {project.description && (
          <CardDescription>{project.description}</CardDescription>
        )}
      </CardHeader>
      <CardFooter>
        <p className="text-sm text-gray-500">{formattedDate}</p>
      </CardFooter>
    </Card>
  );
}
