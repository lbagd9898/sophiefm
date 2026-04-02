import { type SchemaTypeDefinition } from "sanity";
import { job } from "./jobs";
import { about } from "./about";
import { service } from "./services";
import { quote } from "./quote";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [job, about, service, quote],
};
