module.exports = () => {
  return {
    id: 1,
    portfolioApprovalStatus: "Approved",
    portfolioCategory: {
      id: 1,
      name: "Live",
    },
    typeOfPortfolio: {
      id: 4,
      name: "Multi-managed",
    },
    multiManagerHierarchy: {
      id: 1,
      name: "parent portfolio",
    },
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
  };
};
