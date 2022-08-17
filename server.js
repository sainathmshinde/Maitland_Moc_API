var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

var getUserDetails = require("./data/getUserDetails");
var getDashboardDetails = require("./data/getDashboardDetails");
var getRoles = require("./data/getRoles");
var getGroups = require("./data/getGroups");
var getPolicies = require("./data/getPolicies");
var getUsers = require("./data/getUsers");
var getRoleWithUsers = require("./data/getRoleWithUsers");
var getGroupWithUsers = require("./data/getGroupWithUsers");
var getRoleWithPolicies = require("./data/getRoleWithPolicies");
var getRoleWithGroups = require("./data/getRoleWithGroups");
var getUserDetailsList = require("./data/getUserDetailsList");
var getApplications = require("./data/getApplications");
var getPages = require("./data/getPages");
var getPolicyDetailsByRoleId = require("./data/getPolicyDetailsByRoleId");
var getPagesByApplicationIds = require("./data/getPagesByApplicationIds");
var getRolePolicies = require("./data/getRolePolicies");
const getActionTree = require("./data/getActionTree");
const getAccessibility = require("./data/getAccessibility");

app.get("/api/Home/GetUserDetails", function (req, res) {
  console.log("/api/getuserDetails");
  res.status(200).send(getUserDetails());
});

app.get("/api/home/getDashboardDetails", function (req, res) {
  console.log("/api/getDashboardDetails");
  res.status(200).send(getDashboardDetails());
});

// app.get("/api/getApplications", function (req, res) {
//   console.log("/api/getApplications");
//   res.status(200).send(getDashboardDetails());
// });

app.get("/api/role/getRoles", function (req, res) {
  console.log("/api/roles");
  if (Object.keys(req.query).length > 0) {
    res.status(200).send(getRoles());
  } else {
    res.status(200).send([
      { id: 1, name: "admin", description: "Description for the role" },
      { id: 2, name: "user", description: "Description for the role" },
      { id: 3, name: "guest", description: "Description for the role" },
      { id: 4, name: "superuser", description: "Description for the role" },
      { id: 5, name: "superadmin", description: "Description for the role" },
      { id: 6, name: "Owner​​", description: "Description for the role" },
      { id: 7, name: "contributor​", description: "Description for the role" },
      { id: 8, name: "​custom Role​", description: "Description for the role" },
      { id: 9, name: "​api User​", description: "Description for the role" },
      { id: 10, name: "ui User​", description: "Description for the role" },
    ]);
  }
});

app.get("/api/preset/getRoles", function (req, res) {
  console.log("/api/roles");
  if (Object.keys(req.query).length > 0) {
    res.status(200).send(getRoles());
  } else {
    res.status(200).send([
      { id: 1, name: "admin", description: "Description for the role" },
      { id: 2, name: "user", description: "Description for the role" },
      { id: 3, name: "guest", description: "Description for the role" },
      { id: 4, name: "superuser", description: "Description for the role" },
      { id: 5, name: "superadmin", description: "Description for the role" },
      { id: 6, name: "Owner​​", description: "Description for the role" },
      { id: 7, name: "contributor​", description: "Description for the role" },
      { id: 8, name: "​custom Role​", description: "Description for the role" },
      { id: 9, name: "​api User​", description: "Description for the role" },
      { id: 10, name: "ui User​", description: "Description for the role" },
    ]);
  }
});

app.get("/api/group/getGroups", function (req, res) {
  console.log("/api/groups");
  res.status(200).send(getGroups());
});

app.get("/api/preset/getGroups", function (req, res) {
  console.log("/api/groups");
  res.status(200).send(getGroups());
});

app.get("/api/policies", function (req, res) {
  console.log("/api/policies");
  res.status(200).send(getPolicies());
});

app.get("/api/preset/getUsers", function (req, res) {
  console.log("/api/users");
  res.status(200).send(getUsers());
});

app.post("/api/users", function (req, res) {
  console.log("/api/users");
  res.status(200).send({ message: "User created successfully" });
});

