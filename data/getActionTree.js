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
        isSelected: true,
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

      {
        id: "2",
        name: "Role Master",
        nodeId: "7",
        isSelected: true,
        policies: [
          {
            id: "5",
            name: "Create role",
            nodeId: "8",
            isSelected: false,
          },
        ],
      },
    ],
  };
};
