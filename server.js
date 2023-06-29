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
const getLegalEntuties = require("./data/getLegalEntuties");
const getAssets = require("./data/getAssets");
const getCurrencies = require("./data/getCurrencies");
const lagalEntityStatus = require("./data/lagalEntityStatus");
const getJurisdictions = require("./data/getJurisdictions");
const getEntityTypeGroups = require("./data/getEntityTypeGroups");
const getKycStatus = require("./data/getKycStatus");
const getRAuthority = require("./data/getRAuthority");
const getEntityTypes = require("./data/getEntityTypes");
const getLegalEntityById = require("./data/getLegalEntityById");
const getEntityHistory = require("./data/getEntityHistory");
const getServices = require("./data/getServices");
const getServiceById = require("./data/getServiceById");
const getServiceGroups = require("./data/getServiceGroups");
const getLegalEntitiesByName = require("./data/getLegalEntitiesByName");
const getContactTypes = require("./data/getContactTypes");
const getUsersByIds = require("./data/getUsersByIds");
const getContractById = require("./data/getContractById");
const getContractStatus = require("./data/getContractStatus");
const getDelieveryRequirements = require("./data/getDelieveryRequirements");
const getServicesByTagId = require("./data/getServicesByTagId");
const getServiceEntityTags = require("./data/getServiceEntityTags");
const getContracts = require("./data/getContracts");
const getServicesByName = require("./data/getServicesByName");
const getContactList = require("./data/getContactList");
const getContactDetails = require("./data/getContactDetails");
const getEntityContacts = require("./data/getEntityContacts");
const getLegalEtityTree = require("./data/getLegalEtityTree");
const getServiceGroupList = require("./data/getServiceGroupList");
const getServiceGroupById = require("./data/getServiceGroupById");
const getContractTypes = require("./data/getContractTypes");
const getMasterContractList = require("./data/getMasterContractList");
const getClientByContractId = require("./data/getClientByContractId");
const getEvents = require("./data/getEvents");
const getEventPolicies = require("./data/getEventPolicies");
const getMasterFunds = require("./data/getMasterFunds");
const getEvent = require("./data/getEvent");
const getEventHeader = require("./data/getEventHeader");
const getCompaniesByUser = require("./data/getCompaniesByUser");
const getCompanies = require("./data/getCompanies");
const getUserCompanies = require("./data/getUserCompanies");
const getMasterPortfolios = require("./data/getMasterPortfolios");
const getEventTypes = require("./data/getEventTypes");
const getEventStatus = require("./data/getEventStatus");
const getFundCodes = require("./data/getFundCodes");
const getMetadata = require("./data/getMetadata");
const getMetaDataContext = require("./data/getMetaDataContext");
const getCountries = require("./data/getCountries");
const getMetadataCurrencies = require("./data/getMetadataCurrencies");
const getPortfolios = require("./data/getPortfolios");
const getPortfolioCategories = require("./data/getPortfolioCategories");
const getPortfolioTypes = require("./data/getPortfolioTypes");
const getAllApprovalStatus = require("./data/getAllApprovalStatus");
const getEntityDetailsByContractId = require("./data/getEntityDetailsByContractId");
const getSubPortfolioById = require("./data/getSubPortfolioById");
const getPortfolioById = require("./data/getPortfolioById");
const getHierarchy = require("./data/getHierarchy");
const getParentPortfolios = require("./data/getParentPortfolios");
const getPortfolioCountries = require("./data/getPortfolioCountries");
const getPortfolioCurrencies = require("./data/getPortfolioCurrencies");
const getValuationPoint = require("./data/getValuationPoint");
const getApplicablePricingSlot = require("./data/getApplicablePricingSlot");
const getYesNoValues = require("./data/getYesNoValues");
const getReconciliationFrequency = require("./data/getReconciliationFrequency");
const getCalculationBasis = require("./data/getCalculationBasis");
const getDistributionMonths = require("./data/getDistributionMonths");
const getPrimaryTradingPlatforms = require("./data/getPrimaryTradingPlatforms");
const getSecondStepPortfolioDetails = require("./data/getSecondStepPortfolioDetails");
const getportoflioUploadErrors = require("./data/getportoflioUploadErrors");
const getftrs = require("./data/getftrs");
const getPset = require("./data/getPset");
const getMethods = require("./data/getMethods");
const getJurisdictionById = require("./data/getJurisdictionById");
const getReportOneParameters = require("./data/getReportOneParameters");
const getReportTwoParameters = require("./data/getReportTwoParameters");
const getTreeview = require("./data/getTreeview");
const getApplicationPageList = require("./data/getApplicationPageList");
const getPagesByApplicationId = require("./data/getPagesByApplicationId");
const getItemList = require("./data/getItemList");
const getItemTypes = require("./data/getItemTypes");
const getItemById = require("./data/getItemById");
const getGeneratorList = require("./data/getGeneratorList");
const getItemParentByName = require("./data/getAllParents");
const getAssetAPprovalStatus = require("./data/getAssetAPprovalStatus");
const getApplicationTree = require("./data/getApplicationTree");
const getPortfolioDetails = require("./data/getPortfolioDetails");
const getADUsers = require("./data/getADUsers");
const getUsersByGroupNames = require("./data/getUsersByGroupNames");
const getGroupList = require("./data/getGroupList");
const getUsersByGroupIds = require("./data/getUsersByGroupNames");
const getRLPortfolios = require("./data/getRLPortfolios");
const getPortfolioHistory = require("./data/getPortfolioHistory");
const getPortfoliosList = require("./data/getPortfoliosList");
const getRnlPortfolios = require("./data/getRnlPortfolios");
const getRnlPortfolioById = require("./data/getRnlPortfolioById");
const getRnlPortfolioTypes = require("./data/getRnlPortfolioTypes");
const getAllocbbById = require("./data/getAllocbbById");
const getAllocBBList = require("./data/getAllocBBList");
const getReplicationTypes = require("./data/getReplicationTypes");
const getRnlStructureList = require("./data/getRnlStructureList");
const getRnlStructureById = require("./data/getRnlStructureById");
const getassetOwners = require("./data/getassetOwners");
const getProducts = require("./data/getProducts");
const getAllocBB = require("./data/getAllocBB");
const getPortfolioBB = require("./data/getPortfolioBB");

