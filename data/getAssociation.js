module.exports = () => {
  return {
    mandateFile: null,
    qrCodeFile: null,
    id: 1,
    associationName: "test",
    organisation: {
      id: 1,
      name: "test",
    },
    parentAssociation: {
      id: 0,
      name: "",
    },
    address1: null,
    address2: null,
    city: null,
    state: {
      id: 1,
      name: "ANDAMAN AND NICOBAR ISLANDS",
    },
    pinCode: null,
    countryId: null,
    acceptOnePayPayment: true,
    bank: {
      id: "",
      bankName: "abc bank",
      branchName: "abc branch",
      accountName: "test Association",
      accountNumber: "505402010913496",
      ifscCode: "ubin0550540",
      micrCode: "5505540",
      mandateFile: {},
      qrCode: {},
    },

    id: 3,
    isActive: true,
    createdAt: "2024-07-26T14:12:29.1538444",
    updatedAt: "2024-07-26T14:12:29.1538474",
    createdBy: 1,
    updatedBy: 1,
  };
};
