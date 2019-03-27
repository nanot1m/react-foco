# react-foco

React component for handling clicks and focuses outside

- Handles clicks and **focuses** outside
- Takes care of children rendered in **react portals**
- **Small** — less then 600b minified and gzipped, has no dependencies
- TypeScript friendly

```javascript
import Foco from 'react-foco';

const MyComponent3000 = () => (
  <Foco
    onClickOutside={() => console.log('Click Outside')}
    onFocusOutside={() => console.log('Focus Outside')}
  >
    <button>Click Me</button>
    {React.createPortal(<MyAnotherComponent />, portalNode)}
  </Foco>
);
```

[Demo](https://codesandbox.io/s/wy8n9koxo7)

## Changelog

https://github.com/nanot1m/react-foco/releases

## API

### Props

- `onClickOutside` — function called on clicks outside of wrapping nodes
- `onFocusOutside` — function called on focus outside of wrapping nodes
- `render` — prop allows for inline rendering foco content
- `className` — class passed to wrapping node
- `style` — object with css properties passed to wrapping node
- `children` — children react elements or function the same as prop `render`
- `component` — component or tag which is used to render wrapper node

### Render Props

This prop are passed for callback in props render or children

- `className?: string` — class name provided from Foco component
- `style?: React.CSSProperties` — styles provided from Foco component
- `onMouseDown: React.MouseEventHandler` — handler for checking clicks outside
- `onFocus: React.FocusEventHandler` — handler for checking focuses outside
- `onTouchStart: React.TouchEventHandler` — handler for checking touches outside

### Render-prop example

```jsx
function MyComponent() {
  return (
    <Foco onClickOutside={() => alert('click out')}>
      {wrapperProps => (
        <div
          {...wrapperProps}
          style={{ border: '1px solid skyblue', textAlign: 'center' }}
        >
          <p>Hola! Clicks outside would trigger alerts</p>
        </div>
      )}
    </Foco>
  );
}
```

## Development

### Tests

- run storybook: `yarn storybook`
- run tests: `yarn test`
