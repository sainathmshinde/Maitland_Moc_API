module.exports = () => {
  return {
    items: [
      {
        id: 1,
        application: {
          id: "1",
          name: "Application Framework",
        },
        pageName: "role",
        pageNameAlias: "Role 1",
        parentPage: {
          id: 1,
          name: "Parent Page 1",
        },
      },
      {
        id: 2,
        application: {
          id: "2",
          name: "Application Framework 2",
        },
        pageName: "Role 2",
        pageNameAlias: "Role 2",
        parentPage: {
          id: 5,
          name: "Parent Page 2",
        },
      },
    ],
    totalCount: 1000,
    totalPages: 100,
    currentPage: 1,
  };
};
