"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Avatar = (function (_super) {
    __extends(Avatar, _super);
    function Avatar(props) {
        var _this = _super.call(this, props) || this;
        _this.onError = function () {
            if (_this.state.reload) {
                _this.setState({
                    reload: false
                });
            }
        };
        _this.onLoad = function () { };
        _this.state = {
            reload: true // 加载失败后，尝试加载默认图，需要方式默认图加载失败死循环
        };
        return _this;
    }
    Avatar.prototype.render = function () {
        var _a = this.props, src = _a.src, size = _a.size, defaultSrc = _a.defaultSrc, alt = _a.alt, title = _a.title, shape = _a.shape, style = _a.style, className = _a.className;
        var reload = this.state.reload;
        var resultStyle = assign({
            width: size,
            height: size,
            borderRadius: shape === "circle" ? "50%" : "0"
        }, style);
        var imgSrc = reload ? src : defaultSrc;
        return (React.createElement("img", { src: imgSrc, alt: alt, title: title, className: className, style: resultStyle, onError: this.onError, onLoad: this.onLoad }));
    };
    return Avatar;
}(React.Component));
Avatar.defaultProps = {
    shape: "circle"
};
exports.Avatar = Avatar;
function assign(target, varArgs) {
    // .length of function is 2
    "use strict";
    if (target == null) {
        // TypeError if undefined or null
        throw new TypeError("Cannot convert undefined or null to object");
    }
    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
//# sourceMappingURL=index.js.map