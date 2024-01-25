module.exports = () => {
  return {
    validationRuleId: 1,
    validationRuleName: "profile_1",
    assetGroup: {
      id: 1,
      name: "Equity",
    },
    client: {
      id: 1,
      name: "APEX",
    },
    fund: {
      fundId: 1,
      fundName: "fund_!",
      fundCode: "14020",
    },
    activeDate: "2000-10-31T01:30:00.000-05:00",
    inActiveDate: "2000-10-31T01:30:00.000-05:00",
    status: "active",
    canonicalType: {
      id: 1,
      name: "Trade",
    },
    matchingRules: [
      {
        fieldName: "SDIN",
        rules: [
          {
            id: 1,
            rule: {
              id: 1,
              name: "Greater Than",
            },
            param1: 2,
            param2: 5,
          },

          {
            id: 2,
            rule: {
              id: 2,
              name: "Between",
            },
            param1: 2,
            param2: 7,
          },
        ],
      },
      {
        fieldName: "Quantity",
        rules: [
          {
            id: 1,
            rule: {
              id: 1,
              name: "Greater Than",
            },
            param1: 2,
            param2: 5,
          },
        ],
      },
    ],
  };
};
