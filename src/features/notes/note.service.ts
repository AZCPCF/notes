import { db } from "@/db";
import { eq } from "drizzle-orm";
import { notes } from "./note.schema";
import type { NewNote, Note } from "./note.type";

export const noteService = {
  async getAll(): Promise<Note[]> {
    return await db.select().from(notes);
  },

  async getById(id: number): Promise<Note | undefined> {
    const result = await db.select().from(notes).where(eq(notes.id, id));
    return result[0];
  },

  async create(data: NewNote): Promise<Note> {
    // returning() gives you the inserted row
    const [inserted] = await db.insert(notes).values(data).returning();
    return inserted;
  },

  async update(id: number, data: Partial<NewNote>): Promise<Note | undefined> {
    const [updated] = await db
      .update(notes)
      .set(data)
      .where(eq(notes.id, id))
      .returning();
    return updated;
  },

  async delete(id: number): Promise<Note | undefined> {
    const [deleted] = await db
      .delete(notes)
      .where(eq(notes.id, id))
      .returning();
    return deleted;
  },
};
