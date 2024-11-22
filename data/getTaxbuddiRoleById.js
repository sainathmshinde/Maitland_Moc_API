module.exports = () => {
  return {
    roleId: 1,
    roleName: "admin",
    roleDescription: "role description",
    isActive: true,
    permissions: {
      users: {
        create: false,
        read: false,
        update: false,
        view: false,
      },
      roles: {
        create: false,
        read: false,
        update: false,
        view: false,
      },
    },
  };
};
