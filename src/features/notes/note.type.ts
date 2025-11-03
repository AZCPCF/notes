import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { notes } from "./note.schema";

export type Note = InferSelectModel<typeof notes>;
export type NewNote = InferInsertModel<typeof notes>;
