import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "bio",
      title: "About Me",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
