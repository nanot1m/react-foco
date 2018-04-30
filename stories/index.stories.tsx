import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Foco from '../src';

storiesOf('Foco', module).add('clicks', () => <DemoComponent />);

enum ComponentActions {
  None = 'None',
  ClickInside = 'ClickInside',
  ClickOutside = 'ClickOutside',
  FocusInside = 'FocusInside',
  FocusOutside = 'FocusOutside'
}

class DemoComponent extends React.Component {
  public state = {
    lastAction: ComponentActions.None
  };

  render() {
    return (
      <Foco
        onClickOutside={() => {
          this.setState({ lastAction: ComponentActions.ClickOutside });
          console.log('click outside');
        }}
      >
        <div
          onClick={() =>
            this.setState({ lastAction: ComponentActions.ClickInside })
          }
          style={{ backgroundColor: 'hotpink', color: 'white', padding: 40 }}
        >
          Last action: {this.state.lastAction}
        </div>
      </Foco>
    );
  }
}
