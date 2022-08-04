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

app.get("/getuserDetails", function (req, res) {
  console.log("/getuserDetails");
  res.status(200).send(getUserDetails());
});

app.get("/getDashboardDetails", function (req, res) {
  console.log("/getDashboardDetails");
  res.status(200).send(getDashboardDetails());
});

app.get("/getApplications", function (req, res) {
  console.log("/getApplications");
  res.status(200).send(getDashboardDetails());
});

app.get("/roles", function (req, res) {
  console.log("/roles");
  res.status(200).send(getRoles());
});

app.get("/groups", function (req, res) {
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

app.post("/postUserRole", function (req, res) {
  console.log("/postUserRole");
  res.status(200).send({ id: 1 });
});

app.post("/postUserGroup", function (req, res) {
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
