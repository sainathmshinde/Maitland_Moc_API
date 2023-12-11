module.exports = () => {
  return {
    items: [
      {
        profileId: 1,
        validationProfileName: "Equity Profile 1",
        assetGroup: "Equity",
        type: "Trade",
        client: "APEX",
        fundCode: "15040",
        activeDate: "2000-10-31T01:30:00.000-05:00",
        inActiveDate: "2000-10-31T01:30:00.000-05:00",
        status: "Active",
      },
      {
        profileId: 2,
        validationProfileName: "Debt Profile 1",
        assetGroup: "Equity",
        type: "Trade",
        client: "APEX",
        fundCode: "15040",
        activeDate: "2000-10-31T01:30:00.000-05:00",
        inActiveDate: "2000-10-31T01:30:00.000-05:00",
        status: "Active",
      },
    ],
    totalPages: 601,
    currentPage: 1,
    pageSize: 10,
    totalCount: 6019,
  };
};
