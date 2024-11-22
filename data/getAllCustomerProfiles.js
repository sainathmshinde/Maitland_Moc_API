module.exports = () => {
  return {
    items: [
      {
        profileId: 1,
        fullName: "Antoine Hafer",
        email: "antoine@gmail.com",
        phoneNumber: "+97 28674282472",
        package: "none",
        status: "Active",
        isActive: true,
      },
      {
        profileId: 2,
        fullName: "Mike White",
        email: "mike@gmail.com",
        phoneNumber: "+97 28674282472",
        package: "none",
        status: "Inactive",
        isActive: false,
      },
    ],
    totalPages: 2,
    currentPage: 1,
    pageSize: 10,
    totalCount: 26,
  };
};
