module.exports = () => {
  return [
    {
      reportId: 246,
      reportName: "Brokerage Per Broker NO GROUPING V2",
      reportNotes: "Brokerage Per Broker NO GROUPING V2",
      parentId: 13,
      parentName: "Brokerage",
      generatorCode: "LEGACY",
      generatorURI: "http://reportingportal/ReportManager/GenerateStreamReport",
      reportLocation: "729",
      parameters: [
        {
          name: "Asset Manager ID",
          code: "AssetManagerID",
          type: "String",
          dataType: "int",
          lookupType: "Client",
        },
        {
          name: "End Date",
          code: "EndDate",
          type: "DateTime",
          dataType: "Date",
          lookupType: "",
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
        {
          name: "Theme ID",
          code: "ThemeID",
          type: "String",
          dataType: "",
          lookupType: "",
        },
        {
          name: "Start Date",
          code: "StartDate",
          type: "DateTime",
          dataType: "Date",
          lookupType: "",
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
    },
  ];
};
