module.exports = () => {
  return {
    items: [
      {
        portfolioId: 1,
        fundNumber: "200700",
        fundName: "MI SELECT EQUITY",
        client: "Maitland",
        portfolioNameShort: "MI SEL MAN EQ",
        approvalStatus: "Approved",
      },
      {
        portfolioId: 2,
        fundNumber: "200701",
        fundName: "MI SELECT CASH",
        client: "Maitland",
        portfolioNameShort: "MI SEL MAN C",
        approvalStatus: "AWaiting Approval",
      },
    ],
    totalPages: 2,
    currentPage: 1,
    totalRows: 30,
  };
};
