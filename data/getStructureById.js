module.exports = () => {
  return {
    client: { id: 1, name: "Maitland" },
    assetOwner: { id: 1, name: "Asset Owner 1" },
    priducts: [
      {
        productId: 1,
        block: {
          id: 1,
          name: "Product 1",
        },
        allocationBuildingBlocks: [
          {
            allocationBuildingBlock: 2,
            block: null,
            percentage: 0,
            portfolioBuildingBlocks: [
              {
                portfolioBuildingBlockId: 1,
                block: {
                  id: 1,
                  name: "Portfolio Building Block 1",
                },
                percentage: 45,
              },
            ],
          },
        ],
      },
    ],
  };
};
