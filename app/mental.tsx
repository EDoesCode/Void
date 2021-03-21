import React from 'react';
import {
  StyleSheet,
  Button,
  TextInput,
  Alert,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { StackScreenProps } from '@react-navigation/stack';

const Mental = (nav: StackScreenProps<any, any>) => {
  return (
    <GestureRecognizer onSwipeLeft={() => nav.navigation.navigate('Home')}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text
            style={{
              color: 'white',
              width: '100%',
              textAlign: 'center',
              fontSize: 50,
            }}>
            Mental Health
          </Text>
          <Text style={styles.text}>What are your stress levels?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>Have you self medicated today?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>Why did you self medicated today?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>How much did you sleep recently?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>What was your quality of sleep?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>What is your mood today?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>What are your todos todays?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>What did you accomplish today?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>What did you not accomplish today?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>
            Why did you not complete those todo today?
          </Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
              alignItems: 'center',
              justifyContent: 'center',
              width: Dimensions.get('window').width,
              height: 80,
            }}>
            <View
              style={{
                width: Dimensions.get('window').width / 3.5,
              }}>
              <Button
                title='Nuke'
                color='red'
                onPress={() =>
                  Alert.alert('Nuke In Progress', 'I am nuking your anxiety.')
                }
              />
            </View>
          </View>
        </ScrollView>
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
  input: {
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
});
