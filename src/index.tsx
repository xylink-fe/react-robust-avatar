import * as React from "react";
import * as classNames from "classnames";

// event can be speard
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
  firstTime: boolean;
}

export class Avatar extends React.Component<AvatarProps, AvatarState> {
  static defaultProps = {
    shape: 'circle'
  }

  constructor(props: AvatarProps) {
    super(props);
    this.state = {
      firstTime: true
    };
  }

  onError = (): void => {
    if (this.state.firstTime) {
      this.setState(
        (prevState: AvatarState, props: AvatarProps): AvatarState => {
          return {
            firstTime: false
          };
        }
      );
    }
  };

  onLoad = () => {
    console.log('Load image successfully!')
  };

  render() {
    let { src, size, defaultSrc, alt, title, shape } = this.props;
    let {firstTime} = this.state;
    let avatarClass = classNames({ avatar: true });
    let imgStyle = {
      width: size,
      height: size,
      borderRadius: shape === 'circle' ? '50%' : '0'
    };
    let imgSrc = firstTime ? src : defaultSrc;

    return (
      <div>
        <img
          src={imgSrc}
          alt={alt}
          title={title}
          className={avatarClass}
          style={imgStyle}
          onError={this.onError}
          onLoad={this.onLoad}
        />
      </div>
    );
  }
}
