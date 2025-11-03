"use server";

import { redirect } from "next/navigation";
import { noteService } from "./note.service";
import { NewNote } from "./note.type";
import { revalidatePath } from "next/cache";

export async function createNote(
  prev: NewNote | undefined,
  formData: FormData
): Promise<NewNote | undefined> {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (!title) return;

  const newNote: NewNote = { title, description };
  await noteService.create(newNote);
  revalidatePath("/");
  redirect("/");
}

export async function updateNote(
  prev: NewNote | undefined,
  formData: FormData
): Promise<NewNote | undefined> {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (!title) return;

  const newNote: NewNote = { title, description };
  await noteService.update(+prev?.id!, newNote);
  revalidatePath("/");
  redirect("/");
}

export async function getAllNotes() {
  return await noteService.getAll();
}
export async function getNoteById(id: number) {
  return await noteService.getById(id);
}

export async function deleteNote(
  prev: { id: number } | undefined,
  formData: FormData
): Promise<{ id: number }> {
  const id = formData.get("id") as string;
  if (!id) return { id: 0 };

  await noteService.delete(+id);
  revalidatePath("/");
  redirect("/");
}
// export async function toggleTask(id: number, completed: boolean) {
//   noteService.update(id, { completed });
// }

// export async function deleteTask(id: number) {
//   taskService.delete(id);
// }
