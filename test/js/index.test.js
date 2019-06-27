const index = require('../../src/js/index.js');
const LogonModule = index.LogonModule;
const CompanyInfoAPIModule = index.CompanyInfoAPIModule;
const DiscussAPIModule = index.DiscussAPIModule;
const RetailOrdMsgAPIModule = index.RetailOrdMsgAPIModule;
const OrdersAPIModule = index.OrdersAPIModule;
const OrderAPIModule = index.OrderAPIModule;
const UserInfoAPIModule = index.UserInfoAPIModule;
const ShoppingCartAPIModule = index.ShoppingCartAPIModule;
const ShippingInfoAPIModule = index.ShippingInfoAPIModule;
const RetailSuppliersAPIModule = index.RetailSuppliersAPIModule;
const UserLogoAPIModule = index.UserLogoAPIModule;
const SellersAPIModule = index.SellersAPIModule;
const enableDebugMode = index.enableDebugMode;
const getForgetPasswordURL = index.getForgetPasswordURL;
const getProductDefaultImage = index.getProductDefaultImage;
const getProductImage = index.getProductImage;
const getSupplierLogo = index.getSupplierLogo;

const language = index.PARAM_LANGUAGE.zhTW;
const app = index.PARAM_APP_TYPE.THIRD_PARTY;
const token = 'ACCESS TOKEN';

beforeEach(() => {
  enableDebugMode(true);
});
  
afterEach(() => {
});

test('can get parameter - app', async () => {
  const app = index.PARAM_APP_TYPE.THIRD_PARTY;
  console.log(app);
  expect(app).not.toBeNull();
});

test('can get parameter - language', async () => {
  // Support - 'de', 'en-US', 'ja', 'zh-CN', 'zh-TW'
  const language = JSON.stringify(index.PARAM_LANGUAGE, null, 4);
  console.log(language);
  console.log(index.PARAM_LANGUAGE.enUS);
  expect(language).not.toBeNull();
});

test('can get parameter - number format pattern', async () => {
  // NumberFormat 回傳值: 0 - US (ex: 1,234,567.33) "#,##0.00" & 1 - Germany (ex: 1.234.567,33) "##.000,00"
  const patterns = JSON.stringify(index.PARAM_NUMBER_FORMAT, null, 4);
  console.log(patterns);
  expect(patterns).not.toBeNull();
});

test('can get system message by code', async () => {
  const msg = index.generateSystemMessage("SYS_MSG_ORD_0006|2|TWD|2180000.0");
  console.log(msg);
  expect(msg != "").toBeTruthy();
});

test('can get parameter by key', async () => {
  const type = index.getParameterValueByKey(index.PARAM_EXERA_CHARGE_TYPE, 0);
  console.log(type);
  expect(type != "").toBeTruthy();
});

test('can get parameter by value', async () => {
  const status = index.getParameterKeyByValue(index.PARAM_RETAIL_ORDER_STATUS, 99);
  console.log(status);
  expect(status != "").toBeTruthy();
});

// test('can login', async () => {
//   const loginID = 'LONIN ID';
//   const password = 'PASSWORD';
//   let logon = LogonModule.Instance;
//   logon.setLanguage(language);
//   logon.setAppName(app);
//   return logon.auth(loginID, password).then((token) => {
//     console.log(token);
//     expect(token).not.toBeNull();
//   }).catch((reason) => {
//     expect(reason).toBeNull();
//   });
// });

// test('can validate token and return a new token', async () => {
//   let logon = LogonModule.Instance;
//   logon.setLanguage(language);
//   logon.setAppName(app);
//   return logon.validate(token).then((newToken) => {
//     console.log(newToken);
//     expect(newToken).not.toBeNull();
//   }).catch((reason) => {
//     expect(reason).toBeNull();
//   });
// });

// test('can get company info', async () => {
//   let cmpnyInfoAPI = new CompanyInfoAPIModule();
//   cmpnyInfoAPI.setLanguage(language);
//   cmpnyInfoAPI.setAppName(app);
//   cmpnyInfoAPI.setToken(token);
//   return cmpnyInfoAPI.get().then((value) => {
//     console.log(value);
//     expect(value).not.toBeNull();
//   }).catch((reason) => {
//     expect(reason).toBeNull();
//   });
// });

