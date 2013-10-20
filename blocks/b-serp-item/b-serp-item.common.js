BN.addDecl('b-serp-item').matchBlock(function (ctx) {
    var json = ctx.json();
    ctx.mix({block: 'island', elem: 'item'}).content({
        block: 'b-link',
        url: json.url,
        content: json.text
    });
});