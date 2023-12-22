export default {
    name: 'collectionsTypes',
    type: 'document',
    title: 'Collections',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule) =>
        Rule.custom((field, context) =>
          field === undefined
            ? "Name is missing"
            : true
        ),
      }
    ]
  }