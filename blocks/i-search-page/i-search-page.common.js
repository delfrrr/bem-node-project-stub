BN.addDeclFor('page', 'i-search-page', {
    route: /^\/(\w+)?/
}).staticProp({
    init: function (matches) {
        return this.out({
            block: 'b-search-page',
            section: matches[1] || 'documentation'
        });
    },

    update: function (matches) {
        return BN('b-search-page').update(matches[1] || 'documentation');
    }
});
