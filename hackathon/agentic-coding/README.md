# Agentic Coding

A mobile chat app that feels like using a coding agent: you send a prompt and watch the agent stream its reasoning, tool calls (`Read`, `Grep`, `Edit`, `Bash`), and diffs.

The chat screen is built on `KeyboardChatScrollView` from [react-native-keyboard-controller](https://kirillzyusko.github.io/react-native-keyboard-controller/blog/chat-scroll-view):

- `keyboardLiftBehavior="persistent"` lifts the conversation when the keyboard opens and keeps it in place when the keyboard closes, like the Claude app.
- `blankSpace` reserves room below a new prompt, so the prompt sits at the top of the screen while the answer streams in underneath.
- `extraContentPadding` follows the composer's height, so the last message is never hidden behind it.

The agent lives in `src/agent/mock-agent.ts` and replays a fixed script. Replace `runAgent` with a real model call when you're ready.

## Run it

`react-native-keyboard-controller` contains native code, so you need a development build. The app does not run in Expo Go.

```console
npm install
npx expo run:ios     # or npx expo run:android
```
