module.exports = () => {
  return {
    id: 1,
    name: "Application Framework",
    nodeId: "1",
    pages: [
      {
        id: "1",
        name: "User Management",
        nodeId: "2",
        isSelected: false,
        pages: [],
        policies: [
          {
            id: "1",
            name: "Create user",
            nodeId: "34653",
            isSelected: false,
          },
          {
            id: "2",
            nodeId: "442645675",
            name: "Update user",
            isSelected: false,
          },
          {
            id: "3",
            nodeId: "36455",
            name: "Delete user",
            isSelected: false,
          },
          {
            id: "4",
            nodeId: "697089",
            name: "View user",
            isSelected: false,
          },
        ],
      },

      {
        id: "2",
        name: "Role Master",
        nodeId: "86",
        isSelected: false,
        policies: [
          {
            id: "1",
            name: "Create Role",
            nodeId: "567",
            isSelected: false,
          },
          {
            id: "2",
            nodeId: "568",
            name: "Update Role",
            isSelected: false,
          },
          {
            id: "3",
            nodeId: "569",
            name: "Delete Role",
            isSelected: false,
          },
          {
            id: "4",
            nodeId: "890",
            name: "View Role",
            isSelected: false,
          },
        ],
        pages: [],
      },
    ],
  };
};
