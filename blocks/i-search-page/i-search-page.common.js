BN.addDeclFor('page', 'i-search-page', {
    route: /.*/
}).staticProp({
    init: function () {
        return this.out('hello word');
    }
});
