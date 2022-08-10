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
var getPagesByApplicationId = require("./data/getPagesByApplicationId");

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
  res.status(200).send(getRoles());
});

app.get("/group/getGroups", function (req, res) {
  console.log("/groups");
  res.status(200).send(getGroups());
});

app.get("/policies", function (req, res) {
  console.log("/policies");
  res.status(200).send(getPolicies());
});

app.get("/users", function (req, res) {
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

app.get("/getApplications", function (req, res) {
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
  res.status(200).send(getUserDetailsList());
});

app.get("/getPages", function (req, res) {
  console.log("/getPages");
  res.status(200).send(getPages());
});

app.get("/user/getTitles", function (req, res) {
  console.log("/user/getTitles");
  res.status(200).send([
    { id: 1, name: "Mr." },
    { id: 2, name: "Mrs." },
    { id: 3, name: "Ms." },
  ]);
});

app.get("/getPagesByApplicationId", function (req, res) {
  console.log("/getPagesByApplicationId");
  res.status(200).send(getPagesByApplicationId());
});

app.get("/getPolicyDetailsByRoleId", function (req, res) {
  console.log("/getUserDetailsByRoleId");
  res.status(200).send(getPolicyDetailsByRoleId());
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

app.post("/postRoleGroup", function (req, res) {
  console.log("/postRoleGroup");
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
