/*
Done by Mohammed Bajaman, CIT - Set3B
ACIT-3650 Web and Mobile App Dev 
*/

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper-animated';

import AsteroidComponent from './AsteroidComponent'; 
import SpaceShipComponent from './SpaceShipComponent';
import SplashComponent from './SplashComponent';

export default () => 
<Swiper 				//Provides animated views
  style={styles.wrapper}
  smoothTransition
  loop>

  <View style={styles.slide1}>
    <Text style={styles.text}> HELLO! {"\n"}Swipe Right {"\n"} to move ahead {"\n"} Left to head back {"\n"} :) </Text>
  </View>

  <View style={styles.splashContainer}>
    <SplashComponent />
  </View>

  <View style={styles.slide2}>
    <Text style={styles.text}>Brace yourself on the starry road ahead!!</Text>
  </View>

  <View style={styles.container}>
        <View style={styles.bgContainer}>
          <Image style={styles.bgImage} source={require('../images/background.jpg')} />
        </View>
        <View style={styles.asteroidContainer}>
          <AsteroidComponent />
        </View>
        <View style={styles.shipContainer}>
          <SpaceShipComponent />
        </View>
    </View>

  <View style={styles.slide3}>
    <Text style={styles.text}>Feel free to go back and have another look at the animations :D</Text>
  </View>

</Swiper>;


//Contains styling for all views as well as their contents. Including animated elements.
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#000105',
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141624',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#300135',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002335',
  },

  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    backgroundColor: '#fff'
  },

  bgContainer: {
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%'
  },

  asteroidContainer:{
    position:'absolute',
    height:'100%',
    width:'100%',
  },

  shipContainer:{
    position: 'absolute',
    height:'100%',
    width:'100%'
  },

  splashContainer:{
    flex:1,
    position:'absolute',
    backgroundColor: '#262626',
    height:'100%',
    width:'100%'
  },

  bgImage: {
    height:'100%',
    width:'100%',
    flex:1,
    resizeMode: 'stretch'
  },
  
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center'
  },
});