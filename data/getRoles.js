module.exports = () => {
  return {
    items: [
      {
        id: 1,
        name: "admin",
        description: "Description for the role",
        application: {
          id: "1",
          name: "Application Framework",
        },
      },
      {
        id: 2,
        name: "user",
        description: "Description for the role",
        application: {
          id: "2",
          name: "Entity Master",
        },
      },
      {
        id: 3,
        name: "guest",
        description: "Description for the role",
        application: null,
      },
      {
        id: 4,
        name: "superuser",
        description: "Description for the role",
        application: null,
      },
      {
        id: 5,
        name: "superadmin",
        description: "Description for the role",
        application: null,
      },
      {
        id: 6,
        name: "Owner​​",
        description: "Description for the role",
        application: null,
      },
      {
        id: 7,
        name: "contributor​",
        description: "Description for the role",
        application: null,
      },
      {
        id: 8,
        name: "​custom Role​",
        description: "Description for the role",
        application: null,
      },
      {
        id: 9,
        name: "​api User​",
        description: "Description for the role",
        application: null,
      },
      {
        id: 10,
        name: "ui User​",
        description: "Description for the role",
        application: null,
      },
    ],
    totalCoungt: 1000,
    totalPages: 100,
    currentPage: 1,
  };
};
