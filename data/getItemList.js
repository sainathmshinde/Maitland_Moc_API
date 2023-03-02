module.exports = () => {
  return [
    {
      id: 1,
      itemType: {
        code: "F",
        name: "Folder",
      },
      parent: {
        id: 1,
        name: "Standard Reports",
      },
      itemName: "Cash Account Details",
    },
    {
      id: 2,
      itemType: {
        code: "F",
        name: "Folder",
      },
      parent: {
        id: 1,
        name: "Corporate Actions Listings",
      },
      itemName: "Brokerage",
    },
  ];
};