// test('can set company info', async () => {
//   let cmpnyInfoAPI = new CompanyInfoAPIModule();
//   cmpnyInfoAPI.setLanguage(language);
//   cmpnyInfoAPI.setAppName(app);
//   cmpnyInfoAPI.setToken(token);
//   const data = {CmpnyEnglishName: 'VIP1',
//                 EMailAddress: 'test@xinosys.com',
//                 NumberFormat: 1,
//                 TimeZone: 28,
//   };
//   return cmpnyInfoAPI.set(data).then((value) => {
//     expect(value).not.toBeNull();
//   }).catch((reason) => {
//     expect(reason).toBeNull();
//   });
// });

// test('can get all discusses\' unread counts', async () => {
//   let discussAPI = new DiscussAPIModule();
//   discussAPI.setLanguage(language);
//   discussAPI.setAppName(app);
//   discussAPI.setToken(token);
//   return discussAPI.getUnReadCnt().then((value) => {
//     console.log(value);
//     expect(value).not.toBeNull();
//   }).catch((reason) => {
//     expect(reason).toBeNull();
//   });
// });

// test('can get a retail order\'s messages', async () => {
//   let retailOrdMsgAPI = new RetailOrdMsgAPIModule();
//   retailOrdMsgAPI.setLanguage(language);
//   retailOrdMsgAPI.setAppName(app);
//   retailOrdMsgAPI.setToken(token);
//   const id = '20180131123126', first = 0, offset = 20;
//   return retailOrdMsgAPI.get(id, first, offset).then((value) => {
//     console.log(value);
//     expect(value).not.toBeNull();
//   }).catch((reason) => {
//     expect(reason).toBeNull();
//   });
// });

// test('can get all retail orders\' UNREAD counts', async () => {
//     let retailOrdMsgAPI = new RetailOrdMsgAPIModule();
//     retailOrdMsgAPI.setLanguage(language);
//     retailOrdMsgAPI.setAppName(app);
//     retailOrdMsgAPI.setToken(token);
//     return retailOrdMsgAPI.getAllUnReadCnt().then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

  // test('can get a retail order\'s UNREAD count', async () => {
  //   let retailOrdMsgAPI = new RetailOrdMsgAPIModule();
  //   retailOrdMsgAPI.setLanguage(language);
  //   retailOrdMsgAPI.setAppName(app);
  //   retailOrdMsgAPI.setToken(token);
  //   const id = '20180131123126';
  //   return retailOrdMsgAPI.getUnReadCnt(id).then((value) => {
  //     console.log(value);
  //     expect(value).not.toBeNull();
  //   }).catch((reason) => {
  //     expect(reason).toBeNull();
  //   });
  // });

// test('can send a retail order message', async () => {
//   let retailOrdMsgAPI = new RetailOrdMsgAPIModule();
//   retailOrdMsgAPI.setLanguage(language);
//   retailOrdMsgAPI.setAppName(app);
//   retailOrdMsgAPI.setToken(token);
//   const id = '20180131123126', msg = '如果沒有，想看看別的(this is a test)';
//   return retailOrdMsgAPI.sendMessage(id, msg).then((value) => {
//     console.log(value);
//     expect(value).not.toBeNull();
//   }).catch((reason) => {
//     expect(reason).toBeNull();
//   });
// });

// test('can mark a retail order message as read', async () => {
//   let retailOrdMsgAPI = new RetailOrdMsgAPIModule();
//   retailOrdMsgAPI.setLanguage(language);
//   retailOrdMsgAPI.setAppName(app);
//   retailOrdMsgAPI.setToken(token);
//   const id = '20180131123126', msgID = '20180529121111';
//   return retailOrdMsgAPI.markMsgAsRead(id, msgID).then((value) => {
//     console.log(value);
//     expect(value).not.toBeNull();
//   }).catch((reason) => {
//     expect(reason).toBeNull();
//   });
// });

