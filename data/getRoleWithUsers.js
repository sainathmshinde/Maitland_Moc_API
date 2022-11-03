module.exports = () => {
  return {
    items: [
      {
        id: 1,
        name: "admin",
        application: { id: 1, name: "app1" },
        users: [
          {
            id: "1",
            name: "John Doe",
          },
          {
            id: "2",
            name: "Jane Do",
          },
          {
            id: "3",
            name: "John Doe",
          },
          {
            id: "4",
            name: "Jane Do",
          },
          {
            id: "5",
            name: "John Doe",
          },
          {
            id: "6",
            name: "Jane Do",
          },
          {
            id: "7",
            name: "John Doe",
          },
          {
            id: "8",
            name: "Jane Do",
          },
          {
            id: "9",
            name: "John Doe",
          },
          {
            id: "10",
            name: "Jane Do",
          },
          {
            id: "11",
            name: "Jane Do",
          },
          {
            id: "12",
            name: "John Doe",
          },
          {
            id: "13",
            name: "Jane Do",
          },
          {
            id: "14",
            name: "John Doe",
          },
          {
            id: "15",
            name: "Jane Do",
          },
        ],
      },
      {
        id: 2,
        name: "user",
        application: { id: 2, name: "app2" },
        users: [
          {
            id: "1",
            name: "John Doe",
          },
          {
            id: "2",
            name: "Jane Do",
          },
        ],
      },
    ],
    totalCount: 1000,
    totalPages: 100,
    currentPage: 1,
  };
};
