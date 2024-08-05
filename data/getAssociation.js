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
    parentAssociation: null,
    address1: "df",
    address2: "ff",
    city: "ff",
    state: {
      id: 1,
      name: "ANDAMAN AND NICOBAR ISLANDS",
    },
    pinCode: "334353",
    country: {
      id: 1,
      name: "India",
    },
    acceptOnePayPayment: true,
    associationContactDetails: [
      {
        id: 1,
        firstName: "test",
        lastName: "eee",
        email: "test@gmail.com",
        phone: "1234567890",
      },
    ],
    bank: {
      id: 1,
      bankName: "abc bank",
      branchName: "abc branch",
      accountName: "test Association",
      accountNumber: "505402010913496",
      ifscCode: "ubin0550540",
      micrCode: "5505540",
    },
    associationMessages: [
      {
        id: 1,
        name: "test",
        template: "test",
      },
    ],
    onePayId: null,
  };
};
