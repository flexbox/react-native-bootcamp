import { Camera } from 'expo-camera';
import React from 'react';
import { Button } from 'react-native-ui-lib';

import { LoadingView } from './src/LoadingView';
import { ModelView } from './src/ModelView';
import { useTensorFlowLoaded } from './src/useTensorFlow';

export default function App() {
  const isLoaded = useTensorFlowLoaded();
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission?.granted) {
    return (
      <LoadingView message="Camera permission is required to continue">
        <Button
          label="Grant permission"
          onPress={requestPermission}
          marginV-40
        />
      </LoadingView>
    );
  }

  if (!isLoaded) {
    return <LoadingView message="Loading TensorFlow" />;
  }

  return <ModelView />;
}
