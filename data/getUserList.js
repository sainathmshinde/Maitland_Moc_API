module.exports = () => {
  return {
    statusCode: 200,
    errorMessage: null,
    source: "Users",
    searchTerm: "",
    resultCount: 1,
    contents: [
      {
        userId: 1,
        firstName: "Jon",
        lastName: "Doe",
        userType: "Retiree",
        email: "jon@gmal.com",
        mobileNumber: "2937293",
        associationName: "ICICI Association",
      },
      {
        userId: 2,
        firstName: "Jane",
        lastName: "Smith",
        userType: "Intrnal User",
        email: "jon@gmal.com",
        mobileNumber: "2937293",
        associationName: null,
      },
    ],
    paging: {
      numberOfPages: 10,
      pageNumber: 1,
      recordsPerPage: 50,
      nextPageNumber: 0,
      previousPageNumber: 0,
    },
    sorting: {
      sortName: "id",
      sortDirection: "desc",
    },
  };
};
