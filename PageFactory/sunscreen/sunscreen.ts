import {sunscreen_actions} from "./sunscreen_actions";
import {sunscreen_checks} from "./sunscreen_checks";

export class sunscreen{
    action;
    check;

    constructor(){
        this.action = new sunscreen_actions();
        this.check = new sunscreen_checks();
    }

    public async verifyInfoTitle(){
        await this.action.clickInfo();
        const title = await this.check.getInfoBoxTitle();
        expect(title).toEqual('Your task', 'Info Icon couldn\'t be clicked');
    }

    /**
     * Function to add items to cart based on condition of cheapest aloe and cheapest almond moisturiser or cheapest spf 30 and spf 50 sunscreen.
     * @returns {Promise<void>}
     */
    public async getItemsName() {
        const listofitems: string[] = await this.check.getlistofproducts();
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
        const ProductType = await this.check.getHeading();
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
            await this.action.addProductstoCart(indexcheapestaloe);
            await this.action.addProductstoCart(indexcheapestalmond);
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
            await this.action.addProductstoCart(indexcheapestspf50);
            await this.action.addProductstoCart(indexcheapestspf30);
        }
    }

    /**
     * Function to verify if both the items are added in the cart.
     * @returns {Promise<void>}
     */
    public async verifyCartContent(){
        const title = await this.check.getCartCount();
        expect(title).toEqual('2 item(s)', 'Cart Value not Updated');
    }
    public async goToCart() {
        await this.action.clickCart();
    }


}