// test('can get all orders', async () => {
//   let orderAPI = new OrdersAPIModule();
//   orderAPI.setLanguage(language);
//   orderAPI.setAppName(app);
//   orderAPI.setToken(token);
//   const first = 0, offset = 20,
//     sort = "CreatedDate", dir = "desc", status = 3;
//   return orderAPI.getAll(first, offset, sort, dir, status).then((value) => {
//     console.log(value);
//     expect(value).not.toBeNull();
//   }).catch((reason) => {
//     expect(reason).toBeNull();
//   });
// });

// test('can get all orders that have unread messages', async () => {
//   let orderAPI = new OrdersAPIModule();
//   orderAPI.setLanguage(language);
//   orderAPI.setAppName(app);
//   orderAPI.setToken(token);
//   const first = 0, offset = 20,
//     sort = "CreatedDate", dir = "desc";
//   return orderAPI.getAllByUnRead(first, offset, sort, dir).then((value) => {
//     console.log(value);
//     expect(value).not.toBeNull();
//   }).catch((reason) => {
//     expect(reason).toBeNull();
//   });
// });

// test('can get all orders counts', async () => {
//   let orderAPI = new OrdersAPIModule();
//   orderAPI.setLanguage(language);
//   orderAPI.setAppName(app);
//   orderAPI.setToken(token);
//   return orderAPI.getCounts().then((value) => {
//     console.log(value);
//     expect(value).not.toBeNull();
//   }).catch((reason) => {
//     expect(reason).toBeNull();
//   });
// });

// test('can get a order', async () => {
//     let orderAPI = new OrderAPIModule();
//     orderAPI.setLanguage(language);
//     orderAPI.setAppName(app);
//     orderAPI.setToken(token);
//     const id = '20180131123126';
//     return orderAPI.getInfo(id).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get a order items', async () => {
//     let orderAPI = new OrderAPIModule();
//     orderAPI.setLanguage(language);
//     orderAPI.setAppName(app);
//     orderAPI.setToken(token);
//     const id = '20180131123126', first = 0, offset = 20;
//     return orderAPI.getItems(id, first, offset).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get a order\'s extra charges', async () => {
//   let orderAPI = new OrderAPIModule();
//   orderAPI.setLanguage(language);
//   orderAPI.setAppName(app);
//   orderAPI.setToken(token);
//   const id = '20180131123126';
//   return orderAPI.getExtraCharges(id).then((value) => {
//     console.log(value);
//     expect(value).not.toBeNull();
//   }).catch((reason) => {
//     expect(reason).toBeNull();
//   });
// });

// test('can get user\'s Profile', async () => {
//     let userAPI = new UserInfoAPIModule();
//     userAPI.setLanguage(language);
//     userAPI.setAppName(app);
//     userAPI.setToken(token);
//     return userAPI.getProfile().then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can reset password', async () => {
//   let userAPI = new UserInfoAPIModule();
//   userAPI.setLanguage(language);
//   userAPI.setAppName(app);
//   userAPI.setToken(token);
//   const data = {PWD:'', NewPWD:''};
//   return userAPI.setPassword(data).then((value) => {
//     console.log(value);
//     expect(value).not.toBeNull();
//   }).catch((reason) => {
//     expect(reason).toBeNull();
//   });
// });

// test('can reset login ID', async () => {
//   let userAPI = new UserInfoAPIModule();
//   userAPI.setLanguage(language);
//   userAPI.setAppName(app);
//   userAPI.setToken(token);
//   const data = {OldUserID:'', NewUserID:''};
//   return userAPI.setUserID(data).then((value) => {
//     console.log(value);
//     expect(value).not.toBeNull();
//   }).catch((reason) => {
//     expect(reason).toBeNull();
//   });
// });

