module.exports = () => {
  return {
    legalEntityId: 2,
    entityName: "GIA",
    registrationNumber: "ABC123",
    financialYearEnd: "01/May",
    kycNextReviewdate: "2022-09-13T00:00:00",
    entityGroup: {
      id: 5,
      name: "Country",
      description: "Country",
    },
    entityType: {
      id: 1,
      name: "Country",
      description: null,
    },
    legalJurisdiction: {
      id: 76,
      name: "IND",
      description: "India",
    },
    operationalJurisdiction: {
      id: 76,
      name: "IND",
      description: "India",
    },
    regulatoryAuthority: {
      id: 1,
      name: "Test",
      description: "Test",
      jurisdictionId: 76,
    },
    baseCurrency: {
      id: 67,
      name: "INR",
      description: "Indian rupee",
    },
    status: {
      id: 1,
      name: "Mooted",
      description: "An idea for investigation",
    },
    kycStatus: {
      id: 1,
      name: "Dubious",
      description:
        "Data must be assumed to be completely unreliable until further investigations have been completed.",
    },
    entityContacts: [],
    operationalContacts: [
      {
        id: 6496,
        contactTypeID: 0,
        contactTypeName: "Operational",
        firstName: "Vilas",
        surname: "Sagar",
        emailAddress: "Vilas.Sagar@maitlandgroup.com",
        contactNumber: "3845346347",
        designation: "xyz",
      },
    ],
    billingContacts: [
      {
        id: 6496,
        contactTypeID: 0,
        contactTypeName: "Operational",
        firstName: "Vilas",
        surname: "Sagar",
        emailAddress: "Vilas.Sagar@maitlandgroup.com",
        contactNumber: "3845346347",
        designation: "xyz",
      },
      {
        id: 6499,
        contactTypeID: 0,
        contactTypeName: "Operational",
        firstName: "Vilas",
        surname: "Sagar",
        emailAddress: "Vilas.Sagar@maitlandgroup.com",
        contactNumber: "3845346347",
        designation: "xyz",
      },
    ],
    commercialContacts: [],
    reportingContacts: [],
  };
};
