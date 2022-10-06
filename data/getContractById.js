module.exports = () => {
  return {
    contractId: 1,
    contractApprovalStatus: "Approved",
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
    contractStatus: {
      id: 1,
      name: "active",
    },
    nextReviewDate: "2022-09-30T06:55:00",
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
    services: [
      {
        id: 1,
        name: "cash recon",
        code: "c1",
        serviceGroupId: 1,
      },
    ],
    checkerIds: "1,2,3,4",
    approverIds: "1,2,3,4,5",
  };
};
