# svg-icons

> A DEMO application to demonstrate how to use `svgr/cli` to make React Native Components from SVG files.

- [link to the article](https://davidl.fr/blog/react-native-svg-icons-component)

## Demo

<img width="320" src="https://user-images.githubusercontent.com/81434852/160851859-8a8d7aa1-224d-4974-9782-4390b733bc8a.png">

## Usage

```jsx
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  AlienGun,
  RoboticHand,
  VrProgram,
} from "./src/components/icons";

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
