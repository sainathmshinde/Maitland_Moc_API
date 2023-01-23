module.exports = () => {
  return {
    id: 1,
    portfolioApprovalStatus: "Approved",
    items: [
      {
        id: 1,
        country: "India",
        custodian: "xyz",
        clearingHouse: "abc",
        currency: "INR",
        bpid: "123A",
      },
      {
        id: 2,
        country: "Africa",
        custodian: "xyz",
        clearingHouse: "abc",
        currency: "rand",
        bpid: "123A",
      },
    ],
    totalPages: 1,
    currentPage: 1,
    pageSize: 10,
    totalCount: 5,
  };
};
