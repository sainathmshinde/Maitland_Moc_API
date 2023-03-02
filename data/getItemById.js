module.exports = () => {
  return {
    ItemId: 1,
    ItemType: "Folder",
    Name: "Alexander Forbes",
    Notes: "Lorem ipsum dor",
    DefaultFilename: "Abax investments",
    ReportLocation: "../../Legacy Reports",
    StoredProcedure: "StoredProcedure",
    ReportDefinition: "Report Defination",
    Generator: {
      id: 1,
      name: "SSRS2017",
      code: "SSRS2017",
      descritption: "SQL server reporting services 2017",
    },
    ParentId: { id: 1, name: "Standard Report" },
    SortOrder: 0,
    Code: "F",
    Enable: bool,
    ValidFrom: "isostring", //date
    ValidTo: "isostring", //date
  };
};
