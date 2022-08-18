import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";

import { Button } from "./Button";

storiesOf("Button", module)
  .addDecorator((fn) => <>{fn()}</>)
  .add("Button", () => (
    <View className="p-4">
      <Button>No variant</Button>
    </View>
  ))
  .add("Variants", () => (
    <View className="p-4">
      <Button variant="dark" styles="mb-4">
        Dark
      </Button>
      <Button variant="light" styles="mb-4">
        Light
      </Button>
      <Button variant="filled" styles="mb-4">
        Filled
      </Button>
      <Button variant="outline" styles="mb-4">
        Outline
      </Button>
      <Button variant="ghost" styles="mb-4">
        Ghost
      </Button>
      <Button>no variant</Button>
    </View>
  ));
