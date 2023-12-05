module.exports = () => {
  return {
    profileId: 1,
    SDIN: [
      {
        rule: {
          id: 1,
          name: "Greater Than",
        },
        param1: 12,
      },
      {
        rule: {
          id: 3,
          name: "Between",
        },
        param1: 20,
        param2: 40,
      },
    ],
  };
};
