let reporter = require('cucumber-html-reporter');

let options = {
        theme: 'bootstrap',
        jsonFile: 'cucumber_report.json',
        output: 'reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: false,
        brandTitle: 'Playwright -Test Automation Report',
        metadata: {
            "App Version":"0.0.1",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);