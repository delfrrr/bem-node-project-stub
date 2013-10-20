BN.addDecl('b-serp').matchBlock(function (ctx) {
    ctx.mix([{block: 'island'}]).content(ctx.json().items.map(function (item) {
        return jQuery.extend({
            block: 'b-serp-item'
        }, item);
    }));
});