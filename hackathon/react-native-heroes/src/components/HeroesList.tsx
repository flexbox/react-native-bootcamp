import React from "react";
import { SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import { useQuery } from "@apollo/client";
import { Paragraph } from "react-native-paper";

import theme from "../theme/theme";
import { HEROES_QUERY } from "../../graphql/queries";

import { Box } from "./Box";
import { HeroesListItem } from "./HeroesListItem";
import type { HeroProps } from "./HeroesListItem";

export const HeroesList = () => {
  const { error, data } = useQuery(HEROES_QUERY);

  if (error) {
    <Box>
      <Paragraph>Sorry we encounter an error</Paragraph>
    </Box>;
  }

  const renderItem = ({ item }: HeroProps) => <HeroesListItem item={item} />;

  return (
    <SafeAreaView>
      {data ? (
        <FlatList
          style={{
            marginBottom: 50,
          }}
          data={data.heroes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <ActivityIndicator
          size="large"
          color={theme.colors.activityIndicator}
          style={{ marginTop: 50 }}
        />
      )}
    </SafeAreaView>
  );
};
