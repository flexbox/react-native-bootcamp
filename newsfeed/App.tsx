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

const CustomActivity = (props) => {
  return <Activity {...props} Footer={<LikeButton {...props} />} />;
};

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
        <StreamApp
          apiKey="5bq9jc7ug7u6"
          appId="104177"
          token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.qKThhr6Qao2ehI92srNvrBQRlnl-gs_AB-fSA4FauXk"
        >
          <FlatFeed
            feedGroup="timeline"
            userId="user-one"
            Activity={CustomActivity}
          />
          <StatusUpdateForm feedGroup="timeline" />
        </StreamApp>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
