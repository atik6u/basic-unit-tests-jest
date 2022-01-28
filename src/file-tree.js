
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
    while (id != 0) {
        id = tree.get(id).parent;
        ids.push(id);
    }
    return ids;
}

function getLowestCommonAncestor (tree, id1, id2) {
    
    ancestor1 = id1;
    ancestor2 = id2;    

    while ( (ancestor1 != 0) && (ancestor2 != 0) ) {

        if (id1 != 0){
            ancestor1 = tree.get(ancestor1).parent;
        }
            
        if (id2 != 0){
            ancestor2 = tree.get(ancestor1).parent;
        }
    
        if (ancestor1 == ancestor2) {
            break;
        }
    }

    return ancestor2;


}

module.exports = {createTree, getAbsolutePath, getLowestCommonAncestor}
// module.exports = {};
// module.exports.createTree = createTree
// module.exports.getAbsolutePath = getAbsolutePath
// module.exports.getLowestCommonAncestor = getLowestCommonAncestor