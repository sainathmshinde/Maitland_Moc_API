//onlinme
return {
  userId: 1,
  policyId: 2,
  paymentDetails: {
    paymentModeId: 1,
    online: {
      amountPayable: 5000,
      amountPaid: 5000,
      transactionId: "abc23jk",
      paymentStatus: "success | fail",
    },
    offline: {
      offlinePaymentModeId: 1,
      chequeDetails: {
        chequeNumber: "",
        amount: "",
        bankName: "",
        date: "",
        inFavourOf: null,
        chequePhoto: null,
      },
      neft: {
        bankName: "",
        branchName: "",
        accountNumber: "",
        accountName: "",
        ifscCode: "",
        transactionId: "",
        amount: "",
        date: "",
      },
      upi: {
        transactionNumber: "",
        amount: "",
        date: "",
      },
    },
  },
};

return [
  {
    paymentId: 1,
    paymentMode: "UPI",
    payableAmount: 1000,
    date: "12/12/12",
    amountPaid: 1000,
    transactionId: 1,
    orderNumber: "ABC123",
    paymentStatus: "initiated | completed | failed ",
    acknowledgement: "",
  },
];

return [
  {
    orderId: 1,
    totalPremium: 50000,
    orderDate: "12/12/12",
    paymentStatus: "Pending | Paid ",
    amountPaid: 4000,
    policies: [
      {
        orderId: 1,
        productId: 1,
        productName: "Life Insurance",
        sumInsured: 500000,
        premium: 50.99,
        premiumReceipt: null,
      },
    ],
  },
];
