import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Button,
  Alert,
  TextInput,
  ScrollView,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { StackScreenProps } from '@react-navigation/stack';

const Physical = (nav: StackScreenProps<any, any>) => {
  return (
    <GestureRecognizer onSwipeRight={() => nav.navigation.navigate('Home')}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text
            style={{
              color: 'white',
              width: '100%',
              textAlign: 'center',
              fontSize: 50,
            }}>
            Physical Health
          </Text>
          <Text style={styles.text}>How much do you weight?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>How tall are you?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>
            How many calories have you eaten today?
          </Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>How much exercise had you done today?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>What type of exercise was it?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>What is your weight goal?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>Why is your weight goal important?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>How tall do you want to be?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>Why is your height goal important?</Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>
            How many calories do you want to eat per day?
          </Text>
          <TextInput maxLength={200} multiline style={styles.input} />
          <Text style={styles.text}>Why is your calorie goal important?</Text>
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

export default Physical;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    marginTop: 5,
  },
  input: {
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
});
