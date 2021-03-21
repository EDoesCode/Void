import React from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

const Start = (nav: StackScreenProps<any, any>) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Void 🕳️</Text>
      <View style={styles.button}>
        <Text
          style={{ color: 'white', textAlign: 'center', fontSize: 20 }}
          onPress={() => nav.navigation.navigate('Home')}>
          Enter Void
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
  button: {
    width: 100,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 50,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 50,
  },
});
