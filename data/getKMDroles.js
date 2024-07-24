module.exports = () => {
  return {
    statusCode: 200,
    errorMessage: null,
    source: "Users",
    searchTerm: "",
    resultCount: 1,
    contents: [
      { id: 1, name: "API", description: "Read Users" },
      { id: 2, name: "UI", description: "Manage Dashboard" },
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
