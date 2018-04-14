"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.onError = () => {
            if (this.state.reload) {
                this.setState({
                    reload: false
                });
            }
        };
        this.onLoad = () => { };
        this.state = {
            reload: true // 加载失败后，尝试加载默认图，需要方式默认图加载失败死循环
        };
    }
    render() {
        let { src, size, defaultSrc, alt, title, shape, style, className } = this.props;
        let { reload } = this.state;
        let resultStyle = assign({
            width: size,
            height: size,
            borderRadius: shape === "circle" ? "50%" : "0"
        }, style);
        let imgSrc = reload ? src : defaultSrc;
        return (React.createElement("img", { src: imgSrc, alt: alt, title: title, className: className, style: resultStyle, onError: this.onError, onLoad: this.onLoad }));
    }
}
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