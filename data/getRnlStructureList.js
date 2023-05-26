module.exports = () => {
  return {
    items: [
      {
        structureId: 1,
        clientProductStructureCode: "200700",
        client: "MI SELECT EQUITY",
        products: "Product 1, Product2, Product3",
        approvalStatus: "Approved",
      },
      {
        structureId: 2,
        clientProductStructureCode: "200701",
        client: "MI SELECT CASH",
        products: "Product 1, Product2, Product3",
        approvalStatus: "Approved",
      },
    ],
    totalPages: 1,
    totalCount: 2,
    currentPage: 1,
  };
};
