module.exports = () => {
  return {
    contractId: 1,
    contractName: "test name",
    contractCode: "ABC1",
    clientEntity: {
      id: 1,
      name: "ABSA",
    },
    clientEntityCode: "ABS1",
    serviceEntity: {
      id: 1,
      name: "Maitland",
    },
    serviceEntityTag: {
      id: 1,
      name: "TA",
    },
    contractStatu: {
      id: 1,
      name: "active",
    },
    nextReviewDate: "",
    clientReportingDelievery: {
      id: 1,
      name: "email",
    },
    kam: {
      id: 1,
      name: "aashiq",
    },
    serviceTags: [
      {
        id: 1,
        name: "segregated admin",
      },
      {
        id: 2,
        name: "Replication Admin",
      },
    ],
    service: [
      {
        id: 1,
        name: "cash recon",
        code: "c1",
        tagId: 1,
        canDelete: true / false,
      },
    ],
    checkerIds: "1,2,3,4",
    approverIds: "1,2,3,4,5",
  };
};
