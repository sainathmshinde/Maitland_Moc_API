module.exports = () => {
  return {
    items: [
      {
        clientId: 1,
        legalEntityCode: "ABC1",
        clientName: "ABSA",
        users: [{ id: 1, name: "Mayur" }],
      },
      {
        clientId: 2,
        legalEntityCode: "ABC3",
        clientName: "Brewin",
        users: [{ id: 1, name: "Mayur" }],
      },
    ],
    totalPages: 2,
    currentPage: 1,
    totalRows: 30,
  };
};