// test('can get shoppingcart items count', async () => {
//     let shoppingCartAPI = new ShoppingCartAPIModule();
//     shoppingCartAPI.setLanguage(language);
//     shoppingCartAPI.setAppName(app);
//     shoppingCartAPI.setToken(token);
//     const CmpnyID_S = '54';
//     return shoppingCartAPI.getCnt(CmpnyID_S).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get shoppingcart amount', async () => {
//     let shoppingCartAPI = new ShoppingCartAPIModule();
//     shoppingCartAPI.setLanguage(language);
//     shoppingCartAPI.setAppName(app);
//     shoppingCartAPI.setToken(token);
//     const CmpnyID_S = '54';
//     return shoppingCartAPI.getAmount(CmpnyID_S).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get shipping info', async () => {
//     let shippingInfoCartAPI = new ShippingInfoAPIModule();
//     shippingInfoCartAPI.setLanguage(language);
//     shippingInfoCartAPI.setAppName(app);
//     shippingInfoCartAPI.setToken(token);
//     const first = 0, offset = 10;
//     return shippingInfoCartAPI.get(first, offset).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can add shipping info', async () => {
//     let shippingInfoCartAPI = new ShippingInfoAPIModule();
//     shippingInfoCartAPI.setLanguage(language);
//     shippingInfoCartAPI.setAppName(app);
//     shippingInfoCartAPI.setToken(token);
//     const data = {TemplateName: 'Test Office', ShipTo: 'Test',
//                 Receiver: 'Teser', TEL: '+886-2-23969522', FAX: '+886-2-23942744',
//                 EMailAddress: 'Test@xinosys.com', Address: 'Test Address'};
//     return shippingInfoCartAPI.add(data).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can edit shipping info', async () => {
//     let shippingInfoCartAPI = new ShippingInfoAPIModule();
//     shippingInfoCartAPI.setLanguage(language);
//     shippingInfoCartAPI.setAppName(app);
//     shippingInfoCartAPI.setToken(token);
//     const id = '20190624122931';
//     const data = {TemplateName: 'Test Office2', ShipTo: 'Test2',
//                 Receiver: 'Teser2', TEL: '+886-2-23969522', FAX: '+886-2-23942744',
//                 EMailAddress: 'Test2@xinosys.com', Address: 'Test Address2'};
//     return shippingInfoCartAPI.edit(id, data).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can delete shipping info', async () => {
//     let shippingInfoCartAPI = new ShippingInfoAPIModule();
//     shippingInfoCartAPI.setLanguage(language);
//     shippingInfoCartAPI.setAppName(app);
//     shippingInfoCartAPI.setToken(token);
//     const id = '20190624122931';
//     return shippingInfoCartAPI.delete(id).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can add a shoppingcart item', async () => {
//     let shoppingCartAPI = new ShoppingCartAPIModule();
//     shoppingCartAPI.setLanguage(language);
//     shoppingCartAPI.setAppName(app);
//     shoppingCartAPI.setToken(token);
//     const CmpnyID_S = '54';
//     const PrdtID_S = '20170110121822';
//     const Quantity = 10;
//     return shoppingCartAPI.addItem(CmpnyID_S, PrdtID_S, Quantity).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can edit a item\'s quantity', async () => {
//     let shoppingCartAPI = new ShoppingCartAPIModule();
//     shoppingCartAPI.setLanguage(language);
//     shoppingCartAPI.setAppName(app);
//     shoppingCartAPI.setToken(token);
//     const CmpnyID_S = '54';
//     const PrdtID_S = '20170110121822';
//     const Quantity = 5;
//     return shoppingCartAPI.editItem(CmpnyID_S, PrdtID_S, Quantity).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get shoppingcart items', async () => {
//     let shoppingCartAPI = new ShoppingCartAPIModule();
//     shoppingCartAPI.setLanguage(language);
//     shoppingCartAPI.setAppName(app);
//     shoppingCartAPI.setToken(token);
//     const CmpnyID_S = '54';
//     const first = 0, offset = 20;
//     return shoppingCartAPI.getItems(CmpnyID_S, first, offset).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can delete a shoppingcart item', async () => {
//     let shoppingCartAPI = new ShoppingCartAPIModule();
//     shoppingCartAPI.setLanguage(language);
//     shoppingCartAPI.setAppName(app);
//     shoppingCartAPI.setToken(token);
//     const CmpnyID_S = '54';
//     const PrdtID_S = '20170110145717';
//     return shoppingCartAPI.deleteItem(CmpnyID_S, PrdtID_S).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can checkout', async () => {
//     let shoppingCartAPI = new ShoppingCartAPIModule();
//     shoppingCartAPI.setLanguage(language);
//     shoppingCartAPI.setAppName(app);
//     shoppingCartAPI.setToken(token);
//     const CmpnyID_S = '54';
//     const ShippingInfoID = '20180103113735';
//     return shoppingCartAPI.checkOut(CmpnyID_S, ShippingInfoID).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get all suppliers', async () => {
//     let suppliersAPI = new RetailSuppliersAPIModule();
//     suppliersAPI.setLanguage(language);
//     suppliersAPI.setAppName(app);
//     suppliersAPI.setToken(token);
//     return suppliersAPI.getSuppliers().then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get root browser tags', async () => {
//     let suppliersAPI = new RetailSuppliersAPIModule();
//     suppliersAPI.setLanguage(language);
//     suppliersAPI.setAppName(app);
//     suppliersAPI.setToken(token);
//     const supplierID = '54';
//     return suppliersAPI.getRootTags(supplierID).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get sub browser tags', async () => {
//     let suppliersAPI = new RetailSuppliersAPIModule();
//     suppliersAPI.setLanguage(language);
//     suppliersAPI.setAppName(app);
//     suppliersAPI.setToken(token);
//     const supplierID = '54';
//     const tagID = '20170109184634';
//     return suppliersAPI.getSubTags(supplierID, tagID).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get pivot browser tags', async () => {
//     let suppliersAPI = new RetailSuppliersAPIModule();
//     suppliersAPI.setLanguage(language);
//     suppliersAPI.setAppName(app);
//     suppliersAPI.setToken(token);
//     const supplierID = '54';
//     const tagID = '20170110122518';
//     const filters = '';
//     return suppliersAPI.getPivotTags(supplierID, tagID, filters).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get a browser tags', async () => {
//     let suppliersAPI = new RetailSuppliersAPIModule();
//     suppliersAPI.setLanguage(language);
//     suppliersAPI.setAppName(app);
//     suppliersAPI.setToken(token);
//     const supplierID = '54';
//     const tagID = '20170110122518';
//     return suppliersAPI.getTag(supplierID, tagID).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can check has any promotion', async () => {
//   let suppliersAPI = new RetailSuppliersAPIModule();
//   suppliersAPI.setLanguage(language);
//   suppliersAPI.setAppName(app);
//   suppliersAPI.setToken(token);
//   const supplierID = '54';
//   return suppliersAPI.getPrdtsCountByPromotion(supplierID).then((value) => {
//     console.log(value);
//     expect(value > 0).toBeTruthy();
//   }).catch((reason) => {
//     // TODO
//     console.log(reason);
//     // expect(reason).toBeNull();
//   });
// });

