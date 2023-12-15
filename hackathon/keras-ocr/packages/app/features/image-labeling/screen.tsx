import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import {
  useImageLabeler,
  ClassificationResult,
  AssetRecord,
} from "@infinitered/react-native-mlkit-image-labeling";


export function ImageLabelingScreen() {
  const MODELS: AssetRecord = {
    kerasOcr: {
      model: require("keras-ocr.tflite"),
      // options: {
      //   maxResultCount: 5,
      //   confidenceThreshold: 0,
      // },
    },
  };

  const model = useImageLabeler("keras-ocr");

  // const classificationResult = await model.classifyImage(image.uri);

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">keras-ocr</H1>

        <Separator />

      </YStack>


    </YStack>
  )
}