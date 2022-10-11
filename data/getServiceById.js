module.exports = () => {
  return {
    id: 1,
    code: "test code",
    name: "test name",
    serviceApprovalStatus: "Approved",
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
    checkerIds: "1, 2,3",
    approverIds: "1, 23,3",
  };
};
