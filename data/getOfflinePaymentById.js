module.exports = () => {
  return {
    paymentMode: { id: 1, name: "cheque" },
    chequeDetails: {
      chequeNumber: "1KHSD2323LH",
      amount: 50000,
      bankName: "ICICI Bank",
      date: "2023-07-01T10:00:00Z",
      inFavourOf: "ICICI Bank Association",
      chequePhoto: "url",
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
  };
};
