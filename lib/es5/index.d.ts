/// <reference types="react" />
import * as React from "react";
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
export declare class Avatar extends React.Component<AvatarProps, AvatarState> {
    static defaultProps: {
        shape: string;
    };
    constructor(props: AvatarProps);
    onError: () => void;
    onLoad: () => void;
    render(): JSX.Element;
}
