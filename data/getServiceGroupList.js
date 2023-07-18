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
        status: "active",
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
        status: "inactive",
      },
      {
        id: 3,
        name: "Replication Admin",
        services: [
          { id: 1, name: "cash recon" },
          { id: 2, name: "test service" },
        ],
        approvalStatus: "Awaiting Approval",
        status: "active",
      },
      {
        id: 4,
        name: "Offshore Admin",
        services: [
          { id: 1, name: "cash recon" },
          { id: 2, name: "test service" },
        ],
        approvalStatus: "Rejected",
        status: "active",
      },
    ],
    totalPages: 1,
    currentPage: 1,
    pageSize: 10,
    totalCount: 5,
  };
};
