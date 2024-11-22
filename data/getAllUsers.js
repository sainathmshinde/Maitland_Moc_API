module.exports = () => {
  return {
    items: [
      {
        userId: 1,
        email: "avd@gmail.com",
        phoneNumber: "9830374639",
        role: "Admin",
        status: "Active",
        isActive: true,
        fullName: "Antoine Haffer",
      },
      {
        userId: 2,
        email: "jdoe@gmail.com",
        phoneNumber: "9123456789",
        role: "Operations",
        status: "Inactive",
        isActive: false,
        fullName: "avd",
      },
      {
        userId: 3,
        email: "asmith@yahoo.com",
        phoneNumber: "9876543210",
        role: "Accountant",
        status: "Unregistered",
        isActive: true,
        fullName: "Mike Wike",
      },
      {
        userId: 4,
        email: "mjane@hotmail.com",
        phoneNumber: "9812345678",
        role: "Operations",
        status: "Inactive",
        isActive: false,
        fullName: "David Lee",
      },
    ],
    totalPages: 2,
    currentPage: 1,
    pageSize: 10,
    totalCount: 26,
  };
};
