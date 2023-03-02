module.exports = () => {
  return [
    {
      itemId: 1,
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
      itemId: 2,
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