const getCustodians = require("./data/getCustodians");
const getClearingHouses = require("./data/getClearingHouses");
const getRnlClients = require("./data/getRnlClients");
const getRnlEventLIst = require("./data/getRnlEventLIst");
const getProductByEventId = require("./data/getProductByEventId");
const getSingleProduct = require("./data/getSingleProduct");
app.get("/api/user/getUserDetails", function (req, res) {
  console.log("/api/getuserDetails");
  res.status(200).send(getUserDetails());
});

app.get("/api/user/getuserbyid", function (req, res) {
  console.log("/api/getUserById");
  res.status(200).send({
    id: 6496,
    firstName: "Vilas",
    surname: "Sagar",
    designation: "Consultant FS - ICT",
    contactNumber: "",
    emailAddress: "Vilas.Sagar@maitlandgroup.com",
  });
});

app.get("/api/user/getDashboardDetails", function (req, res) {
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

app.get("/api/role/getallroles", function (req, res) {
  console.log("/api/roles");
  // if (Object.keys(req.query).length > 0) {
  //   res.status(200).send(getRoles());
  // } else {
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
    {
      id: 10,
      name: "Reporting platform admin​",
      description: "Description for the role",
    },
    {
      id: 11,
      name: "Reporting platform super user​",
      description: "Description for the role",
    },
    {
      id: 12,
      name: "Application framework super user​",
      description: "Description for the role",
    },
    {
      id: 13,
      name: "Entity master normal user​",
      description: "Description for the role",
    },
  ]);
  // }
});

app.get("/api/applicationpage/getapplicationpagelist", function (req, res) {
  console.log("/api/getapplicationpagelist");
  res.status(200).send(getApplicationPageList());
});

app.post("/api/applicationpage/addapplicationpage", function (req, res) {
  console.log("/api/addapplicationpage");
  res.status(200).send({ id: 1 });
});
app.post("/api/applicationpage/addapplicationpage/:id", function (req, res) {
  console.log("/api/addapplicationpage");
  res.status(200).send({ id: 1 });
});

app.get(
  "/api/applicationpage/getapplicationpagesbyapplicationid",
  function (req, res) {
    console.log("/api/getapplicationpagesbyapplicationid");
    res.status(200).send(getPagesByApplicationId());
  }
);

app.post("/api/applicationpage/deleteapplicationpage/:id", function (req, res) {
  console.log("/api/deleteapplicationpage");
  res.status(200).send({ message: "Application page deleted successfully" });
});

app.get("/api/role/getrolesbyapplicationid", function (req, res) {
  console.log("/api/roles");

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
});

app.get("/api/group/getgroups", function (req, res) {
  console.log("/api/getgrouplist");
  res.status(200).send(getGroups());
});

app.get("/api/group/getgrouplist", function (req, res) {
  console.log("/api/getgrouplist");
  res.status(200).send(getGroupList());
});

app.get("/api/group/getusersbygroupnames/", function (req, res) {
  console.log("/api/getusersbygroupnames");
  res.status(200).send(getUsersByGroupIds());
});

app.get("/api/policies", function (req, res) {
  console.log("/api/policies");
  res.status(200).send(getPolicies());
});

