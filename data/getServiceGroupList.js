module.exports = () => {
  return {
    items: [
      {
        id: 1,
        name: "Segregated Admin ",
        services: [
          { id: 1, name: "cash recon" },
          { id: 2, name: "test service" },
        ],
        approvalStatus: "Approved",
      },
      {
        id: 2,
        name: "SA Cisca UT",
        services: [
          { id: 1, name: "cash recon" },
          { id: 2, name: "test service" },
          { id: 1, name: "cash recon" },
          { id: 2, name: "test service" },
          { id: 1, name: "cash recon" },
          { id: 2, name: "test service" },
          { id: 1, name: "cash recon" },
          { id: 2, name: "test service" },
          { id: 1, name: "cash recon" },
          { id: 2, name: "test service" },
          { id: 1, name: "cash recon" },
          { id: 2, name: "test service" },
          { id: 1, name: "cash recon" },
          { id: 2, name: "test service" },
        ],
        approvalStatus: "Awaiting Check",
      },
      {
        id: 3,
        name: "Replication Admin",
        services: [
          { id: 1, name: "cash recon" },
          { id: 2, name: "test service" },
        ],
        approvalStatus: "Awaiting Approval",
      },
      {
        id: 4,
        name: "Offshore Admin",
        services: [
          { id: 1, name: "cash recon" },
          { id: 2, name: "test service" },
        ],
        approvalStatus: "Rejected",
      },
    ],
    totalPages: 1,
    currentPage: 1,
    pageSize: 10,
    totalCount: 5,
  };
};
