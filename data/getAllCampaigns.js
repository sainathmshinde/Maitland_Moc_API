module.exports = () => {
  return {
    statusCode: 200,
    errorMessage: null,
    source: "Products",
    searchTerm: "",
    resultCount: 1,
    contents: [
      {
        campaignId: 1,
        name: "Summer Promotion",
        startDate: "2023-06-01",
        endDate: "2023-08-31",
        products: ["MetLife", "Prudential", "New York Life"],
        associations: ["AXIS Association", "HDFC Association"],
        remainingDays: 20,
        isCampaignOpen: true,
      },
      {
        campaignId: 2,
        name: "Holiday Deals",
        startDate: "2023-11-15",
        endDate: "2023-12-31",
        products: ["MetLife", "New York Life"],
        associations: ["AXIS Association", "HDFC Association"],
        remainingDays: 50,
        isCampaignOpen: true,
      },
      {
        campaignId: 3,
        name: "Spring Savings",
        startDate: "2024-03-01",
        endDate: "2024-05-31",
        products: ["Prudential", "New York Life"],
        associations: ["AXIS Association", "HDFC Association"],
        remainingDays: 30,
        isCampaignOpen: false,
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
