import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Dimensions } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { StackScreenProps } from '@react-navigation/stack';

const Mental = (nav: StackScreenProps<any, any>) => {
  return (
    <GestureRecognizer onSwipeLeft={() => nav.navigation.navigate('Home')}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Mental</Text>
        <Text style={styles.text}>Stress Levels</Text>
        <Text style={styles.text}>Self Medication</Text>
        <Text style={styles.text}>How much did you sleep?</Text>
        <Text style={styles.text}>Quality of sleep</Text>
        <Text style={styles.text}>What is your mood</Text>
        <Text style={styles.text}>What did you need to do today?</Text>
        <Text style={styles.text}>What did you not accomplish today?</Text>
        <Text style={styles.text}>Why did you not accomplish it?</Text>
      </SafeAreaView>
    </GestureRecognizer>
  );
};

export default Mental;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});
