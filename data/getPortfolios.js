module.exports = () => {
  return {
    items: [
      {
        id: 1,
        portfolioCode: "category 1",
        portfolioName: "Client Entity",
        contractName: "Service Entity",
        portfolioCategory: "india",
        portfolioType: "seg Fund",
        approvalStatus: "Awaiting Check",
        status: "Active",
        currentStep: 1,
      },
      {
        id: 2,
        portfolioCode: "category 2",
        portfolioName: "Client Entity 1",
        contractName: "Service ENtity 1",
        portfolioCategory: "india",
        portfolioType: "seg Fund",
        approvalStatus: "Approved",
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
