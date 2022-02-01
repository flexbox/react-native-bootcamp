import React from 'react';
import { FlatList } from 'react-native';
import { HeroesListItem } from './HeroesListItem';

const DATA = [
  {
    avatar: 'https://picsum.photos/200/300',
    name: 'Random Name',
    urlTwitter: 'https://twitter.com',
    urlGithub: 'https://github.com/',
  },
  {
    avatar: 'https://picsum.photos/200/300',
    name: 'Zone de test',
    urlTwitter: 'https://twitter.com',
    urlGithub: 'https://github.com/',
  },
  {
    avatar: 'https://picsum.photos/200/300',
    name: 'Test de Zone',
    urlTwitter: 'https://twitter.com',
    urlGithub: 'https://github.com/',
  },
  {
    avatar: 'https://picsum.photos/200/300',
    name: 'Pas de Back-End',
    urlTwitter: 'https://twitter.com',
    urlGithub: 'https://github.com/',
  },
  {
    avatar: 'https://picsum.photos/200/300',
    name: 'Youpi',
    urlTwitter: 'https://twitter.com',
    urlGithub: 'https://github.com/',
  },
];

export const HeroesList = () => {
  const renderItem = ({ item }) => (
    <HeroesListItem
      avatar={item.avatar}
      name={item.name}
      urlGithub={item.urlGithub}
      urlTwitter={item.urlTwitter}
    />
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};
