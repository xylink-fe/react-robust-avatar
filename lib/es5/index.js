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
var classNames = require("classnames");
var Avatar = (function (_super) {
    __extends(Avatar, _super);
    function Avatar(props) {
        var _this = _super.call(this, props) || this;
        _this.onError = function () {
            if (_this.state.firstTime) {
                _this.setState(function (prevState, props) {
                    return {
                        firstTime: false
                    };
                });
            }
        };
        _this.onLoad = function () {
            console.log('Load image successfully!');
        };
        _this.state = {
            firstTime: true
        };
        return _this;
    }
    Avatar.prototype.render = function () {
        var _a = this.props, src = _a.src, size = _a.size, defaultSrc = _a.defaultSrc, alt = _a.alt, title = _a.title, shape = _a.shape;
        var firstTime = this.state.firstTime;
        var avatarClass = classNames({ avatar: true });
        var imgStyle = {
            width: size,
            height: size,
            borderRadius: shape === 'circle' ? '50%' : '0'
        };
        var imgSrc = firstTime ? src : defaultSrc;
        return (React.createElement("div", null,
            React.createElement("img", { src: imgSrc, alt: alt, title: title, className: avatarClass, style: imgStyle, onError: this.onError, onLoad: this.onLoad })));
    };
    return Avatar;
}(React.Component));
Avatar.defaultProps = {
    shape: 'circle'
};
exports.Avatar = Avatar;
//# sourceMappingURL=index.js.map