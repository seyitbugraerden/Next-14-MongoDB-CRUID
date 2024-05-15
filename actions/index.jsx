"use server";
import { prisma } from "../utils/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo(item) {
  await prisma.todo.create({
    data: {
      title: item,
    },
  });
  revalidatePath("/");
}

export async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: false,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return data;
}

export async function deleteTodo(id) {
  const data = await prisma.todo.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
}
