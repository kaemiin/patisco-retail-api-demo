// 登入授權模組 - The LogonModule
const LogonModule = require("local-patiscog4webcore/LogonModule");
// 公司資訊模組 - The CompanyInfoModule
const CompanyInfoAPIModule = require("local-patiscog4webcore/CompanyInfoAPIModule");
// 討論模組 - The  DiscussModule
const DiscussAPIModule = require("local-patiscog4webcore/DiscussAPIModule");
// 零售訂單訊息模組 - The RetailOrdMsgModule
const RetailOrdMsgAPIModule = require("local-patiscog4webcore/RetailOrdMsgAPIModule");
// 訂單列表模組 - The OrdersModule
const OrdersAPIModule = require("local-patiscog4webcore/OrdersAPIModule");
// 訂單模組 - The OrderModule
const OrderAPIModule = require("local-patiscog4webcore/OrderAPIModule");
// 取得使用者資料、設定 User ID 與密碼模組 - The UserInfoModule
const UserInfoAPIModule = require("local-patiscog4webcore/UserInfoAPIModule");
// 購物車模組  - The ShoppingCartModule
const ShoppingCartAPIModule = require("local-patiscog4webcore/ShoppingCartAPIModule");
// 運送地址模組 - The ShippingInfoModule
const ShippingInfoAPIModule = require("local-patiscog4webcore/ShippingInfoAPIModule");
// 零售訂單供應商模組 - The RetailSuppliersModule
const RetailSuppliersAPIModule = require("local-patiscog4webcore/RetailSuppliersAPIModule");
// 取得使用者 logo 模組 - The UserLogoModule
const UserLogoAPIModule = require("local-patiscog4webcore/UserLogoAPIModule");
// 啟動 DEBUG 模式, 取得忘記密碼連結, 取得某供應商某一商品預設圖片, 取得某供應商某一商品某一圖片, 取得供應商 Logo
const {
  PARAM_APP_TYPE, PARAM_COMPANY_TYPE, PARAM_COUNTRY_LIST, PARAM_CURRENCY, PARAM_EXERA_CHARGE_TYPE,
  PARAM_JOINER_COMPANY_TYPE, PARAM_LANGUAGE, PARAM_NUMBER_FORMAT, PARAM_PRODUCT_UNIT,
  PARAM_REFITEM_TYPE, PARAM_RETAIL_ORDER_STATUS, PARAM_SIZE_UNIT,
  PARAM_TIMEZONE, PARAM_TRADING_TERM, PARAM_USER_ROLE_TYPE, PARAM_WEIGHT_UNIT,
  enableDebugMode, generateSystemMessage, getForgetPasswordURL, getParameterValueByKey, getParameterKeyByValue,
  getProductDefaultImage, getProductImage, getSupplierLogo } = require("local-patiscog4webcore");

module.exports = { CompanyInfoAPIModule, DiscussAPIModule, LogonModule, OrderAPIModule, OrdersAPIModule,
  PARAM_APP_TYPE, PARAM_COMPANY_TYPE, PARAM_COUNTRY_LIST, PARAM_CURRENCY, PARAM_EXERA_CHARGE_TYPE,
  PARAM_JOINER_COMPANY_TYPE, PARAM_LANGUAGE, PARAM_NUMBER_FORMAT, PARAM_PRODUCT_UNIT,
  PARAM_REFITEM_TYPE, PARAM_RETAIL_ORDER_STATUS, PARAM_SIZE_UNIT,
  PARAM_TIMEZONE, PARAM_TRADING_TERM, PARAM_USER_ROLE_TYPE, PARAM_WEIGHT_UNIT,
  RetailOrdMsgAPIModule, RetailSuppliersAPIModule, ShippingInfoAPIModule, ShoppingCartAPIModule, UserInfoAPIModule,
  UserLogoAPIModule, enableDebugMode, generateSystemMessage, getForgetPasswordURL, getParameterValueByKey,
  getParameterKeyByValue, getProductDefaultImage, getProductImage, getSupplierLogo };
