import { db } from "@/db";
import { eq } from "drizzle-orm";
import { notes } from "./note.schema";
import type { NewNote, Note } from "./note.type";

export const noteService = {
  async getAll(): Promise<Note[]> {
    return db.select().from(notes);
  },

  async getById(id: number): Promise<Note | undefined> {
    const result = await db.select().from(notes).where(eq(notes.id, id));
    return result[0];
  },

  async create(data: NewNote): Promise<void> {
    (await db.insert(notes).values(data).run?.()) ??
      db.insert(notes).values(data);
  },

  async update(id: number, data: Partial<NewNote>): Promise<void> {
    (await db.update(notes).set(data).where(eq(notes.id, id)).run?.()) ??
      db.update(notes).set(data).where(eq(notes.id, id));
  },

  async delete(id: number): Promise<void> {
    (await db.delete(notes).where(eq(notes.id, id)).run?.()) ??
      db.delete(notes).where(eq(notes.id, id));
  },
};
