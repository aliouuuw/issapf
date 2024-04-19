export default {
  name: "photo",
  type: "document",
  title: "Photos",
  fields: [
    {
      name: "titre",
      type: "string",
      title: "Titre",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "titre",
        maxLength: 200, // adjust as needed
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "type",
      type: "string",
      title: "Type",
      description: "Type de photo",
      options: {
        list: [
          { title: "Car", value: "car" },
          { title: "Drone", value: "drone" },
          { title: "Nature", value: "nature" },
          { title: "Portrait", value: "portrait" },
          { title: "Street", value: "street" },
        ],
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "datetime",
      type: "datetime",
      title: "Date",
      description: "Date de publication",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
};
