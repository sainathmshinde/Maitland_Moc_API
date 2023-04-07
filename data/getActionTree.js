module.exports = () => {
  return {
    id: 1,
    name: "Reporting platform",
    nodeId: "25",
    pages: [
      {
        id: "2",
        name: "Fund Administration",
        nodeId: "2786",
        isSelected: false,
        children: [
          {
            id: "3",
            name: "Standard Reports",
            nodeId: "56",
            isSelected: false,
            children: [
              {
                id: "4",
                name: "Cash",
                nodeId: "98",
                isSelected: true,
                policies: [
                  {
                    id: "5",
                    name: "Run And Download",
                    nodeId: "546",
                    isSelected: false,
                  },
                ],
                children: [],
              },
            ],
            policies: [
              {
                id: "6",
                name: "Run And Download",
                nodeId: "56576",
                isSelected: false,
              },
            ],
          },
        ],
        policies: [
          {
            id: "1",
            name: "Run and Download",
            nodeId: "34653",
            isSelected: false,
          },
        ],
      },

      {
        id: "7",
        name: "Transfer Agency",
        nodeId: "121",
        isSelected: false,
        policies: [
          {
            id: "8",
            name: "Run And Download",
            nodeId: "122",
            isSelected: false,
          },
        ],
        children: [
          {
            id: "9",
            name: "Accounting",
            nodeId: "123",
            isSelected: false,
            policies: [
              {
                id: "10",
                name: "Run And Download",
                nodeId: "125",
                isSelected: false,
              },
            ],
            children: [],
          },
        ],
      },
    ],
  };
};
