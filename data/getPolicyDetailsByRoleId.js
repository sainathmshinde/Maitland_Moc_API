module.exports = () => {
  return [
    {
      id: "1",
      name: "Application Framework",
      nodeId: "1",
      pages: [
        {
          id: "1",
          name: "User Management",
          nodeId: "2",
          isSelected: true,
          policies: [
            {
              id: "990",
              name: "Create user",
              nodeId: "3",
              isSelected: true,
            },
            {
              id: "991",
              nodeId: "4",
              name: "Update user",
              isSelected: false,
            },
            {
              id: "992",
              nodeId: "5",
              name: "Delete user",
              isSelected: false,
            },
            {
              id: "993",
              nodeId: "6",
              name: "View user",
              isSelected: false,
            },
          ],
          pages: [],
        },
      ],
    },

    {
      id: "2",
      name: "Entity Master",
      nodeId: "7",
      pages: [
        {
          id: "1",
          name: "Entity Management",
          nodeId: "8",
          isSelected: true,
          policies: [
            {
              id: "1",
              name: "Create entity",
              nodeId: "9",
              isSelected: true,
            },
            {
              id: "2",
              name: "Update entity",
              nodeId: "10",
              isSelected: false,
            },
            {
              id: "3",
              name: "Delete entity",
              nodeId: "11",
              isSelected: false,
            },
            {
              id: "4",
              nodeId: "12",
              name: "View entity",
              isSelected: false,
            },
          ],
          pages: [],
        },
      ],
    },
    {
      id: "3",
      name: "Asset Management",
      nodeId: "13",
      pages: [
        {
          id: "1",
          name: "Asset Management",
          nodeId: "14",
          isSelected: true,
          policies: [
            {
              id: "1",
              name: "Add Aset",
              nodeId: "15",
              isSelected: true,
            },
            {
              id: "89",
              name: "Update Asset",
              nodeId: "16",
              isSelected: true,
            },
          ],
          pages: [],
        },
      ],
    },
    {
      id: "3",
      name: "Asset Management 1",
      nodeId: "17",
      pages: [
        {
          id: "1",
          name: "Asset Management",
          nodeId: "18",
          isSelected: true,
          policies: [
            {
              id: "1",
              name: "Add Aset",
              nodeId: "19",
              isSelected: true,
            },
            {
              id: "1",
              name: "Update Asset",
              nodeId: "20",
              isSelected: true,
            },
          ],
          pages: [],
        },
      ],
    },
    {
      id: "3",
      name: "Asset Management 2",
      nodeId: "21",
      pages: [
        {
          id: "1",
          name: "Asset Management",
          nodeId: "22",
          isSelected: true,
          policies: [
            {
              id: "1",
              name: "Add Aset",
              nodeId: "22",
              isSelected: true,
            },
            {
              id: "1",
              name: "Update Asset",
              nodeId: "23",
              isSelected: true,
            },
          ],
          pages: [],
        },
      ],
    },
    {
      id: "34",
      name: "Reporting platform",
      nodeId: "25",
      pages: [
        {
          id: "35",
          name: "Fund Administration",
          nodeId: "2786",
          isSelected: false,
          pages: [
            {
              id: "36",
              name: "Standard Reports",
              nodeId: "56",
              isSelected: false,
              pages: [
                {
                  id: "37",
                  name: "Cash",
                  nodeId: "98",
                  isSelected: false,
                  policies: [
                    {
                      id: "38",
                      name: "Run And Download",
                      nodeId: "546",
                      isSelected: false,
                    },
                  ],
                  pages: [],
                },
              ],
              policies: [
                {
                  id: "39",
                  name: "Run And Download",
                  nodeId: "56576",
                  isSelected: false,
                },
              ],
            },
          ],
          policies: [
            {
              id: "40",
              name: "Run and Download",
              nodeId: "34653",
              isSelected: false,
            },
          ],
        },

        {
          id: "41",
          name: "Transfer Agency",
          nodeId: "121",
          isSelected: false,
          policies: [
            {
              id: "42",
              name: "Run And Download",
              nodeId: "122",
              isSelected: false,
            },
          ],
          pages: [
            {
              id: "43",
              name: "Accounting",
              nodeId: "123",
              isSelected: false,
              policies: [
                {
                  id: "44",
                  name: "Run And Download",
                  nodeId: "125",
                  isSelected: false,
                },
              ],
              pages: [],
            },
          ],
        },
      ],
    },
  ];
};