app.get("/api/role/getrolepolicies/:id", function (req, res) {
  console.log("/api/policies");
  res.status(200).send({
    id: 1,
    name: "Admin",
    policies: [
      { id: 1, name: "Add User" },
      { id: 2, name: "Edit User" },
      { id: 3, name: "Delete User" },
    ],
    description: "Admn role description",
    group: { id: 5, name: "superadmin" },
  });
});

app.get("/api/getRoleWithUsers", function (req, res) {
  console.log("/api/getRoleWithUsers");
  res.status(200).send(getRoleWithUsers());
});

app.get("/api/preset/getApplications", function (req, res) {
  console.log("/api/getApplications");
  res.status(200).send(getApplications());
});

app.get("/api/getGroupWithUsers", function (req, res) {
  console.log("/api/getGroupWithUsers");
  res.status(200).send(getGroupWithUsers());
});

app.get("/api/getRoleWithPolicies", function (req, res) {
  console.log("/api/getRoleWithPolicies");
  res.status(200).send(getRoleWithPolicies());
});

app.get("/api/getRoleWithGroups", function (req, res) {
  console.log("/api/getRoleWithGroups");
  res.status(200).send(getRoleWithGroups());
});

app.get("/api/user/getUsers", function (req, res) {
  console.log("/api/getUserList");
  if (Object.keys(req.query).length > 0) {
    res.status(200).send(getUserDetailsList());
  } else {
    res.status(200).send([
      {
        id: 1,
        title: { id: 1, name: "Mr" },
        firstName: "John",
        surName: "Doe",
        dateOfBirth: "2015-03-25T12:00:00-06:30",
        initials: "JD",
        userName: "jdoe",
        description: "This is a description",
        roles: [
          { id: 1, name: "admin" },
          { id: 2, name: "user" },
        ],
      },

      {
        id: 2,
        title: { id: 2, name: "Mrs" },
        firstName: "John",
        surName: "Doe",
        dateOfBirth: "2015-03-25T12:00:00-06:30",
        initials: "JD",
        userName: "jdoe",
        description: "This is a description",
        roles: [
          { id: 1, name: "admin" },
          { id: 2, name: "user" },
        ],
      },

      {
        id: 3,
        title: { id: 3, name: "Mr" },
        firstName: "Wick",
        surName: "Jow",
        dateOfBirth: "2015-03-25T12:00:00-06:30",
        initials: "JD",
        userName: "jdoe",
        description: "This is a description",
        roles: [
          { id: 1, name: "admin" },
          { id: 2, name: "user" },
        ],
      },

      {
        id: 4,
        title: { id: 4, name: "Mr" },
        firstName: "Wick",
        surName: "Jow",
        dateOfBirth: "2015-03-25T12:00:00-06:30",
        initials: "JD",
        userName: "jdoe",
        description: "This is a description",
        roles: [
          { id: 1, name: "admin" },
          { id: 2, name: "user" },
        ],
      },

      {
        id: 5,
        title: { id: 5, name: "Mr" },
        firstName: "Adam",
        surName: "Gill",
        dateOfBirth: "2015-03-25T12:00:00-06:30",
        initials: "JD",
        userName: "jdoe",
        description: "This is a description",
        roles: [
          { id: 1, name: "admin" },
          { id: 2, name: "user" },
        ],
      },

      {
        id: 6,
        title: { id: 6, name: "Mr" },
        firstName: "Adam",
        surName: "Gill",
        dateOfBirth: "2015-03-25T12:00:00-06:30",
        initials: "JD",
        userName: "jdoe",
        description: "This is a description",
        roles: [
          { id: 1, name: "admin" },
          { id: 2, name: "user" },
        ],
      },

      {
        id: 7,
        title: { id: 7, name: "Mr" },
        firstName: "Adam",
        surName: "Gill",
        dateOfBirth: "2015-03-25T12:00:00-06:30",
        initials: "JD",
        userName: "jdoe",
        description: "This is a description",
        roles: [
          { id: 1, name: "admin" },
          { id: 2, name: "user" },
        ],
      },

      {
        id: 8,
        title: { id: 8, name: "Mr" },
        firstName: "Adam",
        surName: "Gill",
        dateOfBirth: "2015-03-25T12:00:00-06:30",
        initials: "AG",
        userName: "Adam",
        description: "This is a description",
        roles: [
          { id: 1, name: "admin" },
          { id: 2, name: "user" },
        ],
      },

      {
        id: 9,
        title: { id: 9, name: "Mr" },
        firstName: "Adam",
        surName: "Gill",
        dateOfBirth: "2015-03-25T12:00:00-06:30",
        initials: "AG",
        userName: "Adam",
        description: "This is a description",
        roles: [
          { id: 1, name: "admin" },
          { id: 2, name: "user" },
        ],
      },

      {
        id: 10,
        title: { id: 10, name: "Mr" },
        firstName: "Chris",
        surName: "john",
        dateOfBirth: "2015-03-25T12:00:00-06:30",
        initials: "CJ",
        userName: "john",
        description: "This is a description",
        roles: [
          { id: 1, name: "admin" },
          { id: 2, name: "user" },
        ],
      },
    ]);
  }
});

