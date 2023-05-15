module.exports = () => {
  return {
    client: { id: 1, name: "Maitland" },
    assetOwner: { id: 1, name: "Asset Owner 1" },
    products: [
      {
        productId: 1,
        productBlock: {
          id: 1,
          name: "Moment capital fund",
        },
        allocationBuildingBlocks: [
          {
            allocationBuildingBlockId: 2,
            allocationBuildingBlock: null,
            allocationBuildingBlockPercentage: 0,
            portfolioBuildingBlocks: [
              {
                portfolioBuildingBlockId: 1,
                portfolioBuildingBlock: {
                  id: 1,
                  name: "Portfolio Building Block 1",
                },
                portfolioBuildingBlockPercentage: 10,
              },
              {
                portfolioBuildingBlockId: 4,
                portfolioBuildingBlock: {
                  id: 4,
                  name: "Portfolio Building Block 5",
                },
                portfolioBuildingBlockPercentage: 10,
              },
              {
                portfolioBuildingBlockId: 5,
                portfolioBuildingBlock: {
                  id: 10,
                  name: "Portfolio Building Block 6",
                },
                portfolioBuildingBlockPercentage: 10,
              },
              {
                portfolioBuildingBlockId: 6,
                portfolioBuildingBlock: {
                  id: 9,
                  name: "Portfolio Building Block 7",
                },
                portfolioBuildingBlockPercentage: 70,
              },
            ],
          },
        ],
      },

      {
        productId: 2,
        productBlock: {
          id: 2,
          name: "Moment Financial Fund",
        },
        allocationBuildingBlocks: [
          {
            allocationBuildingBlockId: 2,
            allocationBuildingBlock: {
              id: 1,
              name: "Allocation Building Block 1",
            },
            allocationBuildingBlockPercentage: 100,
            portfolioBuildingBlocks: [
              {
                portfolioBuildingBlockId: 1,
                portfolioBuildingBlock: {
                  id: 1,
                  name: "Portfolio Building Block 1",
                },
                portfolioBuildingBlockPercentage: 100,
              },
            ],
          },
          {
            allocationBuildingBlockId: 2,
            allocationBuildingBlock: {
              id: 1,
              name: "Allocation Building Block 1",
            },
            allocationBuildingBlockPercentage: 100,
            portfolioBuildingBlocks: [
              {
                portfolioBuildingBlockId: 1,
                portfolioBuildingBlock: {
                  id: 1,
                  name: "Portfolio Building Block 1",
                },
                portfolioBuildingBlockPercentage: 100,
              },
            ],
          },
        ],
      },
    ],
  };
};
