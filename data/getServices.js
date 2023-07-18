module.exports = () => {
  return {
    items: [
      {
        id: 1,
        code: "test code",
        name: "test name",
        groups: [
          {
            id: 1,
            name: "Segregated Admin ",
          },
          {
            id: 2,
            name: "SA Cisca UT",
          },
        ],
        approvalStatus: "Approved",
        status: "active",
      },
      {
        id: 2,
        code: "test code 1",
        name: "test name ",
        groups: [
          {
            id: 3,
            name: "Replication Admin",
          },
          {
            id: 4,
            name: "Offshore Admin",
          },
        ],
        approvalStatus: "Rejected",
        status: "inactive",
      },
    ],
    totalPages: 1,
    currentPage: 1,
    pageSize: 10,
    totalCount: 5,
  };
};
