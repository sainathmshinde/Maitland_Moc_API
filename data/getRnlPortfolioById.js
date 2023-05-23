module.exports = () => {
  return {
    rnlPortfolioId: 1,
    fundNumber: "200700",
    fundName: "MI EQUITY SELECT MANAGERS",
    fundNameShort: "MI EQUITY SL MAN",
    rnLPortfolioType: { id: 1, name: "Asset Owner" },
    pricingSlot: { id: 1, name: "Pricing slot 1" },
    fundType: { id: 1, name: "RNL fund" },
    fiscalYearEnd: "12/12",
    currency: { id: 1, name: "INR" },
    zarAccountNumber: "ABDND122093N",
    foreignAccountNumber: "DKFB988KJN",
    client: { id: 1, name: "ABSA" },
    custodian: [
      { id: 1, name: "Maitland" },
      { id: 2, name: "ABSA" },
    ],
    eam: "",
    repFund: { id: 1, name: "Replication" },
    updateInvestOne: true,
    generateTrades: true,
    cashAllocation: true,
    portfolioApprovalStatus: "Approved",
    approverIds: "1, 23,3",
    maker: "Avdhoot",
  };
};
