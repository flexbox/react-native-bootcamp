import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import {
  StreamApp,
  FlatFeed,
  Activity,
  LikeButton,
  StatusUpdateForm,
} from 'expo-activity-feed';
import config from './config';

function CustomActivity(props) {
  return <Activity {...props} Footer={<LikeButton {...props} />} />;
}

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
        <StreamApp
          apiKey={config.GETSTREAM_API_KEY}
          appId={config.GETSTREAM_APP_ID}
          token={config.GETSTREAM_API_TOKEN}
        >
          <FlatFeed
            feedGroup="timeline"
            userId="user-one"
            Activity={CustomActivity}
            notify
          />
          <StatusUpdateForm feedGroup="timeline" />
        </StreamApp>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
