import { getAllNotes } from "@/features/notes/note.action";
import Link from "next/link";

export default async function Home() {
  const allTasks = await getAllNotes();
  console.log(allTasks);
  return (
    <div className="grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1 mx-4 max-md:mx-2">
      {allTasks.map((t) => (
        <div
          key={t.id}
          className="w-full bg-neutral-800 rounded-lg p-3 hover:scale-105 duration-150"
        >
          <h3 className="text-xl font-extrabold">{t.title}</h3>
          <p className="text-base truncate">{t.description}</p>
          <div className="flex gap-2 *:text-sm mt-2">
            <Link
              href={"/add-note/" + t.id}
              className="bg-emerald-600 p-1 rounded-sm hover:bg-emerald-500 duration-100"
            >
              update
            </Link>
            <Link
              href={"/delete-note/" + t.id}
              className="bg-rose-600 p-1 rounded-sm hover:bg-rose-500 duration-100"
            >
              delete
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
