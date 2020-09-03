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
const sunscreen_actions_1 = require("./sunscreen_actions");
const sunscreen_checks_1 = require("./sunscreen_checks");
class sunscreen {
    constructor() {
        this.action = new sunscreen_actions_1.sunscreen_actions();
        this.check = new sunscreen_checks_1.sunscreen_checks();
    }
    verifyInfoTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.action.clickInfo();
            const title = yield this.check.getInfoBoxTitle();
            expect(title).toEqual('Your task', 'Info Icon couldn\'t be clicked');
        });
    }
    /**
     * Function to add items to cart based on condition of cheapest aloe and cheapest almond moisturiser or cheapest spf 30 and spf 50 sunscreen.
     * @returns {Promise<void>}
     */
    getItemsName() {
        return __awaiter(this, void 0, void 0, function* () {
            const listofitems = yield this.check.getlistofproducts();
            console.log(listofitems);
            let prices = [];
            let names = [];
            for (let i = 0; i < listofitems.length; i++) {
                if (i % 2 == 1) {
                    prices.push(listofitems[i].match(/\d/g).join(""));
                }
                else {
                    names.push(listofitems[i]);
                }
            }
            console.log(names);
            console.log(prices);
            const ProductType = yield this.check.getHeading();
            if (ProductType.includes('Moistur')) {
                let aloeprices = [];
                let almondprices = [];
                for (let i = 0; i < names.length; i++) {
                    if (names[i].toLowerCase().includes('aloe')) {
                        aloeprices.push(prices[i]);
                    }
                    if (names[i].toLowerCase().includes('almond')) {
                        almondprices.push(prices[i]);
                    }
                }
                var cheapestalmond = Math.min(...almondprices);
                var cheapestaloe = Math.min(...aloeprices);
                console.log(cheapestalmond, cheapestaloe);
                let indexcheapestalmond = prices.indexOf(cheapestalmond.toString());
                let indexcheapestaloe = prices.indexOf(cheapestaloe.toString());
                console.log(indexcheapestalmond, indexcheapestaloe);
                yield this.action.addProductstoCart(indexcheapestaloe);
                yield this.action.addProductstoCart(indexcheapestalmond);
            }
            else {
                let spf30prices = [];
                let spf50prices = [];
                for (let i = 0; i < names.length; i++) {
                    if (names[i].includes('30')) {
                        spf30prices.push(prices[i]);
                    }
                    if (names[i].includes('50')) {
                        spf50prices.push(prices[i]);
                    }
                }
                var cheapestspf30 = Math.min(...spf30prices);
                var cheapestspf50 = Math.min(...spf50prices);
                console.log(cheapestspf30, cheapestspf50);
                let indexcheapestspf30 = prices.indexOf(cheapestspf30.toString());
                let indexcheapestspf50 = prices.indexOf(cheapestspf50.toString());
                console.log(indexcheapestspf30, indexcheapestspf50);
                yield this.action.addProductstoCart(indexcheapestspf50);
                yield this.action.addProductstoCart(indexcheapestspf30);
            }
        });
    }
    /**
     * Function to verify if both the items are added in the cart.
     * @returns {Promise<void>}
     */
    verifyCartContent() {
        return __awaiter(this, void 0, void 0, function* () {
            const title = yield this.check.getCartCount();
            expect(title).toEqual('2 item(s)', 'Cart Value not Updated');
        });
    }
    goToCart() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.action.clickCart();
        });
    }
}
exports.sunscreen = sunscreen;
//# sourceMappingURL=sunscreen.js.map