import round from 'lodash/round';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native-ui-lib';

export function PredictionList({ predictions = [] }) {
  const PercentageText = ({ value }) => {
    let color = '#cef7ae';
    if (value >= 5) {
      color = '#cef7ae';
    }
    if (value >= 10) {
      color = '#6bef95';
    }
    if (value >= 15) {
      color = '#4cdb6e';
    }
    if (value >= 20) {
      color = '#4bad53';
    }
    if (value >= 30) {
      color = '#4d8855';
    }
    if (value >= 40) {
      color = '#4c6553';
    }

    return <Text style={{ color: color }}>{value} %</Text>;
  };

  return (
    <View style={styles.container}>
      {predictions.map((prediction, i) => {
        const { className } = prediction;
        const percentage = round(prediction.probability * 100);

        return (
          <Text style={styles.text} key={`item-${i}`}>
            <Text text65>{className}</Text>{' '}
            <PercentageText value={percentage} />
          </Text>
        );
      })}
    </View>
  );
}

const margin = 24;

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    position: 'absolute',
    top: margin,
    left: margin,
    right: margin,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
  },
  text: {
    paddingVertical: 2,
    fontSize: 20,
  },
});
