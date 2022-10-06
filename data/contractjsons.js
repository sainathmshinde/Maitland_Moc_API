// getById
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
  contractStatus: {
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

//post
return {
  contractId: 0,
  contractCodeId: "code",
  contractName: "name",
  clientEntityId: 1,
  clientEntityCode: "A123",
  serviceEntityId: 2,
  serviceEntityTagId: 3,
  contractStatusId: 1,
  nextReviewDate: "1/2/3",
  clientReportingDelieveryId: 1,
  kamId: 2,
  serviceTagIds: "1,2,3",
  serviceIds: "1,23,4",
  checkerIds: "1,2 3",
  approverIds: "1,23,4",
};
