"use client";
import { deleteNote } from "@/features/notes/note.action";
import Link from "next/link";
import { useActionState } from "react";

export function DeleteNoteForm({
  note,
}: {
  note?: { id: number; title: string };
}) {
  "use client";
  const [state, action, pending] = useActionState(deleteNote, { id: 0 });

  if (!note) return <p className="p-8">Note not found.</p>;

  return (
    <main className="p-8 max-w-md mx-auto bg-neutral-900 rounded-lg text-white">
      <h1 className="text-2xl font-bold mb-4">Delete Note</h1>

      <form action={action} className="flex flex-col gap-4">
        <p>
          Are you sure you want to delete note: <strong>{note.title}</strong>?
        </p>

        <input type="hidden" name="id" value={note.id} />
        <div className="grid grid-cols-2 gap-3">
          <Link
            href={"/"}
            className="px-4 py-2 rounded text-white bg-neutral-700 hover:bg-neutral-600 duration-100 text-center"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={pending}
            className={`px-4 py-2 rounded text-white disabled:bg-neutral-700 bg-red-600 hover:bg-red-500 duration-100`}
          >
            {pending ? "Deleting..." : "Yes, Delete"}
          </button>
        </div>
      </form>
    </main>
  );
}
