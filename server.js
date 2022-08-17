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

app.get("/Home/GetUserDetails", function (req, res) {
  console.log("/getuserDetails");
  res.status(200).send(getUserDetails());
});

app.get("/home/getDashboardDetails", function (req, res) {
  console.log("/getDashboardDetails");
  res.status(200).send(getDashboardDetails());
});

// app.get("/getApplications", function (req, res) {
//   console.log("/getApplications");
//   res.status(200).send(getDashboardDetails());
// });

app.get("/role/getRoles", function (req, res) {
  console.log("/roles");
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

app.get("/preset/getRoles", function (req, res) {
  console.log("/roles");
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

app.get("/group/getGroups", function (req, res) {
  console.log("/groups");
  res.status(200).send(getGroups());
});

app.get("/policies", function (req, res) {
  console.log("/policies");
  res.status(200).send(getPolicies());
});

app.get("/preset/getUsers", function (req, res) {
  console.log("/users");
  res.status(200).send(getUsers());
});

app.post("/users", function (req, res) {
  console.log("/users");
  res.status(200).send({ message: "User created successfully" });
});

app.get("/role/getrolepolicies/:id", function (req, res) {
  console.log("/policies");
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

app.get("/getRoleWithUsers", function (req, res) {
  console.log("/getRoleWithUsers");
  res.status(200).send(getRoleWithUsers());
});

app.get("/preset/getApplications", function (req, res) {
  console.log("/getApplications");
  res.status(200).send(getApplications());
});

app.get("/getGroupWithUsers", function (req, res) {
  console.log("/getGroupWithUsers");
  res.status(200).send(getGroupWithUsers());
});

app.get("/getRoleWithPolicies", function (req, res) {
  console.log("/getRoleWithPolicies");
  res.status(200).send(getRoleWithPolicies());
});

app.get("/getRoleWithGroups", function (req, res) {
  console.log("/getRoleWithGroups");
  res.status(200).send(getRoleWithGroups());
});

app.get("/user/getUsers", function (req, res) {
  console.log("/getUserList");
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

app.get("/getPages", function (req, res) {
  console.log("/getPages");
  res.status(200).send(getPages());
});

app.get("/preset/getTitles", function (req, res) {
  console.log("/user/getTitles");
  res.status(200).send([
    { titleId: 1, titleName: "Mr." },
    { titleId: 2, titleName: "Mrs." },
    { titleId: 3, titleName: "Ms." },
  ]);
});

app.get("/getPagesByAppIds", function (req, res) {
  console.log("/getPagesByAppIds");
  res.status(200).send(getPagesByApplicationIds());
});

app.get("/getActionsByPageIds", function (req, res) {
  console.log("/getActionsByPageIds");
  res.status(200).send(getActionsByPageIds());
});

app.get("/getPolicyDetailsByRoleId", function (req, res) {
  console.log("/getUserDetailsByRoleId");
  res.status(200).send(getPolicyDetailsByRoleId());
});

app.get("/role/getActionTree", function (req, res) {
  console.log("/role/getActionTree");
  res.status(200).send(getActionTree());
});

app.get("/role/getRolePolicies", function (req, res) {
  console.log("/getRolePolicies");
  res.status(200).send(getRolePolicies());
});

app.get("/getAccessibility", function (req, res) {
  console.log("/getAccessibility");
  res.status(200).send(getAccessibility());
});

app.post("/postUserRole", function (req, res) {
  console.log("/postUserRole");
  res.status(200).send({ id: 1 });
});

app.post("/postUserGroup", function (req, res) {
  console.log("/postUserRole");
  res.status(200).send({ id: 1 });
});

app.put("/postUserGroup/:id", function (req, res) {
  console.log("/postUserRole");
  res.status(200).send({ id: 1 });
});

app.put("/postUserRole/:id", function (req, res) {
  console.log("/postUserRole");
  res.status(200).send({ id: 1 });
});

app.put("/users/updateUser/:id", function (req, res) {
  console.log("/updateUser");
  res.status(200).send({ id: 1 });
});

app.post("/postRoleGroup", function (req, res) {
  console.log("/postRoleGroup");
  res.status(200).send({ id: 1 });
});

app.post("/role/addRole", function (req, res) {
  console.log("/addRole");
  res.status(200).send({ id: 1 });
});

app.post("/user/addUser", function (req, res) {
  console.log("/addUser");
  res.status(200).send({ id: 1 });
});

app.post("/postRolePolicy", function (req, res) {
  console.log("/postRolePolicy");
  res.status(200).send({ id: 1 });
});

app.put("/postRolePolicy/:id", function (req, res) {
  console.log("/postRolePolicy");
  res.status(200).send({ id: 1 });
});

app.put("/postRoleGroup/:id", function (req, res) {
  console.log("/postRoleGroup");
  res.status(200).send({ id: 1 });
});

app.listen(7000, () => {
  console.log("Server started at 7000");
});
