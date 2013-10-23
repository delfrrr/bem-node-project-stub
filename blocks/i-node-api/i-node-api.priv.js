BN.addDecl('i-node-api', 'ajax', {
    apiHost: 'http://nodejs.org/api/'
}).staticProp({
    _request: function (method, resource, data) {
        resource = resource + '.json';
        return this.__base(method, resource, data);
    }
});