module.exports = () => {
  return {
    itemId: 1,
    itemType: {
      code: "F",
      name: "Folder",
    },
    name: "Alexander Forbes",
    notes: "Lorem ipsum dor",
    defaultFilename: "Abax investments",
    reportLocation: "../../Legacy Reports",
    storedProcedure: "StoredProcedure",
    reportDefinition: "Report Defination",
    generator: {
      id: 1,
      name: "SSRS2017",
      code: "SSRS2017",
      descritption: "SQL server reporting services 2017",
    },
    parent: { id: 1, name: "Standard Report" },
    sortOrder: 0,
    code: "F",
    enable: false,
    validFrom: "isostring", //date
    validTo: "isostring", //date
  };
};