app.get("/api/user/GetAllUsers", function (req, res) {
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

app.get("/api/user/getRoleWithUsers", function (req, res) {
  console.log("/api/getRoleWithUsers");
  res.status(200).send(getRoleWithUsers());
});

app.get("/api/user/getApplications", function (req, res) {
  console.log("/api/getApplications");
  res.status(200).send(getApplications());
});

app.get("/api/legalentity/getlegalentitytree", function (req, res) {
  console.log("/api/getlegalentitytree");
  res.status(200).send(getLegalEtityTree());
});

app.get("/api/getGroupWithUsers", function (req, res) {
  console.log("/api/getGroupWithUsers");
  res.status(200).send(getGroupWithUsers());
});

app.get("/api/getRoleWithPolicies", function (req, res) {
  console.log("/api/getRoleWithPolicies");
  res.status(200).send(getRoleWithPolicies());
});

app.get("/api/group/getgrouproles", function (req, res) {
  console.log("/api/getgrouproles");
  res.status(200).send(getRoleWithGroups());
});

app.get("/api/user/getUsers", function (req, res) {
  console.log("/api/getUserList");
  if (Object.keys(req.query).length > 0) {
    setTimeout(() => {
      res.status(200).send(getUserDetailsList());
    }, 0);
  } else {
    res.status(200).send(getADUsers());
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

app.get("/api/user/getPolicyDetailsByRoleId", function (req, res) {
  console.log("/api/getUserDetailsByRoleId");
  res.status(200).send(getPolicyDetailsByRoleId());
});

app.get("/api/role/getActionTree", function (req, res) {
  console.log("/api/role/getActionTree");
  if (req.query.appId == 10) {
    res.status(200).send(getActionTree());
  } else {
    res.status(200).send(getApplicationTree());
  }
});

app.get("/api/role/getRolePolicies", function (req, res) {
  console.log("/api/getRolePolicies");
  res.status(200).send(getRolePolicies());
});

app.get("/api/user/getAccessibility", function (req, res) {
  console.log("/api/getAccessibility");
  res.status(200).send(getAccessibility());
  // res.status(500).send({ message: "Something Went Wrong!s" });
});

app.post("/api/user/exporttoexcel", function (req, res) {
  console.log("/api/exporttoexcel");
  res.status(200).send(true);
});
app.post("/api/user/addUserRole", function (req, res) {
  console.log("/api/postUserRole");
  res.status(200).send({ message: "User already exists" });
});

app.post("/api/postUserGroup", function (req, res) {
  console.log("/api/postUserRole");
  res.status(200).send({ id: 1 });
});

app.put("/api/postUserGroup/:id", function (req, res) {
  console.log("/api/postUserRole");
  res.status(200).send({ id: 1 });
});

app.put("/api/userRole/UserRole/:id", function (req, res) {
  console.log("/api/postUserRole");
  res.status(200).send({ id: 1 });
});

app.put("/api/user/updateUser/:id", function (req, res) {
  console.log("/api/updateUser");
  res.status(200).send({ id: 1 });
});

app.put("/api/role/updateRole/:id", function (req, res) {
  console.log("/api/updateRole");
  res.status(200).send({ id: 1 });
});

app.post("/api/group/addgrouprole", function (req, res) {
  console.log("/api/addgrouprole");
  res.status(200).send({ id: 1 });
});

app.post("/api/group/updategrouprole/:id", function (req, res) {
  console.log("/api/updategrouprole");
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

// entity master

app.get("/api/legalentity/getlegalentities", function (req, res) {
  console.log("/api/getEntities");
  res.status(200).send(getLegalEntuties());
});

app.put("/api/entity/updateEntity/:id", function (req, res) {
  console.log("/api/updateEntity");
  res.status(200).send({ id: 1 });
});

app.post("/api/entity/addEntity", function (req, res) {
  console.log("/api/addEntity");
  res.status(200).send({ id: 1 });
});

app.delete("/api/entity/deleteEntity/:id", function (req, res) {
  console.log("/api/deleteEntity");
  res.status(200).send({ id: 1 });
});

// asset allocation

app.get("/api/asset/getAssets", function (req, res) {
  console.log("/api/getEntities");
  res.status(200).send(getAssets());
});

app.put("/api/asset/updateAsset/:id", function (req, res) {
  console.log("/api/updateasset");
  res.status(200).send({ id: 1 });
});

app.post("/api/asset/addAsset", function (req, res) {
  console.log("/api/addasset");
  res.status(200).send({ id: 1 });
});

app.delete("/api/asset/deleteAsset/:id", function (req, res) {
  console.log("/api/deleteasset");
  res.status(200).send({ id: 1 });
});

//entity master

app.get("/api/legalentity/getlegalentitybyid/:id", function (req, res) {
  console.log("/api/getlegalentitybyid");
  res.status(200).send(getLegalEntityById());
});

app.get("/api/legalentity/getallbasecurrency", function (req, res) {
  console.log("/api/getCurrencies");
  res.status(200).send(getCurrencies());
});

app.get("/api/legalentity/getalllegalentitystatus", function (req, res) {
  console.log("/api/getCurrencies");
  res.status(200).send(lagalEntityStatus());
});

app.get("/api/legalentity/getalljurisdiction", function (req, res) {
  console.log("/api/getCurrencies");
  res.status(200).send(getJurisdictions());
});

app.get("/api/legalentity/getallentitygroup", function (req, res) {
  console.log("/api/getCurrencies");
  res.status(200).send(getEntityTypeGroups());
});

app.get("/api/legalentity/getentitycontacts", function (req, res) {
  console.log("/api/getentitycontacts");
  res.status(200).send(getEntityContacts());
});

app.get("/api/legalentity/getallcontacttype", function (req, res) {
  console.log("/api/getallcontacttype");
  res.status(200).send(getContactTypes());
});

app.get("/api/legalentity/getlegalentitiesbyname", function (req, res) {
  console.log("/api/getlegalentitiesbyname");
  res.status(200).send(getLegalEntitiesByName());
});

app.get("/api/user/getusersbyaccessibility", function (req, res) {
  console.log("/api/user/getusersbyaccessibility");
  res.status(200).send(getUsers());
});

app.get("/api/legalentity/getallentitytype", function (req, res) {
  console.log("/api/getallentitytypebygroupid");
  res.status(200).send(getEntityTypes());
});

app.get("/api/legalentity/getcontactbyemail", function (req, res) {
  console.log("/api/getcontactbyemail");
  res.status(200).send(getContactDetails());
});

app.get("/api/legalentity/getallkycstatus", function (req, res) {
  console.log("/api/getCurrencies");
  res.status(200).send(getKycStatus());
});

app.get("/api/legalentity/getcontactlist", function (req, res) {
  console.log("/api/getcontactlist");
  res.status(200).send(getContactList());
});

app.get("/api/legalentity/getcontactdetailsbyid/:id", function (req, res) {
  console.log("/api/getcontactdetailsbyid");
  res.status(200).send(getContactDetails());
});

app.get("/api/user/getusersbyids", function (req, res) {
  console.log("/api/getusersbyids");
  res.status(200).send(getUsersByIds());
});

app.get("/api/legalentity/getallregulatoryauthority", function (req, res) {
  console.log("/api/getCurrencies");
  res.status(200).send(getRAuthority());
});

app.get("/api/legalentity/getlegalentityauditlog", function (req, res) {
  console.log("/api/getlegalentityauditlog");
  res.status(200).send(getEntityHistory());
});

app.post("/api/legalentity/addlegalentity", function (req, res) {
  console.log("/api/addlegalentity");
  res.status(200).send({ id: 1 });
});

app.post("/api/legalentity/updatelegalentity/:id", function (req, res) {
  console.log("/api/updatelegalentity");
  res.status(200).send({ id: 1 });
});

app.post("/api/legalentity/deletelegalentity/:id", function (req, res) {
  console.log("/api/deletelegalentity");
  res.status(200).send({ id: 1 });
});

//service--------------------------------------------

app.get("/api/servicegroup/getservicegroups", function (req, res) {
  console.log("/api/getservicegroups");
  res.status(200).send(getServiceGroups());
});

app.get("/api/servicegroup/getservicegrouplist", function (req, res) {
  console.log("/api/getservicegrouplist");
  res.status(200).send(getServiceGroupList());
});

app.get("/api/service/getservices", function (req, res) {
  console.log("/api/getservices");
  res.status(200).send(getServices());
});

app.get("/api/service/getservicebyid/:id", function (req, res) {
  console.log("/api/getservicebyid");
  res.status(200).send(getServiceById());
});

app.get("/api/servicegroup/getservicegroupbyid/:id", function (req, res) {
  console.log("/api/getservicegroupbyid");
  res.status(200).send(getServiceGroupById());
});

app.post("/api/service/addservice", function (req, res) {
  console.log("/api/addservice");
  res.status(200).send({ id: 1 });
});

app.post("/api/service/updateService/:id", function (req, res) {
  console.log("/api/updateService");
  res.status(200).send({ id: 1 });
});
app.post("/api/servicegroup/addservicegroup", function (req, res) {
  console.log("/api/addservicegroup");
  res.status(400).send({
    responseCode: 2,
    message: "Service Group Already Exists.",
    dataSet: null,
  });
});
app.post("/api/servicegroup/updateServicegroup/:id", function (req, res) {
  console.log("/api/updateService");
  res.status(200).send({ id: 1 });
});

app.post("/api/service/deleteService/:id", function (req, res) {
  console.log("/api/deleteService");
  res.status(200).send({ id: 1 });
});

app.post("/api/servicegroup/deleteServicegroup/:id", function (req, res) {
  console.log("/api/deleteServicegroup");
  res.status(200).send({ id: 1 });
});

app.post("/api/portfolio/addadditionalmarketidentifier", function (req, res) {
  console.log("/api/addfundtradingjurisidiction");
  res.status(200).send({ dataSet: { id: 1 } });
});

app.post(
  "/api/portfolio/updateadditionalmarketidentifier/:id",
  function (req, res) {
    console.log("/api/updatefundtradingjurisdiction");
    res.status(200).send({ dataSet: { id: 1 } });
  }
);

app.post(
  "/api/portfolio/deletefundtradingjurisdiction/:id",
  function (req, res) {
    console.log("/api/deletefundtradingjurisdiction/:id");
    res.status(200).send({ dataSet: { id: 1 } });
  }
);

app.post("/api/portfolio/addportfolio", function (req, res) {
  console.log("/api/addportfolio");
  res.status(200).send({ dataSet: { portfolioId: 1 } });
});

app.post("/api/portfolio/deleteportfolio/:id", function (req, res) {
  console.log("/api/deleteportfolio");
  res.status(200).send({ dataSet: { portfolioId: 1 } });
});

app.post("/api/portfolio/updateportfolio/:id", function (req, res) {
  console.log("/api/updateportfolio");
  res.status(200).send({ dataSet: { portfolioId: 1 } });
});

app.get("/api/portfolio/getfundaccountingteams", function (req, res) {
  console.log("/api/getservices");
  res.status(200).send([
    { id: 1, name: "UT Hedge Fund Accounting" },
    { id: 1, name: "SEG Fund Accounting" },
  ]);
});

//contract --------------------------------------------

app.get("/api/contract/getcontracts", function (req, res) {
  console.log("/api/getontracts");
  res.status(200).send(getContracts());
});

app.get("/api/contract/getcontractbyid/:id", function (req, res) {
  console.log("/api/getcontractbyid");
  res.status(200).send(getContractById());
});

//get entitites
// getserviceentitytags

app.get("/api/contract/getServiceentitytag", function (req, res) {
  console.log("/api/getServiceentitytag");
  res.status(200).send(getServiceEntityTags());
});

// getContractStatus
app.get("/api/contract/getcontractstatus", function (req, res) {
  console.log("/api/getcontractstatus");
  res.status(200).send(getContractStatus());
});

// getDelieveryrequirements
app.get("/api/contract/getclientreportingdelivery", function (req, res) {
  console.log("/api/getdelieveryrequirements");
  res.status(200).send(getDelieveryRequirements());
});

// getKams
// getServiceTags - getServicegroups (endpoint already present)

// getServicesByTagId
app.get("/api/servicegroup/getservicesbygroupids", function (req, res) {
  console.log("/api/getservicesbygroupid");
  res.status(200).send(getServicesByTagId());
});

app.get("/api/contract/getcontractauditlog", function (req, res) {
  console.log("/api/getlegalentityauditlog");
  res.status(200).send(getEntityHistory());
});

app.get("/api/portfolio/getportfolioauditlog", function (req, res) {
  console.log("/api/getportfolioaudit");
  res.status(200).send(getPortfolioHistory());
});

app.get("/api/contract/getcontracttypes", function (req, res) {
  console.log("/api/getlegalentityauditlog");
  res.status(200).send(getContractTypes());
});

app.get("/api/contract/getcontractlistbytype", function (req, res) {
  console.log("/api/getlegalentityauditlog");
  res.status(200).send(getMasterContractList());
});

app.get("/api/contract/getclientbycontractid", function (req, res) {
  console.log("/api/getlegalentityauditlog");
  res.status(200).send(getClientByContractId());
});

app.get("/api/service/getserviceauditlog", function (req, res) {
  console.log("/api/getserviceauditlog");
  res.status(200).send(getEntityHistory());
});

app.get("/api/servicegroup/getservicegroupauditlog", function (req, res) {
  console.log("/api/getservicegroupauditlog");
  res.status(200).send(getEntityHistory());
});

app.get("/api/service/getservicebyname", function (req, res) {
  console.log("/api/getservicebyname");
  res.status(200).send(getServicesByName());
});

app.post("/api/contract/addcontract", function (req, res) {
  console.log("/api/addcontract");
  res.status(200).send({ id: 1 });
});

app.post("/api/contract/download", function (req, res) {
  console.log("/api/download");
  res.status(200).send({ id: 1 });
});
//approval
app.post("/api/approvalprocess/addapproverdetails", function (req, res) {
  console.log("/api/addaproverdetails");
  res.status(200).send({ id: 1 });
});

app.post("/api/approvalprocess/resendsubioemail/:id", function (req, res) {
  console.log("/api/resendsubioemail");
  res.status(200).send({ id: 1 });
});

app.post("/api/approvalprocess/resendoutputtemplateemail", function (req, res) {
  console.log("/api/resendoutputtemplateemail");
  res.status(200).send({ id: 1 });
});

app.post("/api/approvalprocess/getcheckerapproverdetails", function (req, res) {
  console.log("/api/getcheckerapproverdetails");
  res.status(200).send(false);
});

app.post("/api/contract/deletecontract/:id", function (req, res) {
  console.log("/api/deletecontract");
  res.status(200).send(true);
});

// portfolio

app.post("/api/portfolio/getportfolios", function (req, res) {
  console.log("/api/getportfolios");
  res.status(200).send(getPortfolios());
});

app.get("/api/portfolio/deleteportfolio/:id", function (req, res) {
  console.log("/api/deleteportfolio");
  res.status(200).send({ id: 1 });
});

app.get("/api/portfolio/getportfoliocategories", function (req, res) {
  console.log("/api/getportfoliocategories");
  res.status(200).send(getPortfolioCategories());
});

app.get("/api/portfolio/getportfoliotypes", function (req, res) {
  console.log("/api/getportfoliotypes");
  res.status(200).send(getPortfolioTypes());
});

app.get("/api/legalentity/getallapprovalstatus", function (req, res) {
  console.log("/api/getallapprovalstatus");
  res.status(200).send(getAllApprovalStatus());
});

app.get("/api/allocation/getallapprovalstatus", function (req, res) {
  console.log("/api/getallapprovalstatus");
  res.status(200).send(getAssetAPprovalStatus());
});

app.get("/api/contract/getentitydetailsbycontractid", function (req, res) {
  console.log("/api/getentitydetailsbycontractid");
  res.status(200).send(getEntityDetailsByContractId());
});

app.get("/api/portfolio/getsubportfoliosbyid", function (req, res) {
  console.log("/api/getsubportfoliosbyid");
  res.status(200).send(getSubPortfolioById());
});

app.get("/api/portfolio/getpset", function (req, res) {
  console.log("/api/getpset");
  res.status(200).send(getPset());
});

app.get("/api/portfolio/getftjmethod", function (req, res) {
  console.log("/api/getjftmethod");
  res.status(200).send(getMethods());
});

app.get("/api/portfolio/getportfoliobyid", function (req, res) {
  console.log("/api/getportfoliobyid");
  if (req.query.currentStep == 1) {
    res.status(200).send(getPortfolioById());
  } else if (req.query.currentStep == 2) {
    res.status(200).send(getSecondStepPortfolioDetails());
  } else if (req.query.currentStep == 3) {
    res.status(200).send(getftrs());
  } else {
    res.status(200).send({
      portfolioId: 1,
      portfolioApprovalStatus: "Approved",
      checkerIds: "1, 2,3",
      approverIds: "1,2,3",
      maker: "Avdhoot",
    });
  }
});

app.get("/api/portfolio/getmultimanagerhierarchy", function (req, res) {
  console.log("/api/getmultimanagerhierarchy");
  res.status(200).send(getHierarchy());
});

app.get("/api/portfolio/getparentportfolios", function (req, res) {
  console.log("/api/getparentportfolios");
  res.status(200).send(getParentPortfolios());
});

app.get("/api/portfolio/getcountries", function (req, res) {
  console.log("/api/getcountries");
  res.status(200).send(getPortfolioCountries());
});

app.get("/api/portfolio/getcurrencies", function (req, res) {
  console.log("/api/getcurrencies");
  res.status(200).send(getPortfolioCurrencies());
});
app.get("/api/portfolio/getcustodians", function (req, res) {
  console.log("/api/getcustodians");
  res.status(200).send(getCustodians());
});

app.get("/api/portfolio/getclearinghouses", function (req, res) {
  console.log("/api/getclearinghouses");
  res.status(200).send(getClearingHouses());
});

app.get("/api/portfolio/getValuationPoint", function (req, res) {
  console.log("/api/getValuationPoint");
  res.status(200).send(getValuationPoint());
});

app.get("/api/portfolio/getapplicablepricingslot", function (req, res) {
  console.log("/api/getapplicablepricingslot");
  res.status(200).send(getApplicablePricingSlot());
});

app.get("/api/portfolio/getyesnovalues", function (req, res) {
  console.log("/api/getyesnovalues");
  res.status(200).send(getYesNoValues());
});

app.get("/api/portfolio/getreconciliationfrequency", function (req, res) {
  console.log("/api/getreconciliationfrequency");
  res.status(200).send(getReconciliationFrequency());
});

app.get("/api/portfolio/getcalculationbasis", function (req, res) {
  console.log("/api/getcalculationbasis");
  res.status(200).send(getCalculationBasis());
});

app.get("/api/portfolio/getdistributionmonths", function (req, res) {
  console.log("/api/getdistributionmonths");
  res.status(200).send(getDistributionMonths());
});

app.get("/api/portfolio/getprimarytradingplatform", function (req, res) {
  console.log("/api/getprimarytradingplatforms");
  res.status(200).send(getPrimaryTradingPlatforms());
});

app.post("/api/portfolio/bulkportfolioupload", function (req, res) {
  console.log("/api/bulkportfolioupload");
  res.status(200).send({ id: 1 });
  // res.status(400).send(getportoflioUploadErrors());
});

app.post("/api/entity/bulkuploadlegalentity", function (req, res) {
  console.log("/entity/bulkuploadlegalentity");
  res.status(404).send({ id: 1 });
  // res.status(400).send(getportoflioUploadErrors());
});

app.post("/api/contract/bulkuploadcontract", function (req, res) {
  console.log("//contract/bulkuploadcontract");
  res.status(200).send({ id: 1 });
  // res.status(400).send(getportoflioUploadErrors());
});

app.post("/api/contract/updatecontract/:id", function (req, res) {
  console.log("/api/addcontract");
  res.status(200).send({ id: 1 });
});

app.get(
  "/api/portfolio/getadditionalmarketidentifierbyid",
  function (req, res) {
    console.log("/api/getadditionalmarketidentifierbyid");
    res.status(200).send(getJurisdictionById());
  }
);

app.get("/api/multitier/getrlportfolios", function (req, res) {
  console.log("/api/getrlportfolios");
  res.status(200).send(getRLPortfolios());
});

//asset allocator

app.post("/api/allocation/getevents", function (req, res) {
  console.log("/api/getevents");
  res.status(200).send(getEvents());
});

app.get("/api/allocation/getpolicies", function (req, res) {
  console.log("/api/getpolicies");
  res.status(200).send(getMasterFunds());
});

app.get("/api/allocation/getportfoliodetails", function (req, res) {
  console.log("/api/getportfoliodetails");
  res.status(200).send(getPortfolioDetails());
});

app.post("/api/allocation/updateportfoliodetails", function (req, res) {
  console.log("/api/updateportfoliodetails");
  res.status(200).send({ id: 1 });
});

app.get("/api/allocation/getevent", function (req, res) {
  console.log("/api/getevent");
  res.status(200).send(getEvent());
});

app.get("/api/allocation/geteventallocationsheader", function (req, res) {
  console.log("/api/geteventallocationsheader");
  res.status(200).send(getEventHeader());
});

app.get("/api/allocation/getpolicy", function (req, res) {
  console.log("/api/getpolicy");
  res.status(200).send(getEventPolicies());
});

app.get("/api/allocation/getmasterfunds", function (req, res) {
  console.log("/api/getmasterfunds");
  res.status(200).send(getMasterPortfolios());
});

app.get("/api/allocation/getsubfundlistbyid", function (req, res) {
  console.log("/api/getsubfundlistbyid");
  res.status(200).send(getEventPolicies());
});

app.get("/api/user/getapprovalaccesslevel", function (req, res) {
  console.log("/api/getapprovalaccesslevel");
  res.status(200).send({ level: 3 });
});

app.post("/api/allocation/updatenotes", function (req, res) {
  console.log("/api/updatenotes");
  res.status(200).send({ id: 2 });
});

app.post("/api/allocation/updatefundnotes", function (req, res) {
  console.log("/api/updatefundnodes");
  res.status(200).send({ id: 2 });
});

app.get("/api/allocation/geteventnotes", function (req, res) {
  console.log("/api/geteventnotes/---------");
  res.status(200).send({
    note: "On 20/08/2020 at 08:41, pas\\kevin wrote:\r\nAsset Allocation event has been created.\r\nOn 20/08/2020 at 08:41, pas\\kevin wrote:\r\nAsset Allocation event has been created.",
  });
});

app.get("/api/allocation/getfundnotes", function (req, res) {
  console.log("/api/getfundnotes/---------");
  res.status(200).send({
    note: "On 20/08/2020 at 08:41, pas\\kevin wrote:\r\nAsset Allocation event has been created.\r\nOn 20/08/2020 at 08:41, pas\\kevin wrote:\r\nAsset Allocation event has been created.",
  });
});

app.post("/api/allocation/addusercompanies", function (req, res) {
  console.log("/api/addusercompanies");
  res.status(200).send({ id: 1 });
});

app.post("/api/allocation/updatepolicyallocation", function (req, res) {
  console.log("/api/updatepolicyallocation");
  res.status(200).send({ id: 1 });
});

app.post("/api/allocation/updateusercompanies/:id", function (req, res) {
  console.log("/api/updateusercompanies");
  res.status(200).send({ id: 1 });
});

app.post(
  "/api/allocation/updatemastersubportfolioallocation",
  function (req, res) {
    console.log("/api/updatemastersubportfolioallocation");
    res.status(200).send({ id: 1 });
  }
);

app.post("/api/allocation/updateeventapproverdetails", function (req, res) {
  console.log("/api/updateeventapproverdetails");
  res.status(200).send({ id: 1 });
});

app.post("/api/allocation/updateeventnotes", function (req, res) {
  console.log("/api/allocation/updateeventnotes");
  res.status(200).send({ id: 1 });
});

app.post("/api/allocation/deleteevent", function (req, res) {
  console.log("/api/allocation/deleteevent");
  res.status(200).send({ id: 1 });
});

app.get("/api/allocation/getcompaniesbyuser", function (req, res) {
  console.log("/api/getCompaniesbyuser");
  res.status(200).send(getCompaniesByUser());
});

app.get("/api/allocation/getcompanies", function (req, res) {
  console.log("/api/getcompanies");
  res.status(200).send(getCompanies());
});

app.get("/api/allocation/getusercompanies", function (req, res) {
  console.log("/api/getusercompanies");
  res.status(200).send(getUserCompanies());
});

app.get("/api/allocation/geteventtypes", function (req, res) {
  console.log("/api/eventTypes");
  res.status(200).send(getEventTypes());
});

app.get("/api/allocation/geteventstatus", function (req, res) {
  console.log("/api/statusCodes");
  res.status(200).send(getEventStatus());
});

app.get("/api/allocation/getfundcodes", function (req, res) {
  console.log("/api/getusercompanies");
  res.status(200).send(getFundCodes());
});

app.get("/api/allocation/getallocationauditlog", function (req, res) {
  console.log("/api/getallocationauditlog");
  res.status(200).send(getEntityHistory());
});

app.get("/api/allocation/getpolicyauditlog", function (req, res) {
  console.log("/api/getallocationauditlog");
  res.status(200).send(getEntityHistory());
});

app.get("/api/metadatas/getmetadata", function (req, res) {
  console.log("/api/getmetadata");
  let context = req.query.context;
  res.status(200).send(getMetadata(context));
});

app.post("/api/metadatas/addmetadata", function (req, res) {
  console.log("/api/addmetadata");
  res.status(200).send({ id: 1 });
});

app.get("/api/metadatas/getmetadatacontext", function (req, res) {
  console.log("/api/getmetadatacontext");
  res.status(200).send(getMetaDataContext());
});

app.post("/api/metadatas/updatemetadata/:id", function (req, res) {
  console.log("/api/getmetadata");
  res.status(200).send({ id: 1 });
});

app.post("/api/metadatas/savemetadata", function (req, res) {
  console.log("/api/savemetadata");
  res.status(200).send({ id: 1 });
});

app.get("/api/metadatas/deletemetadata", function (req, res) {
  console.log("/api/deletemetadata");
  res.status(200).send({ id: 1 });
});

app.get("/api/metadatas/getcountries", function (req, res) {
  console.log("/api/getcountries");
  res.status(200).send(getCountries());
});

app.get("/api/metadatas/getcurrencies", function (req, res) {
  console.log("/api/getcurrencies");
  res.status(200).send(getMetadataCurrencies());
});

app.get("/api/metadatas/getmetadatacontextauditlog", function (req, res) {
  console.log("/api/getmetadatacontextauditlog");
  res.status(200).send(getEntityHistory());
});

/// Reporting Portal
app.get("/api/report/getreports", function (req, res) {
  console.log("/api/getreports");
  res.status(200).send(getTreeview());
});

app.get("/api/report/getparametersbyreportid/:id", function (req, res) {
  console.log("/api/getparametersbyreportid/:id");
  if (req.params.id == "91") {
    res.status(200).send(getReportTwoParameters());
  } else {
    res.status(200).send(getReportOneParameters());
  }
});

app.post("/api/report/downloadreport", function (req, res) {
  console.log("api/downloadreport");
  res.status(200).send({ file: null });
  // res.status(400).send({ message: "error" });
});

app.get("/api/catalog/getitemlist", function (req, res) {
  console.log("api/getitemlist");
  res.status(200).send(getItemList());
});

app.get("/api/catalog/getitemtypes", function (req, res) {
  console.log("api/getitemtypes");
  res.status(200).send(getItemTypes());
});

app.get("/api/catalog/getallparents", function (req, res) {
  console.log("api/getallparents");
  res.status(200).send(getItemParentByName());
});

app.post("/api/catalog/additem", function (req, res) {
  console.log("api/additem");
  res.status(200).send({ message: "Added item successfully" });
});

app.post("/api/catalog/updateitem/:id", function (req, res) {
  console.log("api/updateitem");
  res.status(200).send({ message: "Updated item successfully" });
});

app.post("/api/catalog/deleteitem/:id", function (req, res) {
  console.log("api/deleteitem");
  res.status(200).send({ id: 1 });
});

app.get("/api/catalog/getitembyid/:id", function (req, res) {
  console.log("api/getitembyid");
  res.status(200).send(getItemById());
});

app.get("/api/catalog/getgeneratorlist", function (req, res) {
  console.log("api/getitemtypes");
  res.status(200).send(getGeneratorList());
});

//multi tier
app.post("/api/captureportfolio/getportfolioslist", function (req, res) {
  console.log("api/getportfolioslist");
  res.status(200).send(getPortfoliosList());
});

app.get("/api/captureportfolio/getrnlportfolios", function (req, res) {
  console.log("api/getrnlportfolios");
  res.status(200).send(getRnlPortfolios());
});

app.get("/api/captureportfolio/getrnlportfoliobyid", function (req, res) {
  console.log("api/getrnlportfoliobyid");
  res.status(200).send(getRnlPortfolioById());
});

app.get("/api/captureportfolio/getrnlportfolioeditbyid", function (req, res) {
  console.log("api/getrnlportfolioeditbyid");
  res.status(200).send(getRnlPortfolioById());
});

app.get(
  "/api/captureportfolio/getrnlportfoliotypesbycode",
  function (req, res) {
    console.log("api/getrnlportfoliotypesbycode");
    res.status(200).send(getRnlPortfolioTypes());
  }
);

app.get("/api/captureportfolio/getreplicationtypelist", function (req, res) {
  console.log("api/getreplicationtypelist");
  res.status(200).send(getReplicationTypes());
});

app.post("/api/captureportfolio/addrnlportfolio", function (req, res) {
  console.log("api/addrnlportfolio");
  res.status(200).send({ id: 1 });
});

app.post("/api/captureportfolio/updaternlportfolio/:id", function (req, res) {
  console.log("api/updaternlportfolio");
  res.status(200).send({ id: 1 });
});

app.post("/api/captureportfolio/deleternlportfolio/:id", function (req, res) {
  console.log("api/deleternlportfolio");
  res.status(200).send({ id: 1 });
});

// allocationbuilding block

app.get(
  "/api/buildingblockportfolio/getbuildingblockportfoliobyid/:id",
  function (req, res) {
    console.log("api/getbuildingblockportfoliobyid");
    res.status(200).send(getAllocbbById());
  }
);

app.post(
  "/api/buildingblockportfolio/getbuildingblockportfoliosList",
  function (req, res) {
    console.log("api/getbuildingblockportfoliosList");
    res.status(200).send(getAllocBBList());
  }
);

app.post(
  "/api/buildingblockportfolio/deletebuildingblockportfolio/:id",
  function (req, res) {
    console.log("api/deletebuildingblockportfolio");
    res.status(200).send({ id: 1 });
  }
);

app.post(
  "/api/buildingblockportfolio/addbuildingblockportfolio",
  function (req, res) {
    console.log("api/addbuildingblockportfolio");
    res.status(200).send({ id: 1 });
  }
);

app.post(
  "/api/buildingblockportfolio/updatebuildingblockportfoliobyid/:id",
  function (req, res) {
    console.log("api/updatebuildingblockportfolio");
    res.status(200).send({ id: 1 });
  }
);

//structure
app.post("/api/rnlstructure/getrnlstructurelist", function (req, res) {
  console.log("api/getrnlstructurelist");
  res.status(200).send(getRnlStructureList());
});

app.get("/api/rnlstructure/getrnlstructurebyid/:id", function (req, res) {
  console.log("api/getrnlstructurebyid");
  res.status(200).send(getRnlStructureById());
});

app.post("/api/rnlstructure/deleternlstructure/:id", function (req, res) {
  console.log("api/deleternlstructure");
  res.status(200).send({ id: 1 });
});

app.post("/api/rnlstructure/addrnlstructure", function (req, res) {
  console.log("api/savestructure");
  // res.status(400).send({});
  res.status(200).send({
    responseCode: 1,
    message: "Muilti-tier RnL Structure has been added successfull.",
    dataSet: {
      structureId: 6,
      clientId: 133,
      assetOwnerId: 0,
      clientProductStructureCode: "ABC1",
      approvalids: null,
      userName: "avp",
      displayName: "Avdhoot Patil",
      buildingBlockStructure: [
        {
          productId: 6827,
          allocationBuildingBlock: null,
          portfolioBlock: { id: 6831, percentage: 100, name: null },
        },
      ],
    },
  });
});

app.post("/api/rnlstructure/updaternlstructure/:id", function (req, res) {
  console.log("api/updatestructure");
  res.status(200).send({ id: 1 });
});

app.post("/api/rnlstructure/deleteproduct", function (req, res) {
  console.log("api/deletestructure");
  res.status(200).send({ id: 1 });
});

app.post("/api/rnlstructure/updateassetowner", function (req, res) {
  console.log("api/updateassetowner");
  res.status(200).send({ id: 1 });
});

app.get("/api/rnlstructure/checkclientcode", function (req, res) {
  console.log("api/checkclientcode");
  res.status(200).send({ isDuplicate: false });
});

app.post("/api/rnlstructure/addstructureapprover", function (req, res) {
  console.log("api/addstructureapprover");
  res.status(200).send({ id: 1 });
});

//presets

app.get(
  "/api/captureportfolio/getrnlportfoliosbyclientId",
  function (req, res) {
    console.log("api/getassetownersbyclientid");
    if (req.query.code === "AO") {
      res.status(200).send(getassetOwners());
    } else if (req.query.code === "PB") {
      res.status(200).send(getProducts());
    } else {
      res.status(200).send(getPortfolioBB());
    }
  }
);

app.get(
  "/api/buildingblockportfolio/getbuildingblockportfoliobyclientid",
  function (req, res) {
    console.log("api/getbuildingblockportfoliobyclientid");
    res.status(200).send(getAllocBB());
  }
);

// Strategic asset allocator

app.post("/api/rnl/geteventlist", function (req, res) {
  console.log("/rnl/geteventlist");
  res.status(200).send(getRnlEventLIst());
});

app.post("/api/rnl/deleteevent", function (req, res) {
  console.log("/rnl/deleteevent");
  res.status(200).send({ id: 1 });
});

app.get("/api/rnl/getclients", function (req, res) {
  console.log("/rnl/getclients");
  res.status(200).send(getRnlClients());
});

app.get("/api/rnl/getproductsbyeventid", function (req, res) {
  console.log("/rnl/getproductsbyeventid");
  res.status(200).send(getProductByEventId());
});

app.get("/api/rnl/getproductbyeventid", function (req, res) {
  console.log("/api/rnl/getproductbyeventid");
  res.status(200).send(getSingleProduct());
});

app.get("/api/rnl/geteventstatuslist", function (req, res) {
  console.log("/api/rnl/geteventstatuslist");
  res.status(200).send(getEventStatus());
});

app.post("/api/rnl/updateproductallocationdetails", function (req, res) {
  console.log("/rnl/saveproduct");
  res.status(200).send({ id: 1 });
});

//server port
app.listen(5001, () => {
  console.log("Server started at 5001");
});
