import React, { useState } from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";

import AppLayout from "../components/AppLayout";

const PilotScreen = () => {
  const [display, setDisplay] = useState(false);

  const handlePress = () => {
    setDisplay(!display);
  };

  return (
    <AppLayout title="Pilot">
      {display ? <Text>MODAL</Text> : <Text>RIEN</Text>}

      <Button onPress={handlePress}>Press</Button>
    </AppLayout>
  );
};

export default PilotScreen;
