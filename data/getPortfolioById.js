module.exports = () => {
  return {
    id: 1,
    serviceContract: {
      id: 1,
      name: "TFS contract with ABSA",
    },
    clientEntity: {
      code: "ABS1",
      id: 1,
      name: "ABSA",
    },
    serviceEntity: {
      id: 1,
      name: "Maitland",
    },
    billingEntity: {
      id: 1,
      name: "Maitland",
    },
    portfolioCategory: {
      id: 1,
      name: "Live",
    },
    typeOfPortfolio: {
      id: 4,
      name: "Multi-managed",
    },
    multiManagerHierarchy: {
      id: 1,
      name: "parent Portfolio",
    },
    parentPortfolio: {
      id: 1,
      name: "UK 200",
    },
    portfolioApprovalStatus: "Approved",
    portfolioNameShort: "UK fund",
    portfolioNameLong: "MI UK Test Fund 200",
    portfolioCode: "MI UK",
    services: [
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
          contactTypeName: "Sub-portfolio manager",
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
    reportingEntity1: { code: "ABS1", id: 1, name: "ABSA" },
    reportingEntity2: { code: "ABS1", id: 1, name: "ABSA" },
    maker: "Avdhoot",
  };
};
