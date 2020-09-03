import {homepage_actions} from "./homepage_actions";
import {homepage_checks} from "./homepage_checks";
import {wait_util} from "../../waitUtil";
import locators = require('./homepage_locators');

export class homepage{
    action;
    check;
    constructor(){
        this.action = new homepage_actions();
        this.check = new homepage_checks();
    }
    async selectMoisturiser(){
        await this.action.clickMoisturiser();
    }
    async selectSunscreen(){
        await this.action.clickSunscreen();
    }
    /**
     * Funtion to get Temperature and select product based on Temperature (Moisturiser if Temp<19 and Sunscreen if Temp>34).
     * @returns {Promise<void>}
     */
    public async selectCorrectType(){
        const Temperature = await this.check.getTemperature();
        const numberTemp = <number> Temperature.split(" ", 1)
        if (numberTemp>34){
            await this.waitForSunscreenButtonToDisplay(3000)
            await this.selectSunscreen();
            console.log('clicked sunscreen')
        }
        if (numberTemp<19){
            await this.waitForMoisturiserButtonToDisplay(3000);
            await this.selectMoisturiser();
            console.log('clicked moisturiser')
        }
    }
    public async waitForSunscreenButtonToDisplay(timeout: number): Promise<boolean> {
        return await wait_util.waitForElementVisible(locators.LOC_SunscreenButton, timeout);
    }
    public async waitForMoisturiserButtonToDisplay(timeout: number): Promise<boolean> {
        return await wait_util.waitForElementVisible(locators.LOC_MoisturiserButton, timeout);
    }

    /**
     * Funtion to verify the page Heading of Homepage.
     * @returns {Promise<void>}
     */
    public async verifyHeading(){
        const heading = await this.check.getHeading();
        expect(heading).toEqual("Current temperature", "Heading not Displayed");
    }



}