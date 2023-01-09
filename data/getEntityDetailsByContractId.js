module.exports = () => {
  return {
    clientEntity: {
      code: "ABSA-1",
      id: 1,
      name: "ABSA",
    },
    serviceEntity: {
      code: "ABC-1",
      id: 3,
      name: "ABSA capital",
    },
    service: [
      {
        id: 5,
        name: "Trade settlement",
        description: "",
        code: "",
      },
      {
        id: 6,
        name: "Investment accounting",
        description: "",
        code: "",
      },
    ],
    contactDetails: [
      {
        id: 2,
        contactTypeID: 0,
        firstName: "vilas",
        surname: "sagar",
        email: "vilas@abc.com",
        contactNumber: "123",
        designation: "SSE",
        contactTypeName: "Entity",
        contactType: {
          contactTypeName: "Entity",
          contactTypeID: 1,
        },
      },
      {
        id: 2,
        contactTypeID: 0,
        firstName: "vilas",
        surname: "sagar",
        email: "vilas@abc.com",
        contactNumber: "123",
        designation: "SSE",
        contactTypeName: "Entity",
        contactType: {
          contactTypeName: "Entity",
          contactTypeID: 1,
        },
      },
    ],
  };
};
