# React Native Hackathon

To ship your first app, you should have completed all the previous challenges: **foundations**, **data management**, **ecosystem**, **navigation** and **releases**.

## Ideas

Today's challenge is to build an application. You can use an external API, which you can find in the [resource section](#ressources), or use local data (e.g. a music player with a `.mp3`).

Here is a list of ideas for inspiration:

- Rick and Morty episode tracker with [rickandmortyapi](https://rickandmortyapi.com/)
- A video game collection [companion app with igdb](https://api-docs.igdb.com/)
- A weather application called "Umbrella or Not" with [the api open-meteo](https://open-meteo.com/)

And some working examples:

- [Product Hunt clone with Hasura](https://github.com/flexbox/react-native-bootcamp/tree/main/hackathon/react-native-heroes) by @MatthysDev
- [Machine Learning mobile](https://github.com/flexbox/machine-learning-with-javascript/tree/master/vision) application by @flexbox


## Getting Started on the Hackathon day

Don't jump into coding right away; take 30 minutes to an hour to plan what you need to accomplish by the end of the day. At the end, you should have a functioning application. Keep it concise. Focus on one feature, but make sure it's done well 😀.

- [ ] Choose a UI framework
- [ ] Select an external API
- [ ] Open [excalidraw](https://excalidraw.com/) to assemble a plan of your screens

## Time to code

Now that you have a plan, it's time to start coding. You should have a basic understanding of the React Native library. If you need help, feel free to refer to the [resource section](#ressources). Good luck and have fun!

- [ ] Run the CLI

```console
# Vanilla React Native
npx react-native init awesome-app
npx ignite-cli new awesome-app

# Expo-powered
npx create-expo-app --template
npx create-react-native-app
npx ignite-cli new awesome-app --expo

# Scaffold React Native libraries
npx create-react-native-library react-native-awesome-lib
```

- [ ] Use a `curl` to save local `.json` data (_to render simple components if you encounter issues to connect the api_.)
- [ ] Fetch data over the network with `react-query`
- [ ] Before the end of the day, ship your app to your expo account with `expo publish` like [`@flexbox/detector`](https://expo.dev/@flexbox/detector)

**Hint:** If you want to know how to add and API with an auth token, have a look at this PR to [add `.env` and Authorization token with `react-query`](https://github.com/flexbox/react-native-bootcamp/pull/76).

## Ressources

### React Native UI frameworks

- [KittenUI](https://akveo.github.io/react-native-ui-kitten/docs/guides/getting-started#manual-installation)
- [React Native Elements](https://reactnativeelements.com/docs/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [lordicon](https://lordicon.com/)
- or [many more...](https://github.com/flexbox/react-native-bootcamp/tree/main/hackathon/ui-tier-list)

### Data

- [public-apis GitHub](https://github.com/public-apis/public-apis)
- [public-apis website](https://public-apis.io/)
- [Universal Micro Services](https://m3o.com/explore)

### Community

- [React Native Community](https://github.com/react-native-community)
- [React Native Directory](https://reactnative.directory/)
- [Mobbin Design](https://mobbin.design/)

## 🚀 Spread The World

Once you have a functioning application, it's time to share it with the world. You can do this through online platforms like GitHub, Expo, and other app stores. You can also share it with friends and family, or use it for yourself.


The fastest way for now is to use the expo Go feature
```
expo login
expo publish
```

Sharing your app is an essential step for any developer, so don't forget to take the time and make sure it's done correctly.

Feel free to open a pull request! [Edit this file with your app example](https://github.com/flexbox/react-native-workshop/tree/main/hackathon) on the Ideas section.
