BN.addDecl('b-serp').matchBlock(function (ctx) {
    ctx.mix([{block: 'island'}]).content([
        {block: 'b-serp-item'},
        {block: 'b-serp-item'},
        {block: 'b-serp-item'}
    ]);
});