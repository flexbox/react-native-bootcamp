import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight } from "react-native";

export default function Card({ onPress, children }) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}
