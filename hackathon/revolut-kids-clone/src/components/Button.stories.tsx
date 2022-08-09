import { storiesOf } from "@storybook/react-native";
import React from "react";

import { Button } from "./Button";

storiesOf("Button", module)
  .addDecorator((fn) => <>{fn()}</>)
  .add("Button", () => (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </>
  ));
