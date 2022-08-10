module.exports = () => {
  return [
    {
      id: "1",
      name: "Asset Management",
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
            },
            {
              id: "2",
              nodeId: "4",
              name: "Update user",
              isAccessible: false,
            },
            {
              id: "3",
              nodeId: "5",
              name: "Delete user",
              isAccessible: false,
            },
            {
              id: "4",
              nodeId: "6",
              name: "View user",
              isAccessible: false,
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
          name: "User Management",
          nodeId: "8",
          policies: [
            {
              id: "1",
              name: "Create user",
              nodeId: "9",
              isAccessible: true,
            },
            {
              id: "2",
              name: "Update user",
              nodeId: "10",
              isAccessible: false,
            },
            {
              id: "3",
              name: "Delete user",
              nodeId: "11",
              isAccessible: false,
            },
            {
              id: "4",
              nodeId: "12",
              name: "View user",
              isAccessible: false,
            },
          ],
        },
        {
          id: "2",
          name: "User Management",
          nodeId: "9",
          policies: [
            {
              id: "1",
              name: "Create user",
              nodeId: "9",
              isAccessible: true,
            },
            {
              id: "2",
              name: "Update user",
              nodeId: "10",
              isAccessible: false,
            },
            {
              id: "3",
              name: "Delete user",
              nodeId: "11",
              isAccessible: false,
            },
            {
              id: "4",
              nodeId: "12",
              name: "View user",
              isAccessible: false,
            },
          ],
        },
        {
          id: "3",
          name: "User Management",
          nodeId: "10",
          policies: [
            {
              id: "1",
              name: "Create user",
              nodeId: "9",
              isAccessible: true,
            },
            {
              id: "2",
              name: "Update user",
              nodeId: "10",
              isAccessible: false,
            },
            {
              id: "3",
              name: "Delete user",
              nodeId: "11",
              isAccessible: false,
            },
            {
              id: "4",
              nodeId: "12",
              name: "View user",
              isAccessible: false,
            },
          ],
        },
      ],
    },
  ];
};
