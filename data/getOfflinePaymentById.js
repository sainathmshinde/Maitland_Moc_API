module.exports = () => {
  return {
    paymentMode: { id: 1, name: "cheque" },
    retireeName: "Gangaprasad Mohite",
    chequeDetails: {
      chequeNumber: "1KHSD2323LH",
      amount: 50000,
      bankName: "ICICI Bank",
      date: "2023-07-01T10:00:00Z",
      inFavourOf: "ICICI Bank Association",
      chequePhoto:
        "amazon.in/Apple-12-9-inch-iPad-Pro-Wi-Fi-Cellular/dp/B0BJMMHSGM/ref=sr_1_2_sspa?crid=2VPLCOFJO57OP&keywords=ipad&qid=1698597388&sprefix=ipad%2Caps%2C192&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
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
