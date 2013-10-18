BN.addDecl('b-search-page').matchBlock(function (ctx) {
    ctx.content([
        {elem: 'serp', content: {block: 'b-serp'}},
        {elem: 'docs', content: {block: 'b-docs'}}
    ]);
});