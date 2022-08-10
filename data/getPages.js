module.exports = () => {
  return [
    {
      id: "1",
      name: "User Management",
      policies: [
        {
          id: "1",
          name: "Create user",
          isAccessible: true,
        },
        {
          id: "2",
          name: "Update user",
          isAccessible: false,
        },
        {
          id: "3",
          name: "Delete user",
          isAccessible: false,
        },
        {
          id: "4",
          name: "View user",
          isAccessible: false,
        },
      ],
    },
    {
      id: "2",
      name: "Asset Management",
      policies: [
        {
          id: "1",
          name: "Create asset",
          isAccessible: false,
        },
      ],
    },
  ];
};
