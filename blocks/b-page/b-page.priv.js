BN.addDecl('b-page').blockTemplate(function (ctx) {
    ctx.content([
        {block: 'b-head'},
        ctx.content()
    ], true);
});
