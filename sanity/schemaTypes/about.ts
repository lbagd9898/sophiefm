import { defineField, defineType } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  __experimental_actions: ["update", "publish"], // removes "create" and "delete"
  fields: [
    defineField({
      name: "bio",
      title: "About Me",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
