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
    country: {
      id: 1,
      name: "India",
    },
    acceptOnePayPayment: false,
    associationContactDetails: null,
    bank: {
      id: 1,
      bankName: "HDFC Bank",
      accountNumber: "1234567890",
      ifscCode: "HDFC0000001",
      micrCode: "HDFC0000001",
      accountName: "test",
      branchName: "test",
    },
    associationMessages: null,
    onePayId: null,
  };
};
