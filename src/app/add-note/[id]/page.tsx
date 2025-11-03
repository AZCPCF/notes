import { getNoteById } from "@/features/notes/note.action";
import { AddNote } from "../_components/form";
import { redirect } from "next/navigation";

export default async function EditNotePage({
  params,
}: PageProps<"/add-note/[id]">) {
  const { id } = await params;
  const note = await getNoteById(+id);
  if (!note?.id) {
    redirect("/");
  }
  return (
    <main className="p-8 max-w-md mx-auto bg-neutral-900 rounded-lg text-white">
      <h1 className="text-2xl font-bold mb-4">Add New Note</h1>

      <AddNote update note={note} />
    </main>
  );
}
