module.exports = () => {
  return [
    {
      role: { id: 1, name: "admin" },
      policies: [
        { id: 1, name: "Add User" },
        { id: 2, name: "Edit User" },
        { id: 3, name: "Delete User" },
        { id: 4, name: "Add Group" },
        { id: 5, name: "Edit Group" },
        { id: 6, name: "Delete Group" },
      ],
    },
    {
      role: { id: 2, name: "user" },
      policies: [
        { id: 1, name: "Add User" },
        { id: 2, name: "Edit User" },
      ],
    },
  ];
};
