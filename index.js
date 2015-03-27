var mustache = require('mustache');
var marketsTemplate = require('./templates/marketlite-template.json');

console.log(marketsTemplate);

var baseResponse = {
    facets: [],
    attachments: [],
    results: []
};

function constructResponse(obj) {
    var marketInformation = mustache.render(JSON.stringify(marketsTemplate), obj);
    baseResponse.facets.push(JSON.parse(marketInformation));
}

/****************** CENAS **********************/

var obj = {
    marketId: 'xpto',
    eventTypeId: 10
};

constructResponse(obj);

console.log(JSON.stringify(baseResponse));
