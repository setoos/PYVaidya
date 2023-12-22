export default {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule) =>
        Rule.custom((field) =>
          field === undefined
            ? "Name is missing"
            : true
        ),
      },
      {
        name: 'mobile',
        type: 'string',
        title: 'Mobile'
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        validation: (Rule) =>
        Rule.custom((field) =>
          field === undefined
            ? "Email is missing"
            : true
        ),
      },
      {
        name: 'password',
        type: 'string',
        title: 'Password',
        validation: (Rule) =>
        Rule.custom((field) =>
          field === undefined
            ? "Password is missing"
            : true
        ),
      }
    ]
  }