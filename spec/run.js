import Jasmine from 'jasmine'

var jasmine = new Jasmine()


let TestsReporter = require('jasmine2-reporter').Jasmine2Reporter,
    options = {
        suiteDuration: true,
        failuresSummary: false,
        summary:false,
        // indent: '\t'
    };



jasmine.loadConfigFile('spec/support/jasmine.json')
jasmine.clearReporters();
jasmine.addReporter(new TestsReporter(options));




jasmine.execute()
