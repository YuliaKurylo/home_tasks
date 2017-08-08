var _ = {
    assign : function () {
        for (i = 1; i < arguments.length; i++) {
            for (var key in arguments[i]) {
                arguments[0][key] = arguments[i][key];
            }
        }
        return arguments[0];
    }
}
var defaults = { width: 100, height: 100 };
var options = { width: 150 };
var configs = _.assign({}, defaults, options);

//module.exports = _;

