module.exports = () => {
  return {
    items: [
      {
        id: 1,
        contractType: "Master Contract",
        contractName: "TFS contract with ABSA",
        clientName: "ABSA",
        serviceEntity: "Maitland",
        clientStatus: "Active",
        approvalStatus: "!Approved",
        status: "active",
      },

      {
        id: 2,
        contractType: "Service Contract",
        contractName: "TFS contract with VISEL",
        clientName: "ABSA",
        serviceEntity: "Maitland",
        clientStatus: "Active",
        approvalStatus: "Approved",
        status: "inactive",
      },
    ],
    totalPages: 1,
    currentPage: 1,
    pageSize: 10,
    totalCount: 5,
  };
};
