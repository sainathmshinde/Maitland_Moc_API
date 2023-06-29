module.exports = () => {
  return {
    items: [
      {
        eventId: 1,
        clientName: "ABSA",
        clientProductStructureCode: "ABC1",
        approvalStatus: "Awaiting Review",
        createDate: "2020-08-19T08:42:00",
        notes: "Approved",
      },
      {
        eventId: 2,
        clientName: "ABSA",
        clientProductStructureCode: "AP1",
        approvalStatus: "Awaiting Review",
        createDate: "2020-08-19T08:42:00",
        notes: "Awaiting Review",
      },
    ],
    totalPages: 2,
    currentPage: 1,
    totalRows: 30,
  };
};
