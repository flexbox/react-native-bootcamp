import React from 'react';
import { Hero } from './Hero';
import { SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import theme from '../theme/theme';
import Box from './Box';
import { Paragraph } from 'react-native-paper';

const HEROES_QUERY = gql`
  query MyQuery {
    heroes(order_by: { id: asc }) {
      avatar_url
      counter
      full_name
      github_username
      twitter_username
      id
    }
  }
`;

export const HeroesList = () => {
  const { error, data } = useQuery(HEROES_QUERY);

  if (error) {
    <Box>
      <Paragraph>Sorry we encounter an error</Paragraph>
    </Box>;
  }

  const renderItem = ({ item }) => <Hero item={item} />;

  return (
    <SafeAreaView>
      {data ? (
        <FlatList
          data={data.heroes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <ActivityIndicator
          size="large"
          color={theme.colors.activityIndicator}
        />
      )}
    </SafeAreaView>
  );
};
