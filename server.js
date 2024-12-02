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
const getCalculationGroups = require("./data/getCalculationGroups");
const getCalculationErrors = require("./data/getCalculationErrors");
const getInterestsCalculated = require("./data/getInterestsCalculated");
const getCalculationRequests = require("./data/getCalculationRequests");
const getConfigureDailyCalculations = require("./data/getConfigureDailyCalculations");
const getPresetRates = require("./data/getPresetRates");
const getCaptureProduct = require("./data/getCaptureProduct");
const getClients = require("./data/getClients");
const getMetadataCustodians = require("./data/getMetadataCustodians");
const getMetadataDps = require("./data/getMetadataDps");
const getDailyCalculationById = require("./data/getDailyCalculationById");
const getPresetRateById = require("./data/getPresetRateById");
const getPresetRateList = require("./data/getPresetRateList");
const getDirections = require("./data/getDirections");
const getCompanyClients = require("./data/getCompanyClients");
const getTierById = require("./data/getTierById");
const calcGroupAuditHistory = require("./data/calcGroupAuditHistory");
const getMetadataTypes = require("./data/getMetadataTypes");
const getMetadataList = require("./data/getMetadataList");
const getStpClients = require("./data/getStpClients");
const getStpFunds = require("./data/getStpFunds");
const getAssetGroupTypes = require("./data/getAssetGroupTypes");
const validationProfiles = require("./data/validationProfiles");
const getCanonicalFields = require("./data/getCanonicalFields");
const getValidationRules = require("./data/getValidationRules");
const getValidationProfileById = require("./data/getValidationProfileById");
const getCanonicalTypes = require("./data/getCanonicalTypes");
const getTransactionSubCOdes = require("./data/getTransactionSubCOdes");
const getCfiCOdes = require("./data/getCfiCOdes");
const getCanonicalList = require("./data/getCanonicalList");
const getCanonicalById = require("./data/getCanonicalById");
const getMatchingRules = require("./data/getMatchingRules");
const getMatchingProfileById = require("./data/getMatchingProfileById");
const matchingProfiles = require("./data/matchingProfiles");
const getFilters = require("./data/getFilters");
const matched = require("./data/matched");
const unmatched = require("./data/unmatched");
const warning = require("./data/warning");
const getAssetGroups = require("./data/getAssetGroups");
const getMatchingFields = require("./data/getMatchingFields");
const getManuallyMatchedCanonical = require("./data/getManuallyMatchedCanonical");
const getOrganisations = require("./data/getOrganisations");
const getAssociations = require("./data/getAssociations");
const getProductById = require("./data/getProductById");
const getBasePolicyList = require("./data/getBasePolicyList");
const getProductList = require("./data/getProductList");
const getTopUpProductById = require("./data/getTopUpProductById");
const getUser = require("./data/getUser");
const getUserList = require("./data/getUserList");
const getCountriesKMD = require("./data/getCountriesKMD");
const getStates = require("./data/getStates");
const getAllCampaigns = require("./data/getAllCampaigns");
const getSingleCampaign = require("./data/getSingleCampaign");
const getAssociationList = require("./data/getAssociationList");
const getPermissions = require("./data/getPermissions");
const getKMDroles = require("./data/getKMDroles");
const getPermissionView = require("./data/getPermissionView");
const getMessageTemplates = require("./data/getMessageTemplates");
const getCustomerProductList = require("./data/getCustomerProductList");
const getPaymentHistory = require("./data/getPaymentHistory");
const getMyPolicies = require("./data/getMyPolicies");
const getAssociation = require("./data/getAssociation");
const user = require("./data/user");
const getkmdPermissions = require("./data/getkmdPermissions");
const getOfflinePayments = require("./data/getOfflinePayments");
const getOfflinePaymentById = require("./data/getOfflinePaymentById");
const getPaymentById = require("./data/getPaymentById");
const getOfflinePaymentsDashboard = require("./data/getOfflinePaymentsDashboard");
const getOrganisationsKMD = require("./data/getOrganisationsKMD");
const getOrganisation = require("./data/getOrganisation");
const getRefundRequests = require("./data/getRefundRequests");
const getRefundRequestById = require("./data/getRefundRequestById");
const getAssociationWisePayment = require("./data/getAssociationWisePayment");
const getPaymentStatus = require("./data/getPaymentStatus");
const getPaymentModesDashboard = require("./data/getPaymentModesDashboard");
const getOfflinePaymentDashboard = require("./data/getOfflinePaymentDashboard");
const getAllUsers = require("./data/getAllUsers");
const getTaxbuddiUserById = require("./data/getTaxbuddiUserById");
const getAllTaxbuddiRoles = require("./data/getAllTaxbuddiRoles");
const getTaxbuddiRoleById = require("./data/getTaxbuddiRoleById");
const getAllCustomerProfiles = require("./data/getAllCustomerProfiles");
const getCustomerProfileById = require("./data/getCustomerProfileById");

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

