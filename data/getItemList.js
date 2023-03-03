module.exports = () => {
  return {
    items: [
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
    ],
    totalPages: 10,
    currentPage: 1,
    pageSize: 10,
    totalCount: 100,
  };
};

return;

[
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
