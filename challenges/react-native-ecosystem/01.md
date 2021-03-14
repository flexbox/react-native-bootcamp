# React Native Ecosystem

## Learning objectives

- Install some VSCode extensions to become a 10x engineer
- Play with TypeScript
- Debug your application in real life scenarios

## 🥑 Before we start the exercise

- You should have VSCode installed
- You can star this repo [https://github.com/wcandillon/eslint-config-react-native-wcandillon](https://github.com/wcandillon/eslint-config-react-native-wcandillon) for typescript/eslint/prettier configuration

## 🤸‍♀️ Exercise 4.1

- [ ] Launch VS Code Quick Open (`cmd` + `p` or `ctrl` + `p`), paste the following command, and press enter.

```console
ext install dsznajder.es7-react-js-snippets dbaeumer.vscode-eslint nathanchapman.javascriptsnippets esbenp.prettier-vscode chakrounanas.turbo-console-log
```

- [ ] Go to **Code** (or **File**) > **Preferences** > **Settings**
      Search Format
      ✅ Editor: Format on save

## 🤸‍♀️ Exercise 4.2

Refactor `ExternalLink` a function component with TypeScript

- [ ] Go to `/src/exercice/04/ExternalLink.tsx`
- [ ] Refactor the component and use a function. Try to use `tsrnf`

### 🏋️‍♀️ Bonus

- [ ] Choose another component and repeat the process. The [Typescript cheatsheet](https://github.com/typescript-cheatsheets/react) may help.

## 🤸‍♀️ Exercise 4.3

- [ ] Setup StoryBook

You can have a look at the [`storybook-for-react-native` documentation](https://github.com/storybookjs/react-native#storybook-for-react-native) if you need.

```console
npx -p @storybook/cli sb init --type react_native
```

```console
? Do you want to install dependencies necessary to run Storybook server? // answer Yes
```

- [ ] Setup [TypeScript for storybook](https://storybook.js.org/docs/react/configure/typescript#dependencies-you-may-need)

```console
yarn add -D @types/storybook__react
```

- [ ] Change the entrypoint of the application

```javascript
// App.tsx
import { LoginScreen as App } from './src/exercice/01';
import StorybookUIRoot from './storybook';

// Should we show storybook instead of our app?
//
// ⚠️ Leave this as `false` when checking into git.
const SHOW_STORYBOOK = true;

const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
export default UI;
```

- [ ] Check if everything is working
- [ ] Create a new file `/storybook/stories/Card.stories.tsx`

```javascript
import React from 'react';
import { View } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

import { storiesOf } from '@storybook/react-native';

storiesOf('Card', module).add('default', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Card>
      <Card.Content>
        <Title>Do you like this exercice?</Title>
        <Paragraph>
          Component Driven Developement makes me feel happy because it's easy to
          debug
        </Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  </View>
));
```

- [ ] import your file in the stories index. In the Web it's automatic BUT in `react-native` you need to add components by hand.

```javascript
//storybook/stories/index.js

import './Card.stories.tsx';
```

- [ ] Run your app and try if it's working
- [ ] Create a new `Component.stories.tsx` and try to import antoher component

### 🏋️‍♀️ Bonus

- [ ] Create declaration files for your component. You have an example with `src/final/01/types.d.ts`

- [ ] Install theses fancy VSCode extensions and let me know what do you think

```console
ext install naumovs.color-highlight vincaslt.highlight-matching-tag 2gua.rainbow-brackets
```

## 🏅 Elaboration and Feedback

<div>
<span>After the exercice, if you want to remember what you've just learned, then </span>
<a rel="noopener noreferrer" target="_blank" href="https://airtable.com/shrBuZqOJL5UeLLF1?prefill_Name=React+Native+Ecosystem&prefill_Exercice=4">
  fill out the elaboration and feedback form.
</a>
</div>