app.post("/api/legalentity/getlegalentities", function (req, res) {
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

app.get("/api/legalentity/getclientstatustypes", function (req, res) {
  console.log("/api/getclientstatuses");
  res.status(200).send([
    {
      id: 1,
      name: "Country",
    },
    {
      id: 2,
      name: "Natural person",
    },
  ]);
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

app.post("/api/servicegroup/getservicegrouplist", function (req, res) {
  console.log("/api/getservicegrouplist");
  res.status(200).send(getServiceGroupList());
});

app.post("/api/service/getservices", function (req, res) {
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

app.post("/api/contract/getcontracts", function (req, res) {
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
  res.status(200).send({ id: 1, dataSet: 6 });
});

app.post("/api/approvalprocess/updateapproverdetails", function (req, res) {
  console.log("/api/updateapproverdetails");
  res.status(204).send({ message: "no content" });
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
  res.status(200).send({ isApprover: false, action: "Add" });
  // res.status(200).send(false);
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
  res.status(200).send({ level: 2 });
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
  console.log("/api/getpolicyauditlog");
  res.status(200).send(getEntityHistory());
});

app.get("/api/metadatas/getmetadata", function (req, res) {
  console.log("/api/getmetadata");
  let context = req.query.context;
  res.status(200).send(getMetadata(context));
});

app.get("/api/metadatas/getcustodians", function (req, res) {
  console.log("/api/getcustodians");
  let context = req.query.context;
  res.status(200).send(getMetadataCustodians());
});

app.get("/api/metadatas/getdefaultplacesofsettlement", function (req, res) {
  console.log("/api/getdefaultplacesofsettlement");
  let context = req.query.context;
  res.status(200).send(getMetadataDps());
});

app.post("/api/metadatas/addmetadata", function (req, res) {
  console.log("/api/addmetadata");
  res.status(200).send({ id: 1 });
});

app.get("/api/metadatas/getcustodians", function (req, res) {
  console.log("/api/getcustodians");
  res.status(200).send(getCustodiansForMetadata());
});

app.get("/api/metadatas/getdefaultplaceofsettlement", function (req, res) {
  console.log("/api/getcustodians");
  res.status(200).send(getDefaultPlaceOfSettlement());
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

app.post("/api/metadatas/deletemetadata/:id", function (req, res) {
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

app.get("/api/metadatas/deletecustodian", function (req, res) {
  console.log("/api/deletecustodian");
  res.status(200).send({ id: 1 });
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

app.get("/api/report/getreportcalculationerrorsexcel", function (req, res) {
  console.log("/api/getreportcalculationerrorsexcel");
  res.status(204).send();
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
  if (req.query.code === "AO") {
    res.status(200).send(getRnlPortfolioById());
  } else {
    res.status(200).send(getCaptureProduct());
  }
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
  // res.status(200).send({ id: 1 });
  res.status(400).send({
    responseCode: 2,
    message: "Cannot delete already approved portfolio",
    dataSet: null,
  });
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
    // res.status(200).send({ id: 1 });
    res.status(400).send({
      responseCode: 2,
      message: "Cannot delete already approved portfolio",
      dataSet: null,
    });
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
  // res.status(200).send({ id: 1 });
  res.status(400).send({
    responseCode: 2,
    message: "Cannot delete already approved portfolio",
    dataSet: null,
  });
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
  res.status(200).send(getSingleProduct(1));
});

app.get("/api/rnl/geteventstatuslist", function (req, res) {
  console.log("/api/rnl/geteventstatuslist");
  res.status(200).send(getEventStatus());
});

app.post("/api/rnl/updateproductallocationdetails", function (req, res) {
  console.log("/rnl/saveproduct");
  res.status(200).send({ id: 1 });
});

app.post("/api/rnl/checkproduct", function (req, res) {
  console.log("/rnl/checkproduct");
  res.status(200).send({ id: 1 });
});

app.post("/api/rnl/updatenotes", function (req, res) {
  console.log("/api/updatenotes");
  res.status(200).send({ id: 2 });
});

// app.post("/api/allocation/updatefundnotes", function (req, res) {
//   console.log("/api/updatefundnodes");
//   res.status(200).send({ id: 2 });
// });

app.get("/api/rnl/geteventnotes", function (req, res) {
  console.log("/api/geteventnotes/---------");
  res.status(200).send({
    note: "On 20/08/2020 at 08:41, pas\\kevin wrote:\r\nAsset Allocation event has been created.\r\nOn 20/08/2020 at 08:41, pas\\kevin wrote:\r\nAsset Allocation event has been created.",
  });
});

app.get("/api/rnl/getallocationauditlog", function (req, res) {
  console.log("/api/getallocationauditlog");
  res.status(200).send(getEntityHistory());
});

//Interest Accrual
app.post("/api/calculationgroup/getcalculationgroups", function (req, res) {
  console.log("/api/calculationgroups/getcalculationgroups");
  res.status(200).send(getCalculationGroups());
});

app.post(
  "/api/calculationgroup/getcalculationgroupaudithistory",
  function (req, res) {
    console.log("/api/calculationgroups/getcalculationgroupaudithistory");
    res.status(200).send(calcGroupAuditHistory());
  }
);

app.post("/api/config/getdailycalculationsaudithistory", function (req, res) {
  console.log("/api/getdailycalculationsaudithistory");
  res.status(200).send(calcGroupAuditHistory());
});

app.post("/api/presetrate/getpresetratesaudithistory", function (req, res) {
  console.log("/api/getpresetratesaudithistory");
  res.status(200).send(calcGroupAuditHistory());
});

app.get("/api/reports/getcalculationerrors", function (req, res) {
  console.log("/api/reports/getcalculationerrors");
  res.status(200).send(getCalculationErrors());
});

app.get("/api/reports/getinterestscalculated", function (req, res) {
  console.log("/api/reports/getinterestscalculated");
  res.status(200).send(getInterestsCalculated());
});

app.post(
  "/api/calculationgroup/deletecalculationgroup/:id",
  function (req, res) {
    console.log("/api/calculationgroups/delete");
    res.status(200).send({ id: 1 });
  }
);
app.get("/api/calculationgroup/getpresetrates", function (req, res) {
  console.log("/api/calculations/getpresetrates");
  res.status(200).send(getPresetRateList());
});

app.get("/api/presetrate/getpresetratebyid", function (req, res) {
  console.log("/api/calculations/getpresetratebyid");
  res.status(200).send({
    index: 0,
    presetRateID: 95,
    tempId: 0,
    presetRateName: "Namibia Prime Rate",
    currentRate: 11.5,
    userName: null,
    checkerIds: null,
    approverIds: "1234, 3456",
    displayName: null,
    maker: null,
    approvalStatus: "Awaiting Approval",
  });
});

app.get("/api/calculationgroup/getdirections", function (req, res) {
  console.log("/api/calculations/getdirections");
  res.status(200).send(getDirections());
});

app.post(
  "/api/calculationrequests/getcalculationrequests",
  function (req, res) {
    console.log("/api/calculations/getcalculationrequests");
    res.status(200).send(getCalculationRequests());
  }
);

app.post("/api/config/getdailycalculations", function (req, res) {
  console.log("/api/calculations/getconfiguredailycalculations");
  res.status(200).send(getConfigureDailyCalculations());
});

app.get("/api/config/getdailycalculationbyid", function (req, res) {
  console.log("/api/getdailycalculationbyid");
  res.status(200).send({
    index: 0,
    configID: 354,
    tempId: 1027,
    reportingGroupCode: 2345,
    portfolioCode: null,
    processTime: "12:45",
    status: "ENABLED",
    userName: null,
    approverIds: "5529",
    displayName: null,
    maker: "Sharad Patil",
    approvalStatus: "Awaiting Approval",
  });
});

app.post("/api/presetrate/addpresetrate", function (req, res) {
  console.log("/api/presetrate/addpresetrate");
  res.status(400).send({ message: "not saved" });
});

app.post("/api/config/adddailycalculation", function (req, res) {
  console.log("/api/calculations/");
  res.status(200).send({ id: 1 });
});

app.post("/api/presetrate/getpresetrates", function (req, res) {
  console.log("/api/calculations/getpresetrates");
  res.status(200).send(getPresetRates());
});

app.get("/api/config/getdailycalculationbyid/:id", function (req, res) {
  console.log("/api/calculations/getdailycalculationbyid");
  res.status(200).send({
    configID: 407,
    reportingGroupCode: null,
    portfolioCode: 1234,
    processTime: "02:34",
    status: "DISABLED",
    userName: null,
    checkerIds: "",
    approverIds: "6496",
    displayName: null,
    dailyCalculationApprovalStatus: "Approved",
    maker: "Avdhoot Patil",
    approvalStatus: null,
  });
});

app.post("/api/config/deletedailycalculation", function (req, res) {
  console.log("/api/deleteapplicationpage");
  res.status(200).send({ message: "daily calculation deleted successfully" });
});

app.post("/api/presetrate/deletepresetrate", function (req, res) {
  console.log("/api/deletepresetrate");
  res.status(200).send({ message: "Preset rate deleted successfully" });
});

//rnl strcuture audit logs
app.get(
  "/api/buildingblockportfolio/getallocationbuildingblockportfolioauditlog",
  function (req, res) {
    console.log("/api/getallocationbuildingblockportfolioauditlog");
    res.status(200).send(getEntityHistory());
  }
);

app.get("/api/captureportfolio/getrnlportfolioauditlog", function (req, res) {
  console.log("/api/getrnlportfolioauditlog");
  res.status(200).send(getEntityHistory());
});

app.get("/api/rnlstructure/getrnlstructureauditlog", function (req, res) {
  console.log("/api/getrnlstructureauditlog");
  res.status(200).send(getEntityHistory());
});

app.get("/api/rnl/getproductnotes", function (req, res) {
  console.log("/api/getproductnotes/---------");
  res.status(200).send({
    note: "On 20/08/2020 at 08:41, pas\\kevin wrote:\r\nAsset Allocation event has been created.\r\nOn 20/08/2020 at 08:41, pas\\kevin wrote:\r\nAsset Allocation event has been created.",
  });
});

app.post("/api/rnl/updateproductnotes", function (req, res) {
  console.log("/api/rnl/updateproductnotes");
  res.status(200).send({ id: 1 });
});

// rnl client mapping
app.get("/api/rnl/getcompanyclients", function (req, res) {
  console.log("/api/getclients");
  res.status(200).send(getClients());
});

app.post("/api/rnl/updatecompanyclient", function (req, res) {
  console.log("/api/updateclient");
  res.status(200).send({ id: 2 });
});

app.post("/api/calculationrequests/addcalculationrequest", function (req, res) {
  console.log("/api/addcalculationrequest");
  res.status(200).send({ id: 1 });
});

app.get("/api/calculationrequests/getcalculationrequests", function (req, res) {
  console.log("/api/getcalculationrequests");
  res.status(200).send(getCalculationRequests());
});

app.get("/api/client/getcompanyclients", function (req, res) {
  console.log("/api/getcompanyclients");
  res.status(200).send(getCompanyClients());
});

//tiered endpoints
app.post(
  "/api/calculationgroup/addtieredcalculationgroup",
  function (req, res) {
    console.log("/api/addtieredcalculationgroup");
    res.status(200).send({
      responseCode: 1,
      message: "Calculation Group has been saved successfully.",
      dataSet: 3310,
    });
  }
);

app.post(
  "/api/calculationgroup/updatetieredcalculationgroup",
  function (req, res) {
    console.log("/api/addtieredcalculationgroup");
    res.status(200).send({ dataSet: 1020 });
  }
);

app.post("/api/calculationgroup/deletetier", function (req, res) {
  console.log("/api/deletetier");
  res.status(200).send({ approvalStatus: "Awaiting Approval" });
});

app.post("/api/calculationgroup/deletecalculationgroup", function (req, res) {
  console.log("/api/deletecalculationgroup");
  res.status(200).send({ approvalStatus: "Awaiting Approval" });
});

app.get(
  "/api/calculationgroup/gettieredcalculationgroupbyid",
  function (req, res) {
    console.log("/api/calculations/gettieredcalculationgroupbyid");
    res.status(200).send(getTierById());
  }
);

app.get(
  "/api/calculationgroup/getstaticcalculationgroupbyid",
  function (req, res) {
    console.log("/api/calculations/getstaticcalculationgroupbyid");
    res.status(200).send({
      calculationGroupId: 0,
      tempId: 142,
      calculationGroupName: "Testting",
      calculationGroupType: "STATIC",
      insertedBy: "shp",
      explicitRate: 0,
      explicitRateDebit: null,
      presetRateName: null,
      presetRateDifference: null,
      presetRateNameDebit: "Preset Rate 1",
      presetRateDifferenceDebit: 34,
      checkerIds: null,
      approverIds: "5529, 23",
      displayName: null,
      approvalStatus: "Awaiting Approval",
      maker: "Sharad Patil",
      approvedBy: null,
    });
  }
);

app.post(
  "/api/calculationgroup/addstaticcalculationgroup",
  function (req, res) {
    console.log("/api/addstaticcalculationgroup");
    res.status(400).send("already exists");
  }
);

app.post("/api/config/updatedailycalculation/:id", function (req, res) {
  console.log("/api/updatedailycalculation");
  res.status(200).send({ id: 1 });
});

app.post("/api/calculationrequests/addcalculationrequest", function (req, res) {
  console.log("/api/addcalculationrequest");
  res.status(200).send({ id: 1 });
});

//STP
app.get("/api/metadata/getmetadatacontext", function (req, res) {
  console.log("/api/getmetadatacontext");
  res.status(200).send(getMetadataTypes());
});

app.post("/api/metadata/getmetadatalist", function (req, res) {
  console.log("/api/getmetadatalist");
  res.status(200).send(getMetadataList());
  // res.send(400).send({ message: "failed" });
});

app.post("/api/metadata/updatemetadata", function (req, res) {
  console.log("/api/updatemetadata");
  res.status(200).send({ id: 1 });
});

app.post("/api/metadata/addmetadata", function (req, res) {
  console.log("/api/addmetadata");
  res.status(200).send({ id: 1 });
});

app.post("/api/metadata/deletemetadata", function (req, res) {
  console.log("/api/deletemetadata");
  res.status(200).send({ id: 1 });
});

//set rules validation
app.get("/api/userdefaults/getclients", function (req, res) {
  console.log("/api/getclients");
  res.status(200).send(getStpClients());
});

app.get("/api/userdefaults/getfundsbyagci", function (req, res) {
  console.log("/api/getclients");
  res.status(200).send(getStpFunds());
});

app.get("/api/userdefaults/getassetgroups", function (req, res) {
  console.log("/api/getfunds");
  res.status(200).send(getAssetGroupTypes());
});

app.post("/api/validationrule/getvalidationprofiles", function (req, res) {
  console.log("/api/getvalidationprofiles");
  res.status(200).send(validationProfiles());
});

app.get("/api/validationrule/getvalidationprofilebyid", function (req, res) {
  console.log("/api/getvalidationprofilebyid");
  res.status(200).send(getValidationProfileById());
});

app.get("/api/validationrule/getvalidationrules", function (req, res) {
  console.log("/api/getvalidationrules");
  res.status(200).send(getValidationRules());
});

app.get("/api/matchingprofile/getmatchingrules", function (req, res) {
  console.log("/api/getmatchingrules");
  res.status(200).send(getMatchingRules());
});

app.post("/api/validationrule/addvalidationprofile", function (req, res) {
  console.log("/api/addvalidationprofile");
  res.status(200).send({ id: 1 });
});

app.post("/api/validationrule/updatevalidationprofile", function (req, res) {
  console.log("/api/updatevalidationprofile");
  res.status(200).send({ id: 1 });
});

app.get("/api/validationrule/getcanonicalfields", function (req, res) {
  console.log("/api/getcanonicalfields");
  res.status(200).send(getCanonicalFields());
});

app.get("/api/validationrule/getcanonicaltypes", function (req, res) {
  console.log("/api/getcanonicaltypes");
  res.status(200).send(getCanonicalTypes());
});

app.post("/api/matchingprofile/getmatchingprofiles", function (req, res) {
  console.log("/api/getmatchingprofiles");
  res.status(200).send(matchingProfiles());
});

app.get("/api/matchingprofile/getmatchingprofilebyid", function (req, res) {
  console.log("/api/getvalidationprofilebyid");
  res.status(200).send(getMatchingProfileById());
});

app.post(
  "/api/validationrule/deletevalidationprofile/:id",
  function (req, res) {
    console.log("/api/deletevalidationprofile");
    res.status(200).send({ id: 1 });
  }
);

app.get("/api/metadata/getalltransactionsubcodes", function (req, res) {
  console.log("/api/getalltransactionsubcode");
  res.status(200).send(getTransactionSubCOdes());
});

app.get("/api/metadata/getallcficodes", function (req, res) {
  console.log("/api/getallcficodes");
  res.status(200).send(getCfiCOdes());
});

app.post("/api/canonical/getcanonicallist", function (req, res) {
  console.log("/api/getcanonicallist");
  res.status(200).send(getCanonicalList());
});

app.get("/api/canonical/getcanonicalbyid", function (req, res) {
  console.log("/api/canonical/getcanonicalbyid");
  let { filterId } = req.query;

  if (filterId == 2) {
    res.status(200).send(matched());
  } else if (filterId == 3) {
    res.status(200).send(unmatched());
  } else {
    res.status(200).send(warning());
  }
});

app.get("/api/canonical/getassetgroups", function (req, res) {
  console.log("/api/getassetgroups");
  res.status(200).send(getAssetGroups());
});

app.post("/api/matchingprofile/addmatchingprofile", function (req, res) {
  console.log("/api/addvalidationprofile");
  res.status(200).send({ id: 1 });
});

app.post("/api/matchingprofile/updatematchingprofile", function (req, res) {
  console.log("/api/updatevalidationprofile");
  res.status(200).send({ id: 1 });
});

app.post("/api/matchingprofile/deletematchingprofile/:id", function (req, res) {
  console.log("/api/deletematcingprofile");
  res.status(200).send({ id: 1 });
});

app.get("/api/canonical/getfilters", function (req, res) {
  console.log("/api/getfilters");
  res.status(200).send(getFilters());
});

app.get("/api/canonical/getmatchingfields", function (req, res) {
  console.log("/api/getmatchingfields");
  res.status(200).send(getMatchingFields());
});

app.post("/api/canonical/manuallymatchtrade", function (req, res) {
  console.log("/api/manuallymatchtrade");
  res.status(201).send({ message: "0" });
});

app.get("/api/canonical/getmanuallymatchedcanonicalbyid", function (req, res) {
  console.log("/api/getmanuallymatchedcanonicalbyid");
  res.status(200).send(getManuallyMatchedCanonical());
});

app.get("/api/authenticate/login", function (req, res) {
  console.log("/api/login");
  res.status(200).send({ message: "logged in successfully" });
});

app.post("/api/authenticate/login", function (req, res) {
  console.log("/api/login");
  res.status(201).send({ message: "Proceed" });
  // res.status(401).send({ message: "Key missing" });
});

app.post("/api/authenticate/verifyotp", function (req, res) {
  console.log("/api/verifyotp");
  res.status(200).send(user());
  // res.status(401).send({ message: "Invalid or expired otp" });
  // res.status(404).send({ message: "User not found" });
});

// reconciliation
app.get("/api/user/getorganisations", function (req, res) {
  console.log("/api/getorganisations");
  res.status(200).send(getOrganisations());
});

app.get("/api/user/getassociations/:id", function (req, res) {
  console.log("/api/getassociations");
  res.status(200).send(getAssociations());
});

app.post("/api/user/register", function (req, res) {
  console.log("/api/register");
  res.status(201).send({ message: "User created successfully" });
});

app.post("/api/captcha/verifycaptcha", function (req, res) {
  console.log("/api/verifycaptcha");
  res.status(201).send({ isVerified: true });
});

app.get("/api/product/getbasepolicylist", function (req, res) {
  console.log("/api/product/getbasepolicylist");
  res.status(201).send(getBasePolicyList());
});

app.get("/api/product/getpolicytypes", function (req, res) {
  console.log("/api/product/getPolicyTypes");
  res.status(201).send([
    { id: 1, name: "BasePolicy" },
    { id: 2, name: "Topuppolicy" },
  ]);
});

app.get("/api/product", function (req, res) {
  console.log("/api/product/getproductlist");
  res.status(201).send(getProductList());
});

app.get("/api/product/:id", function (req, res) {
  console.log("/api/product/:id");

  if (req.params.id == "1") {
    res.status(200).send(getProductById());
  } else {
    res.status(200).send(getTopUpProductById());
  }
});

app.delete("/api/product/:id", function (req, res) {
  console.log("/api/product/:id");
  res.status(201).send({ message: "Product deleted" });
});

app.post("/api/product", function (req, res) {
  console.log("/api/product");
  res.status(201).send({ id: 3 });
  // res.status(409).send({ message: "Product already exists" });
});

app.patch("/api/product/:id", function (req, res) {
  console.log("/api/product");
  res.status(201).send({ message: "Product updated" });
});

//offlinepayments
app.get("/api/customerprofile/getofflinepayments", function (req, res) {
  console.log("/api/customerprofile/getofflinepayments");
  res.status(200).send(getOfflinePayments());
});

app.get("/api/customerprofile/offlinepayment/:id", function (req, res) {
  console.log("/api/customerprofile/getofflinepayment/:id");
  res.status(200).send(getOfflinePaymentById());
});

app.post("/api/customerprofile/offlinepayment", function (req, res) {
  console.log("/api/customerprofile/offlinepayment");
  res.status(201).send({ messgae: "Payment saved successfully!" });
});

//payments
app.get("/api/customerprofile/getpaymentmodes", function (req, res) {
  console.log("/api/customerprofile/getpaymentmodes");
  res.status(200).send([
    { id: 1, name: "Online" },
    { id: 2, name: "Offline" },
  ]);
});

app.get("/api/customerprofile/getpaymentbyid/:id", function (req, res) {
  console.log("/api/customerprofile/getpaymentbyid/:id");
  res.status(200).send(getPaymentById());
});

app.get("/api/customerprofile/getofflinepaymentmodes", function (req, res) {
  console.log("/api/customerprofile/getofflinepaymentmodes");
  res.status(200).send([
    { id: 1, name: "Cheque" },
    { id: 2, name: "NEFT" },
    { id: 3, name: "UPI" },
  ]);
});

app.get("/api/customerprofile/getpaymenthistory", function (req, res) {
  console.log("/api/customerprofile/getpaymenthistory");
  res.status(200).send(getPaymentHistory());
});

app.get("/api/customerprofile/getmypolicies", function (req, res) {
  console.log("/api/customerprofile/getmypolicies");
  res.status(200).send(getMyPolicies());
});

app.get("/api/customerprofile/getpermissions", function (req, res) {
  console.log("/api/customerprofile/getpermissions");
  res.status(200).send(getkmdPermissions());
  // res.status(500).send({ message: "unable to send permissions" });
});

app.get("/api/customerprofile/getproductlist", function (req, res) {
  console.log("/api/customerprofile/getproductlist");
  res.status(200).send(getCustomerProductList());
});

app.get("/api/customerprofile/getuser", function (req, res) {
  console.log("/api/customerprofile/getuser");
  res.status(200).send(getUser());
});

app.post("/api/customerprofile/addproductpolicy", function (req, res) {
  console.log("/api/customerprofile");
  res.status(201).send({ policyId: 3, beneficiaryId: 4 });
});

app.post("/api/customerprofile/createuser", function (req, res) {
  console.log("/api/customerprofile");
  res.status(201).send({ id: 3 });
});

app.patch("/api/customerprofile/updateuser/:id", function (req, res) {
  console.log("/api/customerprofile/updateuser/:id");
  res.status(201).send({ message: "user updated" });
  // res.status(401).send({ message: "user updated" });
});

app.get("/api/customerprofile/getorganisations", function (req, res) {
  console.log("/api/customerprofile/getorganisations");
  res.status(200).send([
    { id: 1, name: "Org 1" },
    { id: 2, name: "Org 2" },
  ]);
});

app.get("/api/customerprofile/getassociations", function (req, res) {
  console.log("/api/customerprofile/getassociations");
  res.status(200).send(getAssociations());
});

app.get("/api/customerprofile/getgenders", function (req, res) {
  console.log("/api/customerprofile/getgenders");
  res.status(200).send([
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
  ]);
});

app.get("/api/customerprofile/getstates", function (req, res) {
  console.log("/api/customerprofile/getstates");
  res.status(200).send([
    { id: 1, name: "Maharashtra" },
    { id: 2, name: "Karnataka" },
  ]);
});

app.get("/api/customerprofile/getusertypes", function (req, res) {
  console.log("/api/customerprofile/getusertypes");
  res.status(200).send([
    { id: 1, name: "Retiree" },
    { id: 2, name: "Internal user" },
  ]);
});

app.get("/api/customerprofile", function (req, res) {
  console.log("/api/customerprofile/getuserlist");
  res.status(200).send(getUserList());
});

//refund requests
app.get("/api/customerprofile/getrefundrequests", function (req, res) {
  console.log("/api/customerprofile/getrefundrequests");
  res.status(200).send(getRefundRequests());
});

app.get("/api/customerprofile/getrefundrequest", function (req, res) {
  console.log("/api/customerprofile/getrefundrequest/:id");
  res.status(200).send(getRefundRequestById());
});

app.post("/api/customerprofile/refundrequest", function (req, res) {
  console.log("/api/customerprofile/refundrequest");
  res.status(200).send({ message: "Refund request created successfully" });
});

app.get("/api/roles/getroles/:id", function (req, res) {
  console.log("/api/roles/getroles");
  res.status(200).send([
    { id: 1, name: "Admin" },
    { id: 2, name: "Internam user" },
    { id: 3, name: "Agent" },
  ]);
});

app.get("/api/customerprofile/getpaymentstatus", function (req, res) {
  console.log("/api/customerprofile/getpaymentstatus");
  res.status(200).send(getPaymentStatus());
});
app.get("/api/user/getcountries", function (req, res) {
  console.log("/api/getCountries");
  res.status(200).send(getCountriesKMD());
});

app.get("/api/user/getstates", function (req, res) {
  console.log("/api/getstates");
  res.status(201).send(getStates());
});

//campaigns

app.get("/api/campaigns", function (req, res) {
  console.log("/api/campaigns");
  res.status(200).send(getAllCampaigns());
});

app.get("/api/campaigns/:id", function (req, res) {
  console.log("/api/campaigns");
  res.status(200).send(getSingleCampaign());
});

app.delete("/api/campaigns/:id", function (req, res) {
  console.log("/api/campaigns");
  res.status(201).send({ message: "deleted sucessfully" });
});

app.post("/api/campaigns", function (req, res) {
  console.log("/api/campaigns");
  res.status(201).send({ message: "Campaign created" });
});

app.patch("/api/campaigns/:id", function (req, res) {
  console.log("/api/campaigns");
  res.status(201).send({ message: "Campaign updated" });
});

app.patch("/api/campaigns/closecampaign/:id", function (req, res) {
  console.log("/api/closecampaign");
  res.status(201).send({ message: "Campaign updated" });
});

//association

app.get("/api/association/getmessagetemplates", function (req, res) {
  console.log("/api/getmessagetemplates");
  res.status(200).send(getMessageTemplates());
});

app.get("/api/association", function (req, res) {
  console.log("/api/association");
  res.status(200).send(getAssociationList());
});

app.get("/api/association", function (req, res) {
  console.log("/api/association");
  res.status(200).send(getAssociationList());
});
app.post("/api/association/createassociation", function (req, res) {
  console.log("/api/association");
  res.status(200).send({ message: "Association created successfully" });
});

app.patch("/api/association/updateassociation/:id", function (req, res) {
  console.log("/api/association");
  res.status(200).send({ message: "Association updated successfully" });
});

app.get("/api/association/:id", function (req, res) {
  console.log("/api/association");
  res.status(200).send(getAssociation());
  // res.status(500).send({ message: " unable " });
});

app.get("/api/permissions/", function (req, res) {
  console.log("/api/getPermissions");
  res.status(200).send(getPermissions());
});

app.get("/api/roles/", function (req, res) {
  console.log("/api/getPermissions");
  res.status(200).send(getKMDroles());
});

app.post("/api/permissions", function (req, res) {
  console.log("/api/permissions");
  res.status(200).send({ id: 1 });
});

app.get("/api/roles/getpermissionview", function (req, res) {
  console.log("/api/roles/getpermissionview");
  res.status(200).send(getPermissionView());
});

app.delete("/api/permissions/:id", function (req, res) {
  console.log("/api/permissions");
  res.status(200).send({ message: "Permission deleted" });
});

app.delete("/api/roles/:id", function (req, res) {
  console.log("/api/roles");
  res.status(200).send({ message: "Role deleted" });
});

app.get("api/roles/:id", function (req, res) {
  console.log("/api/roles");
  res.status(200).send({ message: "Role retrieved" });
});

app.post("/api/roles", function (req, res) {
  console.log("/api/roles");
  res.status(200).send({ message: "Role created" });
});

//kmd dashboard
app.get("/api/dashboard/getofflinepayments", function (req, res) {
  console.log("/api/dashboard/getofflinepayments");
  res.status(200).send(getOfflinePaymentDashboard(req, res));
});

app.get("/api/dashboard/getpaymentmodes", function (req, res) {
  console.log("/api/dashboard/getpaymentmodes");
  res.status(200).send(getPaymentModesDashboard());
});

app.get("/api/dashboard/getassociationwisepayment", function (req, res) {
  console.log("/api/dashboard/getassociationwisepayment");
  res.status(200).send(getAssociationWisePayment());
});

//organisations
app.get("/api/organisation/getorganisations", function (req, res) {
  console.log("/api/organisations");
  res.status(200).send(getOrganisationsKMD());
});

app.get("/api/organisation/:id", function (req, res) {
  console.log("/api/organisations");
  res.status(200).send(getOrganisation());
});

app.post("/api/organisation", function (req, res) {
  console.log("/api/organisations");
  res.status(200).send({ message: "Organisation created successfully" });
});

app.patch("/api/organisation/:id", function (req, res) {
  console.log("/api/organisations");
  res.status(200).send({ message: "Organisation updated successfully" });
});

app.delete("/api/organisation/:id", function (req, res) {
  console.log("/api/organisations");
  res.status(200).send({ message: "Organisation deleted successfully" });
});

//tax buddi

//auth endpoints
app.post("/api/webauthentication/createwebuserpassword", function (req, res) {
  console.log("/api/createwebuserpassword");
  res.status(200).send({
    message: ["Password created successfully."],
  });

  // res.status(400).send({
  //   message: "Invalid model state",
  //   errors: {
  //     Email: ["The email field is required"],
  //   },
  //   statusCode: 400,
  // });

  // res.status(400).send({
  //   id: 0,
  //   statusCode: 110,
  //   message: "Provided Email address not registered.",
  // });
});

app.post("/api/webauthentication/webuserlogin", function (req, res) {
  console.log("/api/login");
  res.status(200).send({
    userId: 1,
    userName: "Avdhoot",
    accessToken: "abc123",
    refreshToken: "xyz123",
    roleName: "Admin",
  });

  // res.status(401).send({
  //   message: ["Either email or password is incorrect."],
  // });
});

app.post("/api/webauthentication/forgotpassword", function (req, res) {
  console.log("/api/forgetpassword");
  res.status(200).send({
    message: ["Email exists"],
  });

  // res.status(404).send({
  //   message: ["Email does not exists"],
  // });
});

app.post("/api/webauthentication/resetpassword", function (req, res) {
  console.log("/api/resetpassword");
  res.status(200).send({
    message: ["Password reset successfully."],
  });
});

app.post("/api/webauthentication/getwebaccesstoken", function (req, res) {
  console.log("/api/refreshtoken");
  res.status(200).send({
    userId: 8,
    refreshToken: "d717253f-821d-4f4a-a0b5-c9e80eb8aba6",
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI4IiwibmJmIjoxNzMyNzc5MjQ4LCJleHAiOjE3MzI3NzkzNjgsImlhdCI6MTczMjc3OTI0OH0.qhbWAAgWS6lC9Lim0G6egvK8m1bPIUHVlx4J8AqQL1s",
    statusCode: 200,
    message: "Success",
    currentRegistrationStep: null,
  });
  // res.status(401).send({ message: "You are unauthorized" });
});

//users endpoint
app.get("/api/webuser/getwebusers", function (req, res) {
  console.log("/api/getallusers");
  res.status(200).send(getAllUsers());
  // res.status(401).send({ message: "You are unauthorized" });
});

app.get("/api/webuser/getwebuserbyid", function (req, res) {
  console.log("/api/getuser");
  res.status(200).send(getTaxbuddiUserById());
});

app.post("/api/users/createuser", function (req, res) {
  console.log("/api/saveuser");
  res.status(200).send({ message: "Usere created successfully" });
});

app.put("/api/users/updateuser/:id", function (req, res) {
  console.log("/api/organisations");
  res.status(200).send({ message: "User updated successfully" });
});

app.delete("/api/users/deleteuser/:id", function (req, res) {
  console.log("/api/organisations");
  res.status(200).send({ message: "User deleted succefully" });
});

app.put("/api/users/updatestatus/:id", function (req, res) {
  console.log("/api/updateuserstatus");
  res.status(200).send({ message: " Status has been updated successfully" });
});

app.put("/api/users/generatelink/:id", function (req, res) {
  console.log("/api/generatelink");
  res.status(200).send({ message: " Status has been updated successfully" });
});

app.get("/api/webuser/getgenders", function (req, res) {
  console.log("/api/getgenders");
  res.status(200).send([
    {
      genderId: 1,
      genderName: "Male",
    },
    {
      genderId: 2,
      genderName: "Female",
    },
  ]);
});

app.get("/api/webuser/getroles", function (req, res) {
  console.log("/api/getroles");
  res.status(200).send([
    {
      roleId: 1,
      roleName: "Admin",
    },
    {
      roleId: 2,
      roleName: "Accountant",
    },
  ]);
});

//roles endpoint
app.get("/api/roles/getallroles", function (req, res) {
  console.log("/api/getallroles");
  res.status(200).send(getAllTaxbuddiRoles());
  // res.status(500).send({
  //   messgae: ["Unable to get roles"],
  // });
});

app.get("/api/roles/getrole/:id", function (req, res) {
  console.log("/api/getrole");
  res.status(200).send(getTaxbuddiRoleById());
});

app.post("/api/roles/saverole", function (req, res) {
  console.log("/api/saverole");
  res.status(200).send({ message: "Role saved successfully" });
});

app.put("/api/roles/updaterole/:id", function (req, res) {
  console.log("/api/updaterole");
  res.status(200).send({ message: "Role updated successfully" });
});

app.delete("/api/roles/deleterole/:id", function (req, res) {
  console.log("/api/deleterole");
  res.status(200).send({ message: "Role deleted succefully" });
});

//customer profile
app.get("/api/customerprofile/getallprofiles", function (req, res) {
  console.log("/api/getallprofiles/ :id");
  res.status(200).send(getAllCustomerProfiles());
});

app.get("/api/customerprofile/getprofile/:id", function (req, res) {
  console.log("/api/getprofile/:id");
  res.status(200).send(getCustomerProfileById());
});

app.put("/api/customerprofile/updateaccountant/:id", function (req, res) {
  console.log("/api/updateprofile/:id");
  res.status(200).send({ messgae: "Profile updated successfully." });
});

app.put("/api/customerprofile/updateprofile/:id", function (req, res) {
  console.log("/api/updateprofile/:id");
  // res.status(200).send(getAllTaxbuddiRoles());
});

//upload document
// approve/reject document
// doenload document

//server port
app.listen(5002, () => {
  console.log("Server started at 5002");
});
