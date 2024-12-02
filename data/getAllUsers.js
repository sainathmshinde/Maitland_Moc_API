module.exports = () => {
  return {
    webUserList: [
      {
        appUserId: 1,
        email: "avd@gmail.com",
        phoneNumber: "9830374639",
        roleName: "Admin",
        statusName: "Active",
        isActive: true,
        fullName: "Antoine Haffer",
        statusId: 0,
      },
      {
        appUserId: 2,
        email: "jdoe@gmail.com",
        phoneNumber: "9123456789",
        roleName: "Operations",
        statusName: "Inactive",
        isActive: false,
        fullName: "avd",
        statusId: 1,
      },
      {
        appUserId: 3,
        email: "asmith@yahoo.com",
        phoneNumber: "9876543210",
        roleName: "Accountant",
        statusName: "Unregistered",
        isActive: false,
        fullName: "Mike Wike",
        statusId: 2,
      },
      {
        appUserId: 4,
        email: "mjane@hotmail.com",
        phoneNumber: "9812345678",
        roleName: "Operations",
        statusName: "Inactive",
        isActive: false,
        fullName: "David Lee",
        statusId: 1,
      },
    ],
    pagination: {
      totalPages: 10,
      currentPage: 1,
      pageSize: 10,
      totalCount: 100,
    },
  };
};
