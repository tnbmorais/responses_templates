var templatesLocation = './templates/graph/';
var rootNode = {
    nodeId: 'ROOT:EVENT_TYPES_ROOT',
    nodeType: 'ROOT'
};

function buildEdges(baseResponse, data) {
    (function transverseNodes (nodes, parentNode) {
        var fromNode = parentNode || rootNode.nodeId;

        nodes.forEach(function (node) {
            baseResponse.edges.push({
                from: fromNode,
                to: node.nodeId
            });
            if (node.next) {
                transverseNodes(node.next, node.nodeId);
            }
        });
    })(data);
}


function buildNodes(baseResponse, data) {

    function addRootNode(node) {
        baseResponse.nodes.push(rootNode);
    }

    (function transverseNodes(nodes) {
        nodes.forEach(function (node) {
            baseResponse.nodes.push({
                nodeId: node.nodeId,
                name: node.name,
                nodeType: node.nodeType
            });
            if (node.next) {
                transverseNodes(node.next);
            }
        });
    })(data);

    addRootNode();

}


function constructGraphMock(data) {

    var baseResponse = {
        edges: [],
        nodes: []
    };

    buildEdges(baseResponse, data);

    buildNodes(baseResponse, data);

    return baseResponse;
}

module.exports = {
    constructGraphMock: constructGraphMock
};
