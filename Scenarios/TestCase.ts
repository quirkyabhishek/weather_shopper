import {browser} from "protractor";
import {homepage} from "../PageFactory/homepage/homepage";
import {sunscreen} from "../PageFactory/sunscreen/sunscreen";
import {cart} from "../PageFactory/cart/cart";
import {conf} from "../PageFactory/conf/conf";

describe("Buy Cosmetic", async () => {
    browser.manage().window().maximize();
    it("Open Application", async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get("http://weathershopper.pythonanywhere.com/");
        const clicker = new homepage();
        await clicker.verifyHeading();
    })
    it("Verify the Temperature and select product type", async () => {
        const clicker = new homepage();
        await clicker.selectCorrectType();
    })
    it("Get the list of Items", async () => {
        const clicker = new sunscreen();
        await clicker.verifyInfoTitle();
        await clicker.getItemsName();
    })
    it("Verify and Click on Cart", async () => {
        const clicker = new sunscreen();
        await clicker.verifyCartContent();
        await clicker.goToCart();
    })
    it("Verify Cart", async () => {
        const verify = new cart();
        await verify.getListofAmounts();
    })
    it("Enter Email", async () => {
        const enter = new cart();
        await enter.clickPay();
        await enter.selectPaymentFrame();
        await enter.enterEmailId();
    })
    it("Enter Payment Details", async () => {
        const enter = new cart();
        await enter.clickContinueManual();
        await enter.enterCreditCard();
        await enter.enterExpiryDate();
        await enter.enterCVVCode();
        await enter.enterZIPCode();
        await enter.clickPayFinal();
    })
    it("Verify Confirmation", async () => {
        const verify = new conf();
        await verify.verifyCONFMessage();
    })
})