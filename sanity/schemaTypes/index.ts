import { type SchemaTypeDefinition } from "sanity";
import { job } from "./jobs";
import { about } from "./about";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [job, about],
};
