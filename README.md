# react-foco

React component for handling clicks and focuses outside, which works with portals

[Demo](https://codesandbox.io/s/wy8n9koxo7)

## Changelog

https://github.com/nanot1m/react-foco/releases

## Usage

```javascript
import React from "react";
import { createPortal } from "react-dom";
import Foco from "react-foco";

const MyComponent3000 = () => (
  <Foco
    onClickOutside={() => console.log("Click Outside")}
    onFocusOutside={() => console.log("Focus Outside")}
  >
    <div style={{ background: "hotpink", padding: 50 }}>
      <button>Click Me</button>
      {createPortal(<MyAnotherComponent />, portalNode)}
    </div>
  </Foco>
);
```

## API

### Props

* `onClickOutside` — function called on clicks outside of wrapping nodes
* `onFocusOutside` — function called on focus outside of wrapping nodes
* `children` — children react elements
* `className` — class passed to wrapping node
* `style` — object with css properties passed to wrapping node

## Development

### Tests

* run storybook: `yarn storybook`
* run tests: `yarn test`