// test('can add product to favorites', async () => {
//   let suppliersAPI = new RetailSuppliersAPIModule();
//   suppliersAPI.setLanguage(language);
//   suppliersAPI.setAppName(app);
//   suppliersAPI.setToken(token);
//   const supplierID = 54;
//   const productID = '20180131123126';
//   return suppliersAPI.addPrdt2Favorites(supplierID, productID).then((value) => {
//       expect(value).not.toBeNull();
//   }).catch((reason) => {
//       expect(reason).toBeNull();
//   });
// });

// test('can delete product from favorites', async () => {
//   let suppliersAPI = new RetailSuppliersAPIModule();
//   suppliersAPI.setLanguage(language);
//   suppliersAPI.setAppName(app);
//   suppliersAPI.setToken(token);
//   const supplierID = 54;
//   const productID = '20180131123126';
//   return suppliersAPI.deletePrdtFromFavorites(supplierID, productID).then((value) => {
//       expect(value).not.toBeNull();
//   }).catch((reason) => {
//       expect(reason).toBeNull();
//   });
// });

// test('can get products belong a browser tags', async () => {
//     let suppliersAPI = new RetailSuppliersAPIModule();
//     suppliersAPI.setLanguage(language);
//     suppliersAPI.setAppName(app);
//     suppliersAPI.setToken(token);
//     const supplierID = '54';
//     const tagID = '20170110122518';
//     const filters = '';
//     const first = 0, offset = 20;
//     return suppliersAPI.getPrdtsByTag(supplierID, tagID, filters, first, offset).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get product detail', async () => {
//     let suppliersAPI = new RetailSuppliersAPIModule();
//     suppliersAPI.setLanguage(language);
//     suppliersAPI.setAppName(app);
//     suppliersAPI.setToken(token);
//     const supplierID = '54';
//     const prdtID = '20170110124233';
//     return suppliersAPI.getPrdtDetail(supplierID, prdtID).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get products by keyword', async () => {
//   let suppliersAPI = new RetailSuppliersAPIModule();
//   suppliersAPI.setLanguage(language);
//   suppliersAPI.setAppName(app);
//   suppliersAPI.setToken(token);
//   const supplierID = '54';
//   const keyword = '天然鑽石';
//   const first = 0, offset = 20;
//   return suppliersAPI.getPrdtsByKeyword(supplierID, keyword, first, offset).then((value) => {
//     console.log(value);
//     expect(value).not.toBeNull();
//   }).catch((reason) => {
//     expect(reason).toBeNull();
//   });
// });

