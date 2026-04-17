import { schema } from "normalizr";

export const authorEntity = new schema.Entity("authors");

export const bookEntity = new schema.Entity("books", {
  author: authorEntity,
});

export const bookListEntity = new schema.Array(bookEntity);
