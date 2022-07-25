# React 7-Segment Display

A React component that simulates a 7-segment display.

![Display demo](./assets/Display.gif)

## Usage

### Installation

`npm install react-7-segment-display`

### Adding the component to your project

```jsx
import { Display } from "react-7-segment-display";

const App = () => <Display count="2" value="77" />;

export default App;
```

## Props

| Name           | Decription                                   | Type      | Default value |
| -------------- | -------------------------------------------- | --------- | ------------- |
| value          | Value displayed on the display               | `any`     | `null`        |
| color          | Color of the display segments when turned on | `string`  | `"red"`       |
| height         | Total height of the display digits           | `number`  | `250`         |
| count          | Amount of digits on the display              | `number`  | `2`           |
| bakgroundColor | Color of the background                      | `string?` | n/a           |

## License

MIT License
