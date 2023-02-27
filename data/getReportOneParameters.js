module.exports = () => {
  return {
    reportId: 324,
    reportName: "Fund Data",
    reportNotes: "Fund Data",
    parentId: 38,
    parentName: "PerfServices",
    generatorCode: "LEGACY",
    generatorURI: "http://reportingportal/ReportManager/GenerateStreamReport",
    reportLocation: "825",
    parameters: [
      {
        name: "End Date",
        code: "EndDate",
        type: "DateTime",
        dataType: "Date",
        lookupType: "",
      },
      {
        name: "Asset Manager ID",
        code: "AssetManagerID",
        type: "String",
        dataType: "int",
        lookupType: "Client",
      },
      {
        name: "Portfolio Group ID",
        code: "PortfolioGroupID",
        type: "String",
        dataType: "int",
        lookupType: "PortfolioGroup",
      },
      {
        name: "Portfolio ID Code",
        code: "PortfolioIDCode",
        type: "String",
        dataType: "int",
        lookupType: "Portfolio",
      },
    ],
    allowedFormats: [
      {
        formatCode: "EXCELOPENXML",
        description: "Excel (xlsx)",
        defaultExtension: "xlsx",
      },
      {
        formatCode: "EXCEL",
        description: "Excel 97 (xls)",
        defaultExtension: "xls",
      },
      {
        formatCode: "PDF",
        description: "PDF",
        defaultExtension: "pdf",
      },
    ],
  };
};
