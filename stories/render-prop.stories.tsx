import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Foco from '../src';

storiesOf('Render Prop', module)
  .add('prop render', () => {
    return (
      <Foco
        onClickOutside={() => alert('click out')}
        render={wrapperProps => (
          <div
            {...wrapperProps}
            style={{ border: '1px solid skyblue', textAlign: 'center' }}
          >
            <p>
              Hola! Render prop is provided. Clicks outside would trigger alerts
            </p>
          </div>
        )}
      />
    );
  })
  .add('prop children', () => {
    return (
      <Foco onClickOutside={() => alert('click out')}>
        {wrapperProps => (
          <div
            {...wrapperProps}
            style={{ border: '1px solid skyblue', textAlign: 'center' }}
          >
            <p>
              Hola! Function as children prop is provided. Clicks outside would
              trigger alerts
            </p>
          </div>
        )}
      </Foco>
    );
  })
  .add('prop component', () => {
    return (
      <Foco
        onClickOutside={() => alert('click out')}
        component="div"
        style={{ border: '1px solid skyblue', textAlign: 'center' }}
      >
        <p>
          Hola! Component prop is provided. Clicks outside would trigger alerts
        </p>
      </Foco>
    );
  });
