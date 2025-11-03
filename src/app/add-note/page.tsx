import { AddNote } from "./_components/form";

export default function AddNotePage() {
  return (
    <main className="p-8 max-w-md mx-auto bg-neutral-900 rounded-lg text-white">
      <h1 className="text-2xl font-bold mb-4">Add New Note</h1>

      <AddNote
        note={{
          description: "",
          title: "",
        }}
      />
    </main>
  );
}
