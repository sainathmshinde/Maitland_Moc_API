module.exports = () => {
  return [
    {
      actions: {
        create: false,
        read: false,
        update: false,
        delete: false,
      },
      name: "permission",
      id: 1,
      type: "api",
    },
    {
      actions: {
        create: false,
        read: false,
        update: false,
        delete: false,
      },
      name: "role",
      id: 2,
      type: "api",
    },
  ];
};
