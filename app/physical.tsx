import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Dimensions } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { StackScreenProps } from '@react-navigation/stack';

const Physical = (nav: StackScreenProps<any, any>) => {
  return (
    <GestureRecognizer onSwipeRight={() => nav.navigation.navigate('Home')}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>How much do you weight?</Text>
        <Text style={styles.text}>How tall are you?</Text>
        <Text style={styles.text}>How many calories have you eaten?</Text>
        <Text style={styles.text}>How much exercise had you done?</Text>
        <Text style={styles.text}>What type of exercise was it?</Text>
        <Text style={styles.text}>How much do you want to weight</Text>
        <Text style={styles.text}>How tall do you want to be?</Text>
        <Text style={styles.text}>How many calories do you want to eat?</Text>
        <Text style={styles.text}>What have you not done anything?</Text>
      </SafeAreaView>
    </GestureRecognizer>
  );
};

export default Physical;

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
