module.exports = () => {
  return {
    user: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    role: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    group: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    userrole: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    userGroup: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    roleGroup: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
    legalentity: {
      view: true,
      edit: true,
      delete: true,
      create: true,
      checker: false,
      approver: false,
    },
    contract: {
      view: true,
      edit: true,
      delete: true,
      create: true,
      checker: false,
      approver: false,
    },
    service: {
      view: true,
      edit: true,
      delete: true,
      create: true,
      checker: false,
      approver: false,
    },
    portfolio: {
      view: true,
      edit: true,
      delete: true,
      create: true,
      checker: false,
      approver: false,
    },
    asset: {
      view: true,
      edit: true,
      delete: true,
      create: true,
    },
  };
};
