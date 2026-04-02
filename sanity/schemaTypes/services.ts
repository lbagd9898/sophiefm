import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Service Description",
      type: "array",
      of: [{ type: "string" }],
      description: "Add each bullet point as a separate item",
    }),
  ],
});
