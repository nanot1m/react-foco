import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Foco from '../src';
import { TestElements } from './TestElements';

storiesOf('Foco', module).add('clicks_and_focuses', () => <DemoComponent />);

export enum ComponentActions {
  None = 'None',
  ClickInside = 'ClickInside',
  ClickOutside = 'ClickOutside',
  FocusInside = 'FocusInside',
  FocusOutside = 'FocusOutside'
}

class DemoComponent extends React.Component {
  public state = {
    clickStatus: ComponentActions.None,
    focusStatus: ComponentActions.None
  };

  render() {
    return (
      <>
        <Foco
          onClickOutside={() => {
            this.setState({ clickStatus: ComponentActions.ClickOutside });
          }}
          onFocusOutside={() => {
            this.setState({ focusStatus: ComponentActions.FocusOutside });
          }}
        >
          <div
            data-testID={TestElements.InnerNode}
            onClick={() =>
              this.setState({ clickStatus: ComponentActions.ClickInside })
            }
            onFocus={() =>
              this.setState({ focusStatus: ComponentActions.FocusInside })
            }
            style={{ backgroundColor: 'hotpink', color: 'white', padding: 40 }}
          >
            <button>Inner button</button>
            <div>
              Click status:{' '}
              <span data-testID={TestElements.ClickStatusNode}>
                {this.state.clickStatus}
              </span>
            </div>
            <div>
              Focus status:{' '}
              <span data-testID={TestElements.FocusStatusNode}>
                {this.state.focusStatus}
              </span>
            </div>
          </div>
        </Foco>
        <div style={{ padding: 40 }} data-testID={TestElements.OuterNode}>
          <button>Outer button</button>
        </div>
      </>
    );
  }
}
