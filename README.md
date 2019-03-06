# react-foco

React component for handling clicks and focuses outside

- Takes care of children rendered in **react portals**
- Handles clicks and **focuses** outside
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
- `children` — children react elements
- `className` — class passed to wrapping node
- `style` — object with css properties passed to wrapping node

## Development

### Tests

- run storybook: `yarn storybook`
- run tests: `yarn test`
