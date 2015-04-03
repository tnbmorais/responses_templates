var mustache = require('mustache');
var templatesLocation = './templates/facet/';

function buildLitemarketsInformation(baseResponse, litemarkets) {

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
        baseResponse.attachments.liteMarkets[market.marketId] = marketInformation;
    });
}


function buildCompetitionsInformation(baseResponse, competitions) {

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


function constructFacetMock(info) {

    var baseResponse = {
        facets: [],
        attachments: {},
        results: []
    };

    //Competitions
    buildCompetitionsInformation(baseResponse, info.competitions);

    //Lite Markets
    buildLitemarketsInformation(baseResponse, info.liteMarkets);

    return baseResponse;

}

module.exports = {
    constructFacetMock: constructFacetMock
};
