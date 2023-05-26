module.exports = () => {
  return {
    structureId: 1,
    clientProductStructureCode: "ABC12",
    client: { id: 1, name: "Maitland" },
    assetOwner: { id: 1, name: "Asset Owner 1" },
    structureApprovalStatus: "Approved",
    approverIds: "1, 23,3",
    maker: "Avdhoot",
    products: [
      {
        productId: 1,
        productBlock: {
          id: 1,
          name: "Moment capital fund",
        },
        allocationBuildingBlocks: [
          {
            allocationBuildingBlockId: 90,
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
                portfolioBuildingBlockId: 89,
                portfolioBuildingBlock: {
                  id: 1,
                  name: "Portfolio Building Block 1",
                },
                portfolioBuildingBlockPercentage: 10,
              },
              {
                portfolioBuildingBlockId: 90,
                portfolioBuildingBlock: {
                  id: 1,
                  name: "Portfolio Building Block 2",
                },
                portfolioBuildingBlockPercentage: 10,
              },
              {
                portfolioBuildingBlockId: 101,
                portfolioBuildingBlock: {
                  id: 1,
                  name: "Portfolio Building Block 3",
                },
                portfolioBuildingBlockPercentage: 10,
              },
              {
                portfolioBuildingBlockId: 67,
                portfolioBuildingBlock: {
                  id: 1,
                  name: "Portfolio Building Block 4",
                },
                portfolioBuildingBlockPercentage: 10,
              },
              {
                portfolioBuildingBlockId: 68,
                portfolioBuildingBlock: {
                  id: 1,
                  name: "Portfolio Building Block 4",
                },
                portfolioBuildingBlockPercentage: 10,
              },
              {
                portfolioBuildingBlockId: 69,
                portfolioBuildingBlock: {
                  id: 1,
                  name: "Portfolio Building Block 4",
                },
                portfolioBuildingBlockPercentage: 59,
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
                portfolioBuildingBlockPercentage: 10,
              },
              {
                portfolioBuildingBlockId: 78,
                portfolioBuildingBlock: {
                  id: 1,
                  name: "Portfolio Building Block 1",
                },
                portfolioBuildingBlockPercentage: 10,
              },
              {
                portfolioBuildingBlockId: 90,
                portfolioBuildingBlock: {
                  id: 1,
                  name: "Portfolio Building Block 1",
                },
                portfolioBuildingBlockPercentage: 80,
              },
            ],
          },
        ],
      },
    ],
  };
};
