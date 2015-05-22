var facetBuilder = require('./facet-builder.js');
var graphBuilder = require('./graph-builder.js');

/****************** FACET **********************/

var mock = {
    attachments: {
        liteMarkets: [{
            marketId: 'xpto',
            eventTypeId: 10,
            marketLevels: 'CENAS'
        }, {
            marketId: 'xpto2',
            eventTypeId: 10
        }],
        races: [{
            raceId: '12356',
            winMarketName: 'Race 123456'
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
    },
    facets: [{
        type: 'competition',
        key: 'XXX',
        cardinality: 123,
        next: [{
            type: 'competitionRegion',
            key: 'GBR',
            next: [{
                type: 'liteMarket',
                key: 'xpto'
            }, {
                type: 'event',
                key: 'SAS',
                cardinality: 20,
                next: [{
                    type: 'liteMarket',
                    key: 'xpto2'
                }]
            }]
        }]
    }]
};

//var facetMock = facetBuilder.constructFacetMock(mock);

//console.log('RESPONSE', JSON.stringify(facetMock));

/****************** GRAPH **********************/

//http://hamdev411.aws.dev.ham.uk.betfair/graph.html#/bynode?nodeIds=MENU:27289130&maxInDistance=1&maxOutDistance=1&attachments=[EVENT,MENU,COMPETITION,MARKET]

var mock = [{
    nodeId: 'EVENT_TYPE:XXX',
    name: 'SPORT XXX',
    nodeType: 'EVENT_TYPE',
    next: [{
        nodeId: 'COMP:XXX',
        name: 'COMPETITON XXX',
        nodeType: 'COMP',
        next: [{
            nodeId: 'EVENT:XXX',
            name: 'EVENT XXX',
            nodeType: 'EVENT',
            next: [{
                nodeId: 'MARKET:XXX',
                name: 'MARKET XXX',
                nodeType: 'MARKET'
            }]
        }, {
            nodeId: 'EVENT:YYY',
            name: 'EVENT YYY',
            nodeType: 'EVENT',
            next: [{
                nodeId: 'MARKET:YYY',
                name: 'MARKET YYY',
                nodeType: 'MARKET'
            }]
        }]
    }, {
        nodeId: 'COMP:YYY',
        name: 'COMPETITON YYY',
        nodeType: 'COMP',
        next: [{
            nodeId: 'EVENT:ZZZ',
            name: 'EVENT ZZZ',
            nodeType: 'EVENT',
            next: [{
                nodeId: 'MARKET:ZZZ',
                name: 'MARKET ZZZ',
                nodeType: 'MARKET'
            }]
        }, {
            nodeId: 'EVENT:CCC',
            name: 'EVENT CCC',
            nodeType: 'EVENT',
            next: [{
                nodeId: 'MARKET:CCC',
                name: 'MARKET CCC',
                nodeType: 'MARKET'
            }]
        }]
    }]
}, {
    nodeId: 'EVENT_TYPE:YYY',
    name: 'SPORT YYY',
    nodeType: 'EVENT_TYPE',
}];

var graphMock = graphBuilder.constructGraphMock(mock);

console.log('RESPONSE', JSON.stringify(graphMock));
