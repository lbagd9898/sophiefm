import { defineField, defineType } from "sanity";

export const quote = defineType({
  name: "quote",
  title: "Quote",
  type: "document",
  __experimental_actions: ["update", "delete"],
  fields: [
    defineField({
      name: "quote",
      title: "Quote for services page.",
      description:
        "Add an inspirational quote to get people to buy your services.",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
