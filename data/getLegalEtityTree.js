module.exports = () => {
  return {
    id: 1,
    name: "ABSA",
    nodeId: "1",
    children: [
      {
        id: 2,
        name: "ABSA Capital",
        nodeId: "2",
        children: [],
      },
      {
        id: 3,
        name: "ABSA Group",
        nodeId: "3",
        children: [
          {
            id: 2,
            name: "ABSA Advisory",
            nodeId: "4",
            children: [],
          },
        ],
      },
    ],
  };
};
