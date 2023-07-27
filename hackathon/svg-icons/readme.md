# svg-icons

> A DEMO application to demonstrate how to use `svgr/cli` to make React Native Components from SVG files.

- [link to the article](https://davidl.fr/blog/react-native-svg-icons-component)

## Demo

<img width="320" src="https://raw.githubusercontent.com/flexbox/react-native-bootcamp/2a8553c78eaadef2ce3ff874fb93ae716fc7fce7/challenges/assets/vector-demo.png">

## Usage

```jsx
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { AlienGun, RoboticHand, VrProgram } from "./src/components/icons";

export default function App() {
  return (
    <ScrollView>
      <VrProgram color={"red"} />
      <RoboticHand color={"blue"} />
      <AlienGun color={"green"} />
    </ScrollView>
  );
}
```
