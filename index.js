var facetBuilder = require('./facet-builder.js');

/****************** FACET **********************/

var obj = {
    liteMarkets: [{
        marketId: 'xpto',
        eventTypeId: 10
    }, {
        marketId: 'xpto2',
        eventTypeId: 10
    }]
};

var marketliteInformation = facetBuilder.constructResponse(obj);

console.log('RESPONSE', JSON.stringify(marketliteInformation));
