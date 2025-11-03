"use client";
import { createNote, updateNote } from "@/features/notes/note.action";
import { Note } from "@/features/notes/note.type";
import { useActionState } from "react";

export function AddNote({
  note,
  update,
}: {
  note: Omit<Note, "id">;
  update?: boolean;
}) {
  const [state, action, pending] = useActionState(
    update ? updateNote : createNote,
    note
  );
  return (
    <form action={action} className="flex flex-col gap-4">
      <input
        type="text"
        defaultValue={state?.title}
        name="title"
        placeholder="Title"
        className="border p-2 rounded focus:outline-3 outline-indigo-600"
      />

      <textarea
        defaultValue={state?.description}
        name="description"
        placeholder="Description"
        className="border p-2 rounded focus:outline-3 outline-indigo-600 max-h-40 min-h-20"
      />

      <button
        type="submit"
        disabled={pending}
        className={`px-4 py-2 rounded text-white disabled:bg-neutral-700 bg-indigo-600 hover:bg-indigo-500 duration-100`}
      >
        {pending ? "Adding..." : "Add Note"}
      </button>

      {/* {state. && (
          <p className="text-red-500">Error: {state.error.message}</p>
        )}
        {state.result && !state.pending && (
          <p className="text-green-400">Note added successfully!</p>
        )} */}
    </form>
  );
}
