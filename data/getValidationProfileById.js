module.exports = () => {
  return {
    validationProfileId: 9,
    validationProfileName: null,
    assetGroup: {
      id: 2,
      name: "Seg Fund",
    },
    client: {
      id: 176,
      name: "Yolandi Test RnL",
    },
    fund: null,
    activeDate: "2024-01-15T00:00:00",
    inActiveDate: "2024-01-31T00:00:00",
    status: null,
    canonicalType: {
      id: 1,
      name: "Trade",
    },
    validationRules: [
      {
        fieldName: "AssetManagerCode",
        rules: [
          {
            validationRuleId: 9,
            rule: {
              id: 1,
              name: "ISO Currency Code",
            },
            param1: "",
            param2: "",
          },
        ],
      },
      {
        fieldName: "SendDateTime",
        rules: [
          {
            validationRuleId: 9,
            rule: {
              id: 4,
              name: "Not Null Or Blank",
            },
            param1: "",
            param2: "",
          },
        ],
      },
      {
        fieldName: "ReceiptDateTime",
        rules: [
          {
            validationRuleId: 9,
            rule: {
              id: 4,
              name: "Not Null Or Blank",
            },
            param1: "",
            param2: "",
          },
        ],
      },
      {
        fieldName: "TransactionID",
        rules: [
          {
            validationRuleId: 9,
            rule: {
              id: 6,
              name: "Must Be Numeric",
            },
            param1: "",
            param2: "",
          },
        ],
      },
      {
        fieldName: "OriginalTransactionID",
        rules: [
          {
            validationRuleId: 9,
            rule: {
              id: 6,
              name: "Must Be Numeric",
            },
            param1: "",
            param2: "",
          },
        ],
      },
      {
        fieldName: "BlockTransactionID",
        rules: [
          {
            validationRuleId: 9,
            rule: {
              id: 6,
              name: "Must Be Numeric",
            },
            param1: "",
            param2: "",
          },
        ],
      },
      {
        fieldName: "PortfolioIDCode",
        rules: [
          {
            validationRuleId: 9,
            rule: {
              id: 4,
              name: "Not Null Or Blank",
            },
            param1: "",
            param2: "",
          },
        ],
      },
    ],
  };

  // return {
  //   validationRuleId: 1,
  //   validationRuleName: "profile_1",
  //   assetGroup: {
  //     id: 1,
  //     name: "Equity",
  //   },
  //   client: {
  //     id: 1,
  //     name: "APEX",
  //   },
  //   fund: {
  //     fundId: 1,
  //     fundName: "fund_!",
  //     fundCode: "14020",
  //   },
  //   activeDate: "2000-10-31T01:30:00.000-05:00",
  //   inActiveDate: "2000-10-31T01:30:00.000-05:00",
  //   status: "active",
  //   canonicalType: {
  //     id: 1,
  //     name: "Trade",
  //   },
  //   validationRules: [
  //     {
  //       fieldName: "SDIN",
  //       rules: [
  //         {
  //           validationRuleId: 1,
  //           rule: {
  //             id: 1,
  //             name: "Greater Than",
  //           },
  //           param1: 2,
  //           param2: 5,
  //         },

  //         {
  //           validationRuleId: 2,
  //           rule: {
  //             id: 2,
  //             name: "Between",
  //           },
  //           param1: 2,
  //           param2: 7,
  //         },
  //       ],
  //     },
  //     {
  //       fieldName: "Quantity",
  //       rules: [
  //         {
  //           validationRuleId: 34,
  //           rule: {
  //             id: 1,
  //             name: "Greater Than",
  //           },
  //           param1: 2,
  //           param2: 5,
  //         },
  //       ],
  //     },
  //   ],
  // };
};
