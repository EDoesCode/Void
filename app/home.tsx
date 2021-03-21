import React, { useState } from 'react';
import {
  Button,
  Dimensions,
  TextInput,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';
import GestureRecognizer from 'react-native-swipe-gestures';

const Home = (nav: StackScreenProps<any, any>) => {
  //Main text
  const [mainText, setMainText] = useState();

  //Mental text
  const [stressLevel, setStressLevel] = useState();
  const [selfMedication, setSelfMedication] = useState();
  const [whyMedication, setWhyMedication] = useState();
  const [sleepLevel, setSleepLevel] = useState();
  const [sleepQuality, setSleepQuality] = useState();
  const [mood, setMood] = useState();
  const [todoList, setTodoList] = useState();
  const [accomplished, setAccomplished] = useState();
  const [stillTodo, setStillTodo] = useState();
  const [whyStillTodo, setWhyStillTodo] = useState();

  //Physical text
  const [currentWeight, setCurrentWeight] = useState();
  const [currentHeight, setCurrentHeight] = useState();
  const [currentCalories, setCurrentCalories] = useState();
  const [currentExercise, setCurrentExercise] = useState();
  const [currentExerciseType, setCurrentExerciseType] = useState();
  const [desiredWeight, setDesiredWeight] = useState();
  const [whyDesiredWeight, setWhyDesiredWeight] = useState();
  const [desiredHeight, setDesiredHeight] = useState();
  const [whyDesiredHeight, setWhyDesiredHeight] = useState();
  const [desiredCalories, setDesiredCaloreis] = useState();
  const [whyDesiredCalories, setWhyDesiredCalories] = useState();

  return (
    <GestureRecognizer
      onSwipeLeft={() => nav.navigation.navigate('Physical')}
      onSwipeRight={() => nav.navigation.navigate('Mental')}>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            color: 'white',
            width: '100%',
            textAlign: 'center',
            fontSize: 50,
          }}>
          Void
        </Text>
        <View>
          <Text style={{ color: 'white', marginLeft: 10 }}>
            Write anything that is causing you anxiety, worries, or depression:
          </Text>
          <TextInput
            multiline
            style={{
              borderWidth: 1,
              borderColor: 'white',
              height: '80%',
              margin: 10,
              color: 'white',
              textAlign: 'justify',
              textAlignVertical: 'top',
              padding: 10,
              borderRadius: 10,
            }}
          />
          <View style={styles.simpleNav}>
            <View style={styles.buttons}>
              <Button
                color='green'
                title='Mental'
                onPress={() => nav.navigation.navigate('Mental')}
              />
            </View>
            <View style={styles.buttons}>
              <Button
                color='red'
                title='Nuke'
                onPress={() =>
                  Alert.alert('Nuke In Progress', 'I am nuking your anxiety.')
                }
              />
            </View>
            <View style={styles.buttons}>
              <Button
                color='grey'
                title='Physical'
                onPress={() => nav.navigation.navigate('Physical')}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </GestureRecognizer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  simpleNav: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    height: 80,
  },
  buttons: {
    width: Dimensions.get('window').width / 3.5,
    marginRight: 5,
    marginLeft: 5,
  },
});
