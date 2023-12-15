import type AssetRecord from "@infinitered/react-native-mlkit-image-labeling";
import {
  useImageLabeler,
  ClassificationResult,
} from "@infinitered/react-native-mlkit-image-labeling";

import Box from "./Box";
import Text from "./Text";

export function ImageLabelingScreen(props) {
  //  const file = require("./keras-ocr.tflite");

  const file = require("../../assets/icon.png");
  console.log(
    "🚀 ~ file: ImageLabeling.tsx:17 ~ ImageLabelingScreen ~ file:",
    file
  );

  const MODELS = {
    kerasOcr: {
      model: file,
      // options: {
      //   maxResultCount: 5,
      //   confidenceThreshold: 0,
      // },
    },
  };

  // const model = useImageLabeler("keras-ocr");

  // const classificationResult = await model.classifyImage(image.uri);

  return (
    <Box>
      <Text variant="header">keras-ocr</Text>
    </Box>
  );
}
