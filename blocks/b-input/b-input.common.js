BN.addDecl('b-input').blockTemplate(function (ctx) {
    var json = ctx.json();
    ctx
        .tag('input')
        .attr('type', 'text')
        .attr('name', json.name)
        .attr('value', BN('i-router').escapeHTML(json.value));
});