# Detector

- Identify objects in real time using `@tensorflow/tfjs`, `expo-camera`, and `expo-gl` (for native acceleration).
- You can swap out `@tensorflow-models/mobilenet` for another [TensorFlow model](https://github.com/tensorflow/models/blob/master/research/slim/nets/mobilenet_v1.md) to achieve different results.

Thanks to @EvanBacon @byCedric [for the example](https://github.com/expo/examples/blob/master/with-tfjs-camera/App.js).

## Result

![React Native with with Tensorflow JS](./assets/example.gif)

Scan the [QR Code from my expo account](https://expo.dev/@flexbox/detector).

## Getting Started

```console
yarn
yarn start
```

Then scan the QR Code and use your `iOS|android` device

## Notes

- [TFJS Expo API reference](https://js.tensorflow.org/api_react_native/latest/#Media-Camera)
- [`@tensorflow/tfjs-react-native` package](https://www.npmjs.com/package/@tensorflow/tfjs-react-native)
- [Expo Camera docs](https://docs.expo.dev/versions/latest/sdk/camera/)
- [Icon](https://thenounproject.com/icon/radar-2808903/)
