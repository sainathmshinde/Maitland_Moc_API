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
        id: 160,
        country: "Afghanistan",
        custodian: "ABN AMRO USD",
        clearingHouse: "ABSA Clearing",
        currency: "ALBANIAN LEK",
        bpid: null,
      },
    ],
  };
};
