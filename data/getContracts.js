module.exports = () => {
  return {
    items: [
      {
        id: 1,
        contractName: "TFS contract with ABSA",
        clientName: "ABSA",
        serviceEntity: "Maitland",
        clientStatus: "Active",
        approvalStatus: "Approved",
      },

      {
        id: 2,
        contractName: "TFS contract with VISEL",
        clientName: "ABSA",
        serviceEntity: "Maitland",
        clientStatus: "Active",
        approvalStatus: "Approved",
      },
    ],
    totalPages: 1,
    currentPage: 1,
    pageSize: 10,
    totalCount: 5,
  };
};
