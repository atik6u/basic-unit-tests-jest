const createTree = require("../src/file-tree").createTree
const getAbsolutePath = require("../src/file-tree").getAbsolutePath
const getLowestCommonAncestor = require("../src/file-tree").getLowestCommonAncestor

test('tests create tree', () => {
    root    = {"id": 0, "nom": "/", "parent": -1};
    file1   = {"id": 1, "nom": "file1", "parent": 0};
    file2   = {"id": 2, "nom": "file2", "parent": 1};
    file3   = {"id": 3, "nom": "file3", "parent": 0};

    const tree = new Map();
    tree.set(root.id, root);
    tree.set(file1.id, file1);
    tree.set(file2.id, file2);
    tree.set(file3.id, file3);

    expect(createTree([file1, file2, file3, root])).toEqual(tree);
})

test('tests create loop-back tree', () => {
    root    = {"id": 0, "nom": "/", "parent": -1};
    file1   = {"id": 1, "nom": "file1", "parent": 1};

    const test = () => {
        createTree([root, file1]);
    };
    expect(test).toThrow();
})

test('tests create tree', () => {
    root    = {"id": 0, "nom": "/", "parent": -1};
    file1   = {"id": 1, "nom": "file1", "parent": 0};
    file2   = {"id": 2, "nom": "file2", "parent": 1};
    file3   = {"id": 3, "nom": "file3", "parent": 0};
    file4   = {"id": 4, "nom": "file3", "parent": 2};
    file5   = {"id": 5, "nom": "file3", "parent": 4};

    const tree = new Map();
    tree.set(root.id, root);
    tree.set(file1.id, file1);
    tree.set(file2.id, file2);
    tree.set(file3.id, file3);
    tree.set(file4.id, file4);
    tree.set(file5.id, file5);

    expect(getAbsolutePath(tree, file5.id)).toEqual([4, 2, 1, 0]);
})
