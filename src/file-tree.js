
function createTree (elements) {
    const map = new Map();
    for (const element of elements) {
        if (element.id == element.parent) {
            throw "Assertion failed: Recursive file location";
        }
        map.set(element.id, element);
    }

    return map;

}

function getAbsolutePath (tree, id) {
    let ids = [];
    ids.push(id);
    while (id > 0) {
        id = tree.get(id).parent;
        ids.push(id);
    }
    return ids;
}

function getLowestCommonAncestor (tree, id1, id2) {

    path1 = getAbsolutePath(tree, id1);
    path2 = getAbsolutePath(tree, id2);

    for (let index = 0; index < path1.length; index++) {
        const element = path1[index];
        if (path2.find(id => id == element)) {
            return element;
        }
    }
    return 0;

}

module.exports = {createTree, getAbsolutePath, getLowestCommonAncestor}
// module.exports = {};
// module.exports.createTree = createTree
// module.exports.getAbsolutePath = getAbsolutePath
// module.exports.getLowestCommonAncestor = getLowestCommonAncestor