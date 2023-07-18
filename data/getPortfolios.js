module.exports = () => {
  return {
    items: [
      {
        id: 22,
        portfolioCode: "category 1",
        portfolioName: "Client Entity",
        contractName: "Service Entity",
        portfolioCategory: "india",
        portfolioType: "Multi-managed",
        approvalStatus: "Awaiting ",
        status: "Inactive",
        currentStep: 4,
      },
      {
        id: 23,
        portfolioCode: "category 2",
        portfolioName: "Client Entity 1",
        contractName: "Service ENtity 1",
        portfolioCategory: "india",
        portfolioType: "seg Fund",
        approvalStatus: "Awaiting Approval",
        status: "Active",
        currentStep: 3,
      },
    ],
    totalPages: 1,
    currentPage: 1,
    pageSize: 10,
    totalCount: 5,
  };
};
