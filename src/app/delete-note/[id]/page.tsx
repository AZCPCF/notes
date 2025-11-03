import { getNoteById } from "@/features/notes/note.action";
import { DeleteNoteForm } from "./_components/form";

export default async function DeleteNotePage({
  params,
}: PageProps<"/delete-note/[id]">) {
  const { id } = await params;
  const note = await getNoteById(+id);

  return <DeleteNoteForm note={note} />;
}
