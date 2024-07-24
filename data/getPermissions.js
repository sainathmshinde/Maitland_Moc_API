module.exports = () => {
  return {
    statusCode: 200,
    errorMessage: null,
    source: "Users",
    searchTerm: "",
    resultCount: 1,
    contents: [
      {
        id: "1",
        type: "api",
        name: "Read Users",
        actions: {
          create: false,
          read: true,
          update: false,
          delete: false,
        },
      },
      {
        id: "2",
        type: "ui",
        name: "Manage Dashboard",
        actions: {
          create: false,
          read: false,
          update: false,
          delete: false,
        },
      },
    ],
    paging: {
      numberOfPages: 10,
      pageNumber: 1,
      recordsPerPage: 50,
      nextPageNumber: 0,
      previousPageNumber: 0,
    },
  };
};
