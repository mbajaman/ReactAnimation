/*
Done by Mohammed Bajaman, CIT - Set3B
ACIT-3650 Web and Mobile App Dev 
*/

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Animated, StyleSheet, Easing} from 'react-native';

export default class AsteroidComponent extends Component {

	constructor() {
		super();
		this.state = {
			positionY: new Animated.Value(0),  			// Initial position Value
		}
	}

	componentDidMount() {
		Animated.sequence([
			Animated.timing(                            // Animate value over time
			  this.state.positionY,                    	// The value to drive
			  {
			    toValue: 1,     						// Animate to final value of 1
			    duration:25000,							// Duration of the animation.
			    easing: Easing.linear,					
			    useNativeDriver: true					// Helps run animations more smoothly on devices. Not to be used in every situation
	  		})
		]).start()
	}

	render(){
		const positionY = this.state.positionY.interpolate({		// The interpolate function helps in delivering a range of values
			inputRange:[0,1],			// The input value range
			outputRange:[0,7000]		// The output values to be generated as values are created between 0-1
		});

		var asteroids = []				// Stores all asteroid elements in an array. 
										// This will later be called in render which creates the streams of asteroids

  		for(let i=0; i < 65; i++){		// This loop iterates 65 times to create and store 65 asteroids insdie the array asteroids.
		   var minRot = 0;				// Minimim Rotation Value
		   var maxRot = 360;				// Maximum Rotation Value
		   var randRot =  minRot + (Math.random() * (maxRot-minRot));  //A Random rotation value is generated to create the random rotaion on asteroid making them unique

			const spin = this.state.positionY.interpolate({  
			    inputRange: [0, 1],
			    outputRange: [randRot+'deg', randRot+720+'deg']
	  		});

		    var randImg = Math.floor(Math.random() * 3)		// Used for generating and rounding 
		    												// a random value between 0-2 to help select different types of asteroids

		    if(randImg == 0){
		    	var img = require('../images/asteroid.png')
		    } else if (randImg == 1){
		    	var img = require('../images/asteroid1.png')
		    } else if (randImg == 2){
		    	var img = require('../images/asteroid2.png')
		    }


		   var minX = 0;			// Minimum spawn distance on the X Axis
		   var maxX = 425;			// Maximum spawn distance on the X Axis
		   var randX =  Math.floor(minX + (Math.random() * (maxX-minX)));		//Random value is generated to randomize the asteroids location along the X-axis

			asteroids.push(
			<Animated.View  //The views and asteroid elements are created and pushed into the array.
				key= {i} style={{
					width:70, 
					height:70, 
					top:-5300, 
					left:randX , //Random X value
					transform:[{translateY: positionY}]  // Linear motion downwards
				}}
			>
				<Animated.Image
			        style={{
			          width: 60,
			          height: 60,
			          top:10,
			          resizeMode: 'contain',
			          transform:[{rotate: spin}] //Rotatory motion along its axis
			      	}}
			        source={img} //Random asteroid type (image)
			    />
			</Animated.View>
			)
		}

		return(
			<View>
				{asteroids} 
			</View>
		);
	}
}