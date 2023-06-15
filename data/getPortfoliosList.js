module.exports = () => {
  return {
    items: [
      {
        client: "Maitland",
        rnlPortfolioId: 1,
        fundNumber: "200700",
        fundName: "MI SELECT EQUITY",
        fundType: "Test Type",
        rnlPortfolioType: "Product",
        portfolioNameShort: "MI SEL MAN EQ",
        approvalStatus: "Awaiting Approval",
        clientProductStructureCode: "",
      },
      {
        portfolioId: 2,
        client: "Maitland",
        fundNumber: "200701",
        fundName: "MI SELECT CASH",
        fundType: "Test Type",
        portfolioNameShort: "MI SEL MAN C",
        rnlPortfolioType: "Building Block",
        approvalStatus: "Approved",
        clientProductStructureCode: "ABC123",
      },
    ],
    totalPages: 2,
    currentPage: 1,
    totalRows: 30,
  };
};
