# react-robust-avatar
React 版本的安全头像组件。设置当前头像和默认头像，在头像加载失败的时候将会加载默认头像。
（兼容IE8，基于React@0.14.9）

## Install

```bash
$ npm i --save react-robust-avatar
```

## Example
```bash
$ parcel ./src/index.html
```

## Usage
```js
// base usage.
import React from 'react';
import ReactDOM from 'react-dom';

// running with ES5 (Default)
import {Avatar} from 'react-robust-avatar';
// import {Avatar} from 'react-robust-avatar/lib/es5';

// running on ES3(IE8+)
// import {Avatar} from 'react-robust-avatar/lib/es3';

// running on ES6
// import {Avatar} from 'react-robust-avatar/lib/es6';

const Card extends React.Component {
  render() {
    return (
      <div>
        <Avatar
          src="http://hifizz.com/content/images/2017/11/WechatIMG444.jpeg"
          defaultSrc="http://hifizz.com/content/images/2017/11/WechatIMG4.jpeg"
          size="50px"
          shape="circle"
        />
      </div>
    )
  }
}

ReactDOM.render(<Card />, document.getElementById('app'));
```

```js
// HOC for series avatar usage
import Avatar from "react-robust-avatar";

const types = {
  "SuperMan": 'http://xxx.com/image/SuperMan.jpg',
  "Batman": 'http://xxx.com/image/Batman.jpg',
  "Spider-Man": 'http://xxx.com/image/Spider-Man.jpg',
  "Thor": 'http://xxx.com/image/Thor.jpg',
  "Hal Jordan": 'http://xxx.com/image/Hal-Jordan.jpg',
  "Wonder Woman": 'http://xxx.com/image/Wonder Woman.jpg',
};

const HeroAvatar = props => {
  const size = "40px";
  const src = types[props.type];
  const defaultSrc = "http://hifizz.com/image/default.jpg";
  return <Avatar size={size} src={src} defaultSrc={defaultSrc} />;
};

export default HeroAvatar;
```

## Props

```TypeScript
interface AvatarProps {
    size: string | number; // width value, width === height
    src: string; // url
    defaultSrc: string; // url
    shape?: string; // 'circle' | 'square'
    alt?: string; 
    title?: string;
    style?: object;
    className?: string;
    onClick?: Function;
}
```

## TODO
- lazy load avatar.
- CI 
- Test
- Git hook
