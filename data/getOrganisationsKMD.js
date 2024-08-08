module.exports = () => {
  return {
    statusCode: 200,
    errorMessage: null,
    source: "Products",
    searchTerm: "",
    resultCount: 1,
    contents: [
      {
        id: 1,
        name: "HDFC Bank",
        description:
          "HDFC Bank is a leading financial services company in India",
      },
      {
        id: 2,
        name: "ICICI Bank",
        description:
          "ICICI Bank is a leading financial services company in India",
      },
      {
        id: 3,
        name: "SBI Bank",
        description:
          "SBI Bank is a leading financial services company in India",
      },
      {
        id: 4,
        name: "Bank Of Maharashtra",
        description:
          "Bank Of Maharashtra is a leading financial services company in India",
      },
      {
        id: 5,
        name: "Deautsch Bank",
        description:
          "Deautsch Bank is a leading financial services company in India",
      },
    ],
  };
};
