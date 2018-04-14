import * as React from "react";
import * as classNames from "classnames";

export interface AvatarProps {
  size: string | number;
  src: string;
  defaultSrc: string;
  shape?: string;
  alt?: string;
  title?: string;
  style?: object;
  className?: string;
  onClick?: Function;
}

export interface AvatarState {
  reload: boolean;
}

export class Avatar extends React.Component<AvatarProps, AvatarState> {
  static defaultProps = {
    shape: "circle"
  };

  constructor(props: AvatarProps) {
    super(props);
    this.state = {
      reload: true // 防止加载失败后，默认头像也加载失败，导致循环加载默认图
    };
  }

  onError = (): void => {
    if (this.state.reload) {
      this.setState({
        reload: false
      });
    }
  };

  onLoad = () => {};

  render() {
    let {
      src,
      size,
      defaultSrc,
      alt,
      title,
      shape,
      style,
      className
    } = this.props;
    let { reload } = this.state;
    let resultStyle = assign(
      {
        width: size,
        height: size,
        borderRadius: shape === "circle" ? "50%" : "0"
      },
      style
    );

    let imgSrc = reload ? src : defaultSrc;

    return (
      <img
        src={imgSrc}
        alt={alt}
        title={title}
        className={className}
        style={resultStyle}
        onError={this.onError}
        onLoad={this.onLoad}
      />
    );
  }
}

function assign(target: any, varArgs: any) {
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
