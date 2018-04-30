import React from 'react';

export interface FocoProps {
  onClickOutside?: (event: MouseEvent) => void;
  onFocusOutside?: () => void;
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
        children={this.props.children}
        onMouseDown={this.handleInnerClick}
      />
    );
  }

  private initDOMListeners() {
    document.addEventListener('mousedown', this.handleDocumentClick);
  }

  private removeDOMListeners() {
    document.removeEventListener('mousedown', this.handleDocumentClick);
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
}
