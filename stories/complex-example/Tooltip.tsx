import React from 'react';
import { createPortal } from 'react-dom';

export interface TooltipProps {
  children: React.ReactNode;
  anchor: HTMLElement;
}

export class Tooltip extends React.Component<TooltipProps> {
  private domNode: HTMLDivElement;

  constructor(props: TooltipProps) {
    super(props);
    this.domNode = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.domNode);
  }

  componentWillUnmount() {
    document.body.removeChild(this.domNode);
  }

  public render() {
    const pos = getTooltipPosition(this.props.anchor, -12);
    const pin = (
      <div
        style={{
          width: 0,
          height: 0,
          position: 'absolute',
          bottom: -10,
          left: 10,
          borderStyle: 'solid',
          borderWidth: '10px 7.5px 0 7.5px',
          borderColor: 'white transparent transparent transparent'
        }}
      />
    );
    const tooltip = (
      <div
        style={{
          ...pos,
          position: 'absolute',
          padding: 10,
          filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.3))',
          borderRadius: 3,
          background: 'white'
        }}
      >
        {this.props.children}
        {pin}
      </div>
    );
    return createPortal(tooltip, this.domNode);
  }
}

function getTooltipPosition(node: HTMLElement, yOffset: number = 0) {
  const docHeight = document.documentElement.clientHeight;
  const rect = node.getBoundingClientRect();
  return {
    bottom: docHeight - rect.top - yOffset,
    left: rect.left
  };
}
