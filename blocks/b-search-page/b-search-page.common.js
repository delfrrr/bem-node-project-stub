BN.addDecl('b-search-page').blockTemplate(function (ctx) {
    var json = ctx.json();
    ctx.js(true).content([
        {elem: 'serp', content: {
            block: 'b-serp',
            items: json.index.desc.map(function (item) {
                if (item.type === 'text') {
                    var itemMatch = item.text.match(/\[(.+)\]\((.*)\.html\)/i);
                    if (itemMatch.length >= 3) {
                        return {
                            text: itemMatch[1],
                            url: itemMatch[2]
                        };
                    }
                }
            }).filter(Boolean)
        }},
        {elem: 'docs', content: {
            block: 'b-docs',
            section: json.section
        }}
    ]);
}).dataTemplate(function (ctx) {
    // var q = BN('i-router').get('params.q');
    return BN('i-node-api').get('index').then(function (index) {
        ctx.param('index', index);
        return Vow.fulfill();
    });
}).staticProp({
    update: function (section) {
        var _this = this;
        return BN('i-content').html({
            block: 'b-docs',
            section: section
        }).then(function (html) {
            BEM.DOM.replace(_this.__lastInstance.findBlockInside('b-docs').domElem, html);
            jQuery(window).scrollTop(0);
        });
    }
});