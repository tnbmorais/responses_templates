var mustache = require('mustache');
var templatesLocation = './templates/facet/';


function buildAttachments(baseResponse, attachments) {

    function buildLitemarketsAttachments(baseResponse, litemarkets) {

        var marketInformation;
        var marketLiteTemplate;

        if (!litemarkets || litemarkets.length < 1) {
            return;
        }

        marketLiteTemplate = require(templatesLocation + 'marketlite-template.json');

        baseResponse.attachments.liteMarkets = {};

        litemarkets.forEach(function (market) {
            if (!market.marketId) {
                return;
            }
            marketInformation = JSON.parse(mustache.render(JSON.stringify(marketLiteTemplate), market));

            if (market.marketLevels) {
                marketInformation.marketLevels.push(market.marketLevels);
            }

            baseResponse.attachments.liteMarkets[market.marketId] = marketInformation;
        });
    }


    function buildCompetitionsAttachments(baseResponse, competitions) {

        var competitionInformation;
        var competitionTemplate;

        if (!competitions || competitions.length < 1) {
            return;
        }

        competitionTemplate = require(templatesLocation + 'competition-template.json');

        baseResponse.attachments.competitions = {};

        competitions.forEach(function (competition) {
            if (!competition.competitionId) {
                return;
            }
            competitionInformation = JSON.parse(mustache.render(JSON.stringify(competitionTemplate), competition));
            baseResponse.attachments.competitions[competition.competitionId] = competitionInformation;
        });

    }


    function buildEventsAttachments(baseResponse, events) {

        var eventInformation;
        var eventTemplate;

        if (!events || events.length < 1) {
            return;
        }

        eventTemplate = require(templatesLocation + 'event-template.json');

        baseResponse.attachments.events = {};

        events.forEach(function (event) {
            if (!event.eventId) {
                return;
            }
            eventInformation = JSON.parse(mustache.render(JSON.stringify(eventTemplate), event));
            baseResponse.attachments.events[event.eventId] = eventInformation;
        });
    }

    function buildRacesAttachments(baseResponse, races) {

        var raceInformation;
        var raceTemplate;

        if (!races || races.length < 1) {
            return;
        }

        raceTemplate = require(templatesLocation + 'races-template.json');

        baseResponse.attachments.races = {};

        races.forEach(function (race) {
            if (!race.raceId) {
                return;
            }
            raceInformation = JSON.parse(mustache.render(JSON.stringify(raceTemplate), race));
            baseResponse.attachments.races[race.raceId] = raceInformation;
        });
    }

    // Competitions attachments
    buildCompetitionsAttachments(baseResponse, attachments.competitions);

    // Events attachments
    buildEventsAttachments(baseResponse, attachments.events);

    // Lite Markets attachments
    buildLitemarketsAttachments(baseResponse, attachments.liteMarkets);

    // Races attachments
    buildRacesAttachments(baseResponse, attachments.races);

}

function buildResults(baseResponse, results) {

    var possibleKeys = ['eventId', 'marketId', 'competitionId', 'eventTypeId'];

    if (!results || results.length < 1) {
        return;
    }

    Object.keys(results).forEach(function (key) {
        if (possibleKeys.indexOf(key) === -1) {
            delete results[key];
        }
    });

    baseResponse.results.push(results);
}


function buildFacets(baseResponse, facets) {

    var facetsInfo = {
        values: []
    };

    if (!facets || facets.lenght < 1) {
        return;
    }

    /*
    (function transverseFacets(facetsInfo, facets) {
        facets.forEach(function (facet) {
            var fieldKey;
            switch(facet.type) {
                case 'competition':
                    fieldKey = 'competitionId';
                    break;
                case 'liteMarket':
                    fieldKey = 'marketId';
                    break;
                case 'market':
                    fieldKey = 'marketId';
                    break;
                case 'event':
                    fieldKey = 'eventId';
                    break;
            }
            facetsInfo.values.push({
                key: {
                    fieldKey: facet.key
                },
                cardinality: 1,
            });
            if (facet.next) {
                transverseFacets(facet.next);
            }
        });
    }(facetsInfo, facets));
    */

}


function constructFacetMock(info) {

    var baseResponse = {
        facets: [],
        attachments: {},
        results: []
    };

    // Attachments
    buildAttachments(baseResponse, info.attachments);

    // Results
    buildResults(baseResponse, info.results);

    // Facets
    buildFacets(baseResponse, info.facets);

    return baseResponse;

}

module.exports = {
    constructFacetMock: constructFacetMock
};
