import * as React from "react";
import * as ReactDOM from "react-dom";
import { Avatar } from "../src/index";

ReactDOM.render(
  <Avatar
    src="http://hifizz.com/content/images/2017/11/WechatIMG444.jpeg"
    defaultSrc="http://hifizz.com/content/images/2017/11/WechatIMG4.jpeg"
    size="50px"
    shape="circle"
    style={{borderRadius: '4px'}}
  />,
  document.getElementById("app")
);
