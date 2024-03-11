module.exports = () => {
  return {
    matchingProfileId: 1026,
    matchingProfileName: "EqitiesMatchingProfile",
    assetGroup: {
      id: 8,
      name: "Equities",
      numberOfParameters: null,
    },
    client: {
      id: 0,
      name: null,
      numberOfParameters: null,
    },
    fund: null,
    activeDate: "0001-01-01T00:00:00",
    inActiveDate: "0001-01-01T00:00:00",
    status: null,
    canonicalType: {
      id: 1,
      name: "Trade",
      numberOfParameters: null,
    },
    matchingRules: [
      {
        fieldName: "ISIN",
        rules: [
          {
            matchingRuleId: 1026,
            rule: {
              id: 8,
              name: "Exact Match First 8 Characters",
              numberOfParameters: 0,
            },
            param1: "",
            param2: "",
          },
        ],
      },
      {
        fieldName: "TradeDate",
        rules: [
          {
            matchingRuleId: 1026,
            rule: {
              id: 7,
              name: "Exact Match",
              numberOfParameters: 0,
            },
            param1: "",
            param2: "",
          },
        ],
      },
      {
        fieldName: "SettlementDate",
        rules: [
          {
            matchingRuleId: 1026,
            rule: {
              id: 7,
              name: "Exact Match",
              numberOfParameters: 0,
            },
            param1: "",
            param2: "",
          },
        ],
      },
      {
        fieldName: "TransactionCode",
        rules: [
          {
            matchingRuleId: 1026,
            rule: {
              id: 11,
              name: "Exact Match Translate TransactionSubCode",
              numberOfParameters: 0,
            },
            param1: "",
            param2: "",
          },
        ],
      },
      {
        fieldName: "Quantity",
        rules: [
          {
            matchingRuleId: 1026,
            rule: {
              id: 7,
              name: "Exact Match",
              numberOfParameters: 0,
            },
            param1: "",
            param2: "",
          },
        ],
      },
      {
        fieldName: "SettlementCurrency",
        rules: [
          {
            matchingRuleId: 1026,
            rule: {
              id: 12,
              name: "Exact Match Translate Apex to ISO Currency Code",
              numberOfParameters: 0,
            },
            param1: "",
            param2: "",
          },
        ],
      },
      {
        fieldName: "NetConsideration",
        rules: [
          {
            matchingRuleId: 1026,
            rule: {
              id: 7,
              name: "Exact Match",
              numberOfParameters: 0,
            },
            param1: "",
            param2: "",
          },
        ],
      },
      {
        fieldName: "BrokerBIC",
        rules: [
          {
            matchingRuleId: 1026,
            rule: {
              id: 7,
              name: "Exact Match",
              numberOfParameters: 0,
            },
            param1: "",
            param2: "",
          },
        ],
      },
    ],
  };
};
