"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const homepage_1 = require("../PageFactory/homepage/homepage");
const sunscreen_1 = require("../PageFactory/sunscreen/sunscreen");
const cart_1 = require("../PageFactory/cart/cart");
const conf_1 = require("../PageFactory/conf/conf");
describe("Buy Cosmetic", () => __awaiter(this, void 0, void 0, function* () {
    protractor_1.browser.manage().window().maximize();
    it("Open Application", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("http://weathershopper.pythonanywhere.com/");
        const clicker = new homepage_1.homepage();
        yield clicker.verifyHeading();
    }));
    it("Verify the Temperature and select product type", () => __awaiter(this, void 0, void 0, function* () {
        const clicker = new homepage_1.homepage();
        yield clicker.selectCorrectType();
    }));
    it("Get the list of Items", () => __awaiter(this, void 0, void 0, function* () {
        const clicker = new sunscreen_1.sunscreen();
        yield clicker.verifyInfoTitle();
        yield clicker.getItemsName();
    }));
    it("Verify and Click on Cart", () => __awaiter(this, void 0, void 0, function* () {
        const clicker = new sunscreen_1.sunscreen();
        yield clicker.verifyCartContent();
        yield clicker.goToCart();
    }));
    it("Verify Cart", () => __awaiter(this, void 0, void 0, function* () {
        const verify = new cart_1.cart();
        yield verify.getListofAmounts();
    }));
    it("Enter Email", () => __awaiter(this, void 0, void 0, function* () {
        const enter = new cart_1.cart();
        yield enter.clickPay();
        yield enter.selectPaymentFrame();
        yield enter.enterEmailId();
    }));
    it("Enter Payment Details", () => __awaiter(this, void 0, void 0, function* () {
        const enter = new cart_1.cart();
        yield enter.clickContinueManual();
        yield enter.enterCreditCard();
        yield enter.enterExpiryDate();
        yield enter.enterCVVCode();
        yield enter.enterZIPCode();
        yield enter.clickPayFinal();
    }));
    it("Verify Confirmation", () => __awaiter(this, void 0, void 0, function* () {
        const verify = new conf_1.conf();
        yield verify.verifyCONFMessage();
    }));
}));
//# sourceMappingURL=TestCase.js.map