module.exports = () => {
  return [
    {
      id: "1",
      label: "Folder 1",
      type: "folder",
      children: [
        {
          id: "2",
          label: "Report 1",
          type: "report",
          reportId: "abc123",
        },
        {
          id: "3",
          label: "Folder 2",
          type: "folder",
          children: [
            {
              id: "4",
              label: "Report 2",
              type: "report",
              reportId: "def456",
            },
          ],
        },
      ],
    },
    {
      id: "5",
      label: "Folder 1",
      type: "folder",
      children: [
        {
          id: "6",
          label: "Report 1",
          type: "report",
          reportId: "abcfd123",
        },
        {
          id: "7",
          label: "Folder 2",
          type: "folder",
          children: [
            {
              id: "8",
              label: "Report 2",
              type: "report",
              reportId: "def4fd56",
            },
          ],
        },
      ],
    },
  ];
};
