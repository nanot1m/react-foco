import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Foco from '../../src';
import { Tooltip } from './Tooltip';

storiesOf('Tooltip', module)
  .add('sample', () => <DemoScene count={1} />)
  .add('with_scroll', () => <DemoScene count={20} />);

const DemoScene = ({ count = 0 }: { count: number }) => (
  <>
    <h1>User List</h1>
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      <div
        style={{
          overflowY: 'scroll',
          overflowX: 'hidden',
          maxHeight: 400,
          width: 250,
          borderRadius: 10,
          boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
        }}
      >
        <div style={{ margin: -1 }}>
          {getUsers(count).map((x, i) => <Item name={x} key={i} />)}
        </div>
      </div>
      <div style={{ maxWidth: 460, marginLeft: 20 }}>
        <p>
          User list has <code>overflow-y: scroll</code> and{' '}
          <code>overflow-x: hidden</code>. Tooltips are rendered as last child
          of body, with <b>ReactDOM.createPortal</b> api. Other way they will be
          hidden in case of overflow
        </p>
        <p>
          <i>Foco</i> component handles clicks and focuses outside, taking care
          of portals
        </p>
      </div>
    </div>
  </>
);

interface ItemProps {
  name: string;
}

interface ItemState {
  anchor: HTMLElement | null;
}

class Item extends React.Component<ItemProps, ItemState> {
  public state: ItemState = {
    anchor: null
  };

  public render() {
    return (
      <div
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          padding: '10px 20px 8px',
          border: '1px solid #dfdede',
          marginBottom: -1
        }}
      >
        <span>{this.props.name}</span>
        <Foco
          onClickOutside={this.closeTooltip}
          onFocusOutside={this.closeTooltip}
        >
          <button onClick={this.handleClick}>Edit</button>
          {this.state.anchor && (
            <Tooltip anchor={this.state.anchor}>
              <label>
                <input type="checkbox" /> Is admin
              </label>
            </Tooltip>
          )}
        </Foco>
      </div>
    );
  }

  private closeTooltip = () => {
    return this.setState({ anchor: null });
  };

  private handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    this.setState(state => {
      if (state.anchor) {
        return { anchor: null };
      }
      return { anchor: target };
    });
  };
}

function getUsers(count: number) {
  const Names: string[] = [
    'Chasidy',
    'Remedios',
    'Warner',
    'Spencer',
    'Malissa',
    'Benton',
    'Jeni',
    'Jeremiah',
    'Kori',
    'Mardell',
    'Marcelina',
    'Rosamond',
    'Lorriane',
    'Artie',
    'Bunny',
    'Loren',
    'Jame',
    'Sonny',
    'Keith',
    'Jon'
  ];
  const Surnames: string[] = [
    'Sherrard',
    'Rustin',
    'Schomer',
    'Alvares',
    'Sindelar',
    'Vanarsdale',
    'Wrobel',
    'Tolman',
    'Ellerman',
    'Ayala',
    'Comes',
    'Bungard',
    'Vine',
    'Markus',
    'Light',
    'Tait',
    'Batt',
    'Steedley',
    'Calico',
    'Boissonneault'
  ];

  const getRandName = () => Names[Math.floor(Math.random() * Names.length)];
  const getRandSurname = () =>
    Surnames[Math.floor(Math.random() * Surnames.length)];

  return Array(count)
    .fill(0)
    .map((_: any, index: number) => `${getRandName()} ${getRandSurname()}`);
}
