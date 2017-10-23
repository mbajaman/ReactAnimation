/*
Done by Mohammed Bajaman, CIT - Set3B
ACIT-3650 Web and Mobile App Dev 

Animation Assignment 1 - Creating an app with animation present inside it. Using 3rd party libraries,
features and much more.

IMPORTANT NOTE: SEE THE README FOR INFORMATION ON HOW TO RUN. YOU MAY BE REQUIRED TO DO A 'npm install' PRIOR TO RUNNING THE APPLICATION
DUE TO USE OF THIRD PARTY LIBRARIES AS WELL AS FIX AN ERROR IN ONE OF THE LIBRARIES

*/
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';

//Importing swiping component which allows for animated interaction with views and its contents,
import SwipeComponent from './components/SwipeComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <SwipeComponent />
      </View>    
    );
  }
}

const Window = Dimensions.get('window');      //Provides values based on device screen dimensions.
const styles = StyleSheet.create({            //StyleSheet to store styling information for various elements.
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    backgroundColor: '#fff'
  }
});