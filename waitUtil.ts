import {browser, element, Locator, protractor} from "protractor";

export namespace wait_util {
    export async function waitForElementVisible(eltLocator: Locator, timeout: number): Promise<boolean> {
        try {
            const until = await protractor.ExpectedConditions;
            const isVisible = await browser.wait(until.visibilityOf(element(eltLocator)), timeout,
                "Element locator " + eltLocator + " still not visible after " + timeout + " milli seconds");
            return Boolean(isVisible);
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}