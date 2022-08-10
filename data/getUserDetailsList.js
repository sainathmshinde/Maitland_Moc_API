module.exports = () => {
  return [
    {
      id: 1,
      title: { id: 1, name: "Mr" },
      firstName: "John",
      surName: "Doe",
      dateOfBirth: "2015-03-25T12:00:00-06:30",
      initials: "JD",
      userName: "jdoe",
      description: "This is a description",
      roles: [
        { id: 1, name: "admin" },
        { id: 2, name: "user" },
      ],
    },

    {
      id: 2,
      title: { id: 2, name: "Mrs" },
      firstName: "John",
      surName: "Doe",
      dateOfBirth: "2015-03-25T12:00:00-06:30",
      initials: "JD",
      userName: "jdoe",
      description: "This is a description",
      roles: [
        { id: 1, name: "admin" },
        { id: 2, name: "user" },
      ],
    },
  ];
};
