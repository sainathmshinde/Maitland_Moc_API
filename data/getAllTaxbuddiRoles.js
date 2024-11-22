module.exports = () => {
  return {
    items: [
      {
        roleId: 1,
        roleName: "Admin",
        roleDescription: "This role is for admin people",
        status: "Active",
        isActive: true,
      },
      {
        roleId: 2,
        roleName: "Accountant",
        roleDescription: "This role is for admin accountant",
        status: "Active",
        isActive: false,
      },
    ],
    totalPages: 2,
    currentPage: 1,
    pageSize: 10,
    totalCount: 26,
  };
};
