import { Divider, List, ListItem } from '@ui-kitten/components';
import React from 'react';

import { allSounds } from '../api/data';

interface Props {}

const SoundList = (props: Props) => {
  const renderItem = ({ item }) => (
    <ListItem title={`${item.music.title}`} description={`${item.artist}`} />
  );

  return (
    <List
      data={allSounds}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};

export default SoundList;
