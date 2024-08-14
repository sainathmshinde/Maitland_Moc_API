module.exports = () => {
  return {
    statusCode: 200,
    errorMessage: null,
    source: "Refund Requests",
    searchTerm: "",
    resultCount: 1,
    contents: [
      {
        id: "1",
        refundRequestNumber: 100,
        orderNumber: "123456789",
        retireeName: "John Doe",
        refundAmount: 100,
        refundRequestDate: new Date(),
        status: "completed",
        isActive: true,
      },
      {
        id: "2",
        refundRequestNumber: 200,
        orderNumber: "123456789",
        retireeName: "John Doe",
        refundAmount: 200,
        refundRequestDate: new Date(),
        status: "initiated",
        isActive: false,
      },
      {
        id: "3",
        refundRequestNumber: 300,
        orderNumber: "123456789",
        retireeName: "John Doe",
        refundAmount: 300,
        refundRequestDate: new Date(),
        status: "rejected",
        isActive: true,
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
      sortName: "refundRequestNumber",
      sortDirection: "desc",
    },
  };
};
