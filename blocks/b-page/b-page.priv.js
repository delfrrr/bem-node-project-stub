BN.addDecl('b-page').matchBlock(function (ctx) {
    ctx.content([
        {block: 'b-head'},
        ctx.content()
    ], true);
});
