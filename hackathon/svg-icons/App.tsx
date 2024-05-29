import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import {
  AlienGun,
  ArRobot,
  Astronaut,
  Cloning,
  FetalCloning,
  FlyingCar,
  HolographicCityModel,
  RoboticHand,
  SmartCar,
  VrProgram,
} from "./src/components/icons";

export default function App() {
  return (
    <ScrollView>
      <VrProgram color={"red"} />
      <RoboticHand color={"blue"} />
      <AlienGun color={"green"} />
      <ArRobot color={"yellow"} />
      <Astronaut color={"purple"} />
      <Cloning color={"orange"} />
      <FetalCloning color={"pink"} />
      <FlyingCar color={"brown"} />
      <HolographicCityModel color={"black"} />
      <SmartCar color={"red"} />
    </ScrollView>
  );
}
