BN.addDecl('b-head').matchBlock(function (ctx) {
    ctx.tag('form').attr('method', '').content([
        {
            block: 'b-input',
            mix: {block: this._name, elem: 'input'},
            name: 'q',
            value: BN('i-router').get('params').q || ''
        }
    ]);
});