app.get("/api/getPages", function (req, res) {
  console.log("/api/getPages");
  res.status(200).send(getPages());
});

app.get("/api/preset/getTitles", function (req, res) {
  console.log("/api/user/getTitles");
  res.status(200).send([
    { titleId: 1, titleName: "Mr." },
    { titleId: 2, titleName: "Mrs." },
    { titleId: 3, titleName: "Ms." },
  ]);
});

app.get("/api/getPagesByAppIds", function (req, res) {
  console.log("/api/getPagesByAppIds");
  res.status(200).send(getPagesByApplicationIds());
});

app.get("/api/getActionsByPageIds", function (req, res) {
  console.log("/api/getActionsByPageIds");
  res.status(200).send(getActionsByPageIds());
});

app.get("/api/getPolicyDetailsByRoleId", function (req, res) {
  console.log("/api/getUserDetailsByRoleId");
  res.status(200).send(getPolicyDetailsByRoleId());
});

app.get("/api/role/getActionTree", function (req, res) {
  console.log("/api/role/getActionTree");
  res.status(200).send(getActionTree());
});

app.get("/api/role/getRolePolicies", function (req, res) {
  console.log("/api/getRolePolicies");
  res.status(200).send(getRolePolicies());
});

app.get("/api/getAccessibility", function (req, res) {
  console.log("/api/getAccessibility");
  res.status(200).send(getAccessibility());
});

app.post("/api/postUserRole", function (req, res) {
  console.log("/api/postUserRole");
  res.status(200).send({ id: 1 });
});

app.post("/api/postUserGroup", function (req, res) {
  console.log("/api/postUserRole");
  res.status(200).send({ id: 1 });
});

app.put("/api/postUserGroup/:id", function (req, res) {
  console.log("/api/postUserRole");
  res.status(200).send({ id: 1 });
});

app.put("/api/postUserRole/:id", function (req, res) {
  console.log("/api/postUserRole");
  res.status(200).send({ id: 1 });
});

app.put("/api/users/updateUser/:id", function (req, res) {
  console.log("/api/updateUser");
  res.status(200).send({ id: 1 });
});

app.post("/api/postRoleGroup", function (req, res) {
  console.log("/api/postRoleGroup");
  res.status(200).send({ id: 1 });
});

app.post("/api/role/addRole", function (req, res) {
  console.log("/api/addRole");
  res.status(200).send({ id: 1 });
});

app.post("/api/user/addUser", function (req, res) {
  console.log("/api/addUser");
  res.status(200).send({ id: 1 });
});

app.post("/api/postRolePolicy", function (req, res) {
  console.log("/api/postRolePolicy");
  res.status(200).send({ id: 1 });
});

app.put("/api/postRolePolicy/:id", function (req, res) {
  console.log("/api/postRolePolicy");
  res.status(200).send({ id: 1 });
});

app.put("/api/postRoleGroup/:id", function (req, res) {
  console.log("/api/postRoleGroup");
  res.status(200).send({ id: 1 });
});

app.listen(5001, () => {
  console.log("Server started at 5001");
});
