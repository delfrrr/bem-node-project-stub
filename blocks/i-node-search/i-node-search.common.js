BN.addDecl('i-node-search').staticProp({
    find: function () {
        return BN('i-node-api').get('all', {
            xpath: '/*/*'
        });
    }
});