module.exports = () => {
  return {
    id: 1,
    serviceGroupApprovalStatus: "Approved",
    name: "Segregated Admni",
    services: [
      {
        id: 1,
        name: "Deal broking",
        description: "",
        code: "DB",
      },
      {
        id: 4,
        name: "Trade confirmation",
        description:
          "An independent service confirming that the trade reported by a portfolio manager matches the trade alleged by the broker on all material aspects. Done prior to instructing the custodian to proceed with settlement.",
        code: "",
      },
    ],
    description: "Service group description",
    checkerIds: "1, 2, 3",
    approverIds: "1,2,3",
  };
};
