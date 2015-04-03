var facetBuilder = require('./facet-builder.js');

/****************** FACET **********************/

var mock = {
    liteMarkets: [{
        marketId: 'xpto',
        eventTypeId: 10
    }, {
        marketId: 'xpto2',
        eventTypeId: 10
    }],
    competitions: [{
        competitionId: 'XXX',
        competitionName: 'Competition XXX'
    }, {
        competitionId: 'XXX 2',
        competitionName: 'Competition XXX 2'
    }],
    events: [{
        eventId: 'SAS',
        eventName: 'Event SAS'
    }, {
        eventId: 'SAS 2',
        eventName: 'Event SAS 2'
    }]
};

var marketliteInformation = facetBuilder.constructFacetMock(mock);

console.log('RESPONSE', JSON.stringify(marketliteInformation));
