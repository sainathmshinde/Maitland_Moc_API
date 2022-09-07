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
          policies: [
            {
              id: "1",
              name: "Create user",
              nodeId: "3",
              isSelected: true,
            },
            {
              id: "2",
              nodeId: "4",
              name: "Update user",
              isSelected: false,
            },
            {
              id: "3",
              nodeId: "5",
              name: "Delete user",
              isSelected: false,
            },
            {
              id: "4",
              nodeId: "6",
              name: "View user",
              isSelected: false,
            },
          ],
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
          policies: [
            {
              id: "1",
              name: "Add Aset",
              nodeId: "15",
              isSelected: true,
            },
            {
              id: "1",
              name: "Update Asset",
              nodeId: "16",
              isSelected: true,
            },
          ],
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
        },
      ],
    },
  ];
};