// test('can get a supplier', async () => {
//     let suppliersAPI = new RetailSuppliersAPIModule();
//     suppliersAPI.setLanguage(language);
//     suppliersAPI.setAppName(app);
//     suppliersAPI.setToken(token);
//     const supplierID = '54';
//     return suppliersAPI.getSupplier(supplierID).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get all shoppingcart items', async () => {
//     let shoppingCartAPI = new ShoppingCartAPIModule();
//     shoppingCartAPI.setLanguage(language);
//     shoppingCartAPI.setAppName(app);
//     shoppingCartAPI.setToken(token);
//     const supplierID = '54';
//     return shoppingCartAPI.getAllItems(supplierID).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get products belong myfavorite', async () => {
//     let suppliersAPI = new RetailSuppliersAPIModule();
//     suppliersAPI.setLanguage(language);
//     suppliersAPI.setAppName(app);
//     suppliersAPI.setToken(token);
//     const supplierID = '54';
//     const first = 0;
//     const offset = 20;
//     return suppliersAPI.getPrdtsByFavorite(supplierID, first, offset).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get products belong promotion', async () => {
//     let suppliersAPI = new RetailSuppliersAPIModule();
//     suppliersAPI.setLanguage(language);
//     suppliersAPI.setAppName(app);
//     suppliersAPI.setToken(token);
//     const supplierID = '54';
//     const first = 0;
//     const offset = 20;
//     return suppliersAPI.getPrdtsByPromotion(supplierID, first, offset).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get products belong a root browser tags', async () => {
//     let suppliersAPI = new RetailSuppliersAPIModule();
//     suppliersAPI.setLanguage(language);
//     suppliersAPI.setAppName(app);
//     suppliersAPI.setToken(token);
//     const supplierID = '54';
//     const tagID = '20170109184634';
//     const first = 0;
//     const offset = 20;
//     return suppliersAPI.getPrdtsByRootTag(supplierID, tagID, first, offset).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get user\'s Logo', async () => {
//     let userLogoAPI = new UserLogoAPIModule();
//     userLogoAPI.setLanguage(language);
//     userLogoAPI.setAppName(app);
//     userLogoAPI.setToken(token);
//     const data = '20120131194204|859|1';
//     return userLogoAPI.getUserLogo(data).then((value) => {
//       console.log(value);
//       expect(value).not.toBeNull();
//     }).catch((reason) => {
//       expect(reason).toBeNull();
//     });
//   });

// test('can get forget password URL', async () => {
//   const url = getForgetPasswordURL(app, language);
//   console.log(url);
//   expect(url).not.toBeNull();
// });

// test('can get a product\'s default image', async () => {
//   const supplierID = '54';
//   const productID = '20170110124233';
//   const url = getProductDefaultImage(supplierID, productID, token);
//   console.log(url);
//   expect(url).not.toBeNull();
// });

// test('can get a product\'s image', async () => {
//   const supplierID = '54';
//   const productID = '20170110124233';
//   const attachID = '1';
//   const url = getProductImage(supplierID, productID, attachID, token);
//   console.log(url);
//   expect(url).not.toBeNull();
// });

// test('can get a supplier\'s logo', async () => {
//   const supplierID = '54';
//   const url = getSupplierLogo(supplierID, token);
//   console.log(url);
//   expect(url).not.toBeNull();
// });
