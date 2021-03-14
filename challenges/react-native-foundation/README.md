# React Native Foundations

## Learning objectives

- Use a real device to feel the "React Native way of working"™️
- Discover [React Native Core Components and APIs](https://reactnative.dev/docs/components-and-apis)
- Using a [UI library `react-native-paper`](https://callstack.github.io/react-native-paper/)

## 🥑 Before we start the exercise

- You should have an `https://expo.io` account with **Expo Go** on your phone.
- `react-native-paper` is already included by default in Snack.

## 🤸‍♀️ Exercise 1 - [Use snack to code from a webbrowser](https://snack.expo.io)

We are going to start by creating a Login screen.

![Login Preview](./login.png)

- [ ] Go to [Expo Snack](https://snack.expo.io) and create the Screen from Scratch
- [ ] Use the `TextInput` component [from `react-native-paper`](https://callstack.github.io/react-native-paper/text-input.html)
- [ ] Use the `Button` component [from `react-native-paper`](https://callstack.github.io/react-native-paper/button.html)

## 🤸‍♀️ Exercise 2 - Use VSCode to code from your computer

- [ ] Paste your LoginScreen from the exercice 1 Snack into `src/exercice/01/LoginScreen.tsx`
- [ ] Got to `App.tsx` and change the screen from `LoginScreen` to `TermsScreen`.
- [ ] There is a bug in `src/exercice/01/TermsScreen.tsx`, it can't display all the content. You need to change the View so it has scroll.

Nice! We've got our first view with a scroll.
Next it's going to use a more performant scroll for long lists.

- [ ] Got to `App.tsx` and change the screen from `TermsScreen` to `TimelineScreen`.
- [ ] Go to `src/exercice/01/TimelineScreen.tsx`, you should have a "stringifyied" version of timeline data
- [ ] Implement a `FlatList` for the data that is fetched.
  - [ ] Add some dummy data with `data={timeline}`
  - [ ] Render `TweetItem` with `renderItem={this.renderItem}`

### 🏋️‍♀️ Bonus

You can use the following icons [https://docs.expo.io/guides/icons/](https://docs.expo.io/guides/icons/)

- [ ] Add likes and retweets to each tweet in the `FlatList`.
- [ ] Create your custom `TextInput` and `Button` component

## 🏅 Elaboration and Feedback

<div>
<span>After the exercice, if you want to remember what you've just learned, then </span>
<a rel="noopener noreferrer" target="_blank" href="https://airtable.com/shrBuZqOJL5UeLLF1?prefill_Name=React+Native+Founddations&prefill_Exercice=1">
  fill out the elaboration and feedback form.
</a>
</div>
