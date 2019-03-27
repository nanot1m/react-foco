import React from 'react';

export interface FocoRenderProps {
  className?: string;
  style?: React.CSSProperties;
  onMouseDown: React.MouseEventHandler;
  onFocus: React.FocusEventHandler;
  onTouchStart: React.TouchEventHandler;
}

export type FocoRenderType = (props: FocoRenderProps) => React.ReactNode;

export interface FocoProps {
  onClickOutside?: (event: MouseEvent | TouchEvent) => void;
  onFocusOutside?: (event: FocusEvent) => void;
  children?: FocoRenderType | React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  component?: any;
  render?: FocoRenderType;
}

export default class Foco extends React.Component<FocoProps> {
  private clickCaptured: boolean = false;
  private focusCaptured: boolean = false;

  public componentDidMount() {
    this.init();
  }

  public componentWillUnmount() {
    this.flush();
  }

  public render() {
    const render = this.props.render || this.props.children;

    if (typeof render === 'function') {
      return render(this.getProps());
    }

    return this.renderComponent();
  }

  private renderComponent() {
    return React.createElement(
      this.props.component || 'span',
      this.getProps(),
      this.props.children
    );
  }

  private getProps(): FocoRenderProps {
    return {
      className: this.props.className,
      style: this.props.style,
      onMouseDown: this.innerClick,
      onFocus: this.innerFocus,
      onTouchStart: this.innerClick
    };
  }

  private init() {
    document.addEventListener('mousedown', this.documentClick);
    document.addEventListener('focus', this.documentFocus, true);
    document.addEventListener('touchstart', this.documentClick);
  }

  private flush() {
    document.removeEventListener('mousedown', this.documentClick);
    document.removeEventListener('focus', this.documentFocus);
    document.removeEventListener('touchstart', this.documentClick);
  }

  private documentClick = (event: MouseEvent | TouchEvent) => {
    if (!this.clickCaptured && this.props.onClickOutside) {
      this.props.onClickOutside(event);
    }
    this.clickCaptured = false;
  };

  private innerClick = () => {
    this.clickCaptured = true;
  };

  private documentFocus = (event: FocusEvent) => {
    if (!this.focusCaptured && this.props.onFocusOutside) {
      this.props.onFocusOutside(event);
    }
    this.focusCaptured = false;
  };

  private innerFocus = () => {
    this.focusCaptured = true;
  };
}
