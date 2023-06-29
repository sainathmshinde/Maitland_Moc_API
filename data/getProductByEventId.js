module.exports = () => {
  return {
    eventId: 1,
    approvalStatus: "Created",
    clientProductStructureCode: "ABC1",
    client: "ABSA",
    assetOwner: "MI EQUITY FUND",
    products: [
      {
        productId: 1,
        productName: "MI EQUITY FUND",
        todaysCashFlow: 2323232,
        residualCash: 232,
        notes: "",
        isStaticData: false,
      },
      {
        productId: 2,
        productName: "MI EQUITY FUND",
        todaysCashFlow: 2323232,
        residualCash: 232,
        notes: "",
        isStaticData: true,
      },
      {
        productId: 3,
        productName: "MI EQUITY FUND",
        todaysCashFlow: 2323232,
        residualCash: 232,
        notes: "",
        isStaticData: true,
      },
    ],
  };
};
