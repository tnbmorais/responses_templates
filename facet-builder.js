var mustache = require('mustache');

function buildLitemarketsInformation(baseResponse, litemarkets) {

    var marketInformation;
    var marketLiteTemplate;
    var i;

    if (!litemarkets || litemarkets.length < 1) {
        return;
    }

    marketLiteTemplate = require('./templates/marketlite-template.json');

    baseResponse.attachments.liteMarkets = {};

    litemarkets.forEach(function (market) {
        marketInformation = JSON.parse(mustache.render(JSON.stringify(marketLiteTemplate), market));
        baseResponse.attachments.liteMarkets[market.marketId] = marketInformation;
    });
}


function constructResponse(obj) {

    var baseResponse = {
        facets: [],
        attachments: {},
        results: []
    };

    buildLitemarketsInformation(baseResponse, obj.liteMarkets);

    return baseResponse;

}

module.exports = {
    constructResponse: constructResponse
}
