var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    specs: ['./scripts/Scenarios/TestCase.js'],
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
        //binary: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
        }
    },
    //chromeDriver: 'C:\\Users\\aniranjan\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\webdriver-manager\\selenium\\msedgedriver.exe',
    onPrepare: () => {
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './test/reports'
        }));
    }
};
//# sourceMappingURL=config.js.map