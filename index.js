var mustache = require('mustache');
var marketLiteTemplate = require('./templates/marketlite-template.json');

var baseResponse = {
    facets: [],
    attachments: [],
    results: []
};


function buildLitemarketsInformation(markets) {

    var marketInformation;
    var i;

    if (!markets || markets.length < 1) {
        return;
    }

    baseResponse.facets.liteMarkets = {};

    markets.forEach(function (market) {
        marketInformation = JSON.parse(mustache.render(JSON.stringify(marketLiteTemplate), market));
        baseResponse.facets.liteMarkets[market.marketId] = marketInformation;        
    });
}


function constructResponse(obj) {

    buildLitemarketsInformation(obj.liteMarkets);

}

/****************** CENAS **********************/

var obj = {
    liteMarkets: [{
        marketId: 'xpto',
        eventTypeId: 10
    }, {
        marketId: 'xpto2',
        eventTypeId: 10
    }]
};

constructResponse(obj);

console.log('RESPONSE', JSON.stringify(baseResponse));
