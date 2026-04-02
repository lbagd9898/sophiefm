import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("job").title("Jobs"),
      S.listItem()
        .title("About")
        .id("about")
        .child(S.document().schemaType("about").documentId("about")),
      S.listItem()
        .title("Quote")
        .id("quote")
        .child(S.document().schemaType("quote").documentId("quote")),
    ]);
