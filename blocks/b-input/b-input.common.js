BN.addDecl('b-input').matchBlock(function (ctx) {
    var json = ctx.json();
    ctx.tag('input').attr('type', 'text').attr('name', json.name);
});