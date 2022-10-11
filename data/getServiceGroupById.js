module.exports = () => {
  return {
    id: 1,
    serviceGroupApprovalStatus: "Approved",
    name: "Segregated Admni",
    services: [
      { id: 1, name: "cash recon", code: "CS1" },
      { id: 2, name: "test service", code: "TS1" },
    ],
    checkerIds: "1, 2, 3",
    approverIds: "1,2,3",
  };
};
