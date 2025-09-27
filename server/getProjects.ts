"use server";

import { prisma } from "@/lib/prisma";

export async function getProjects() {
  return await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}
