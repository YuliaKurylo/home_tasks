Function.prototype.bindMe = function (oThis) {
      var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP && oThis
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };

function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.bindMe({
  prop: 9
});
module.exports = bound;
