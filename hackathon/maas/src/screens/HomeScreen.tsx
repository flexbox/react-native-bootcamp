import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import { FlatList } from "react-native";

import { useMemes } from "../hooks/useMemes";
import LoadingBox from "../components/LoadingBox";
import ErrorBox from "../components/ErrorBox";
import MemeCard from "../components/MemeCard";

const HomeScreen = () => {
  const { isLoading, isError, data } = useMemes();

  if (isLoading) {
    return <LoadingBox />;
  }
  if (isError) {
    return <ErrorBox />;
  }

  const renderItem = ({ item }) => {
    return <MemeCard meme={item} />;
  };

  console.log(
    "file: HomeScreen.tsx ~ line 10 ~ HomeScreen ~ data.data.memes",
    data.data.memes
  );

  return (
    <Layout style={{ flex: 1 }}>
      <FlatList
        data={data.data.memes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Layout>
  );
};

export default HomeScreen;
