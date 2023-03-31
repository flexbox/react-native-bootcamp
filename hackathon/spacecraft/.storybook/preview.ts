import { View } from 'react-native';

export const decorators = [
  // Using a decorator to apply padding for every story
  (StoryFn) => (
    <View style={{flex:1, padding:8}}>
      <StoryFn />
    </View>
  ),
];

export const parameters = {
  my_param: 'anything',
};
