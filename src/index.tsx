import React from 'react';

export interface FocoProps {
  onClickOutside?: (event: MouseEvent) => void;
  onFocusOutside?: (event: FocusEvent) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default class Foco extends React.Component<FocoProps> {
  private clickCaptured: boolean = false;
  private focusCaptured: boolean = false;

  public componentDidMount() {
    this.initDOMListeners();
  }

  public componentWillUnmount() {
    this.removeDOMListeners();
  }

  public render() {
    return (
      <span
        className={this.props.className}
        style={this.props.style}
        onMouseDown={this.handleInnerClick}
        onFocus={this.handleInnerFocus}
        children={this.props.children}
      />
    );
  }

  private initDOMListeners() {
    document.addEventListener('mousedown', this.handleDocumentClick);
    document.addEventListener('focus', this.handleDocumentFocus, true);
  }

  private removeDOMListeners() {
    document.removeEventListener('mousedown', this.handleDocumentClick);
    document.removeEventListener('focus', this.handleDocumentFocus);
  }

  private handleDocumentClick = (event: MouseEvent) => {
    if (!this.clickCaptured && this.props.onClickOutside) {
      this.props.onClickOutside(event);
    }
    this.clickCaptured = false;
  };

  private handleInnerClick = () => {
    this.clickCaptured = true;
  };

  private handleDocumentFocus = (event: FocusEvent) => {
    if (!this.focusCaptured && this.props.onFocusOutside) {
      this.props.onFocusOutside(event);
    }
    this.focusCaptured = false;
  };

  private handleInnerFocus = () => {
    this.focusCaptured = true;
  };
}
