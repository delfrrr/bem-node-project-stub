BN.addDecl('b-docs').blockTemplate(function (ctx) {
    ctx.mix([{block: 'island'}]).content(
        this._convertDocToBemjson(ctx.json().docs)
    );
}).dataTemplate(function (ctx) {
    var json = ctx.json();
    return BN('i-node-api').get(json.section).then(function (docs) {
        ctx.param('docs', docs);
        return Vow.fulfill();
    }, function (err) {
        BN('i-response').error(err);
        return Vow.reject(err);
    });
}).staticProp({
    _convertDocToBemjson: function (docObj, bemjsonAr, headerLevel) {
        var _this = this;
        bemjsonAr = bemjsonAr || [];
        headerLevel = headerLevel || 1;
        Object.keys(docObj).forEach(function (docKey) {
            var docObjItem = docObj[docKey];
            if (Array.isArray(docObjItem)) {
                docObjItem.forEach(function (item) {
                    if (typeof item === 'object') {
                        _this._convertDocToBemjson(item, bemjsonAr, headerLevel < 3 ? headerLevel + 1 : 4);
                    }
                });
            }
            if (docKey === 'textRaw') {
                bemjsonAr.push('<h' + headerLevel + '>' + docObjItem + '</h' + headerLevel + '>');
            }
            if (docKey === 'desc') {
                bemjsonAr.push(docObjItem);
            }
        });
        return bemjsonAr;
    }
});