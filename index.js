var facetBuilder = require('./facet-builder.js');

/****************** FACET **********************/

var mock = {
    attachments: {
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
    },
    results: {
        marketId: '1.123456789',
        eventId: '2222222',
        cenas: 'xpot'
    }
};

var marketliteInformation = facetBuilder.constructFacetMock(mock);

console.log('RESPONSE', JSON.stringify(marketliteInformation));
