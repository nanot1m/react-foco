/// <reference types="react" />
import React from "react";
export interface TooltipProps {
    children: React.ReactNode;
    anchor: HTMLElement;
}
export declare class Tooltip extends React.Component<TooltipProps> {
    private domNode;
    constructor(props: TooltipProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
