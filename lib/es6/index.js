"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const classNames = require("classnames");
class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.onError = () => {
            if (this.state.firstTime) {
                this.setState((prevState, props) => {
                    return {
                        firstTime: false
                    };
                });
            }
        };
        this.onLoad = () => {
            console.log('Load image successfully!');
        };
        this.state = {
            firstTime: true
        };
    }
    render() {
        let { src, size, defaultSrc, alt, title, shape } = this.props;
        let { firstTime } = this.state;
        let avatarClass = classNames({ avatar: true });
        let imgStyle = {
            width: size,
            height: size,
            borderRadius: shape === 'circle' ? '50%' : '0'
        };
        let imgSrc = firstTime ? src : defaultSrc;
        return (React.createElement("div", null,
            React.createElement("img", { src: imgSrc, alt: alt, title: title, className: avatarClass, style: imgStyle, onError: this.onError, onLoad: this.onLoad })));
    }
}
Avatar.defaultProps = {
    shape: 'circle'
};
exports.Avatar = Avatar;
//# sourceMappingURL=index.js.map