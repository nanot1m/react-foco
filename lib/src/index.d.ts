/// <reference types="react" />
import React from 'react';
export interface FocoProps {
    onClickOutside?: (event: MouseEvent) => void;
    onFocusOutside?: (event: FocusEvent) => void;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export default class Foco extends React.Component<FocoProps> {
    private clickCaptured;
    private focusCaptured;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private initDOMListeners();
    private removeDOMListeners();
    private handleDocumentClick;
    private handleInnerClick;
    private handleDocumentFocus;
    private handleInnerFocus;
}
