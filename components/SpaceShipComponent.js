/*
Done by Mohammed Bajaman, CIT - Set3B
ACIT-3650 Web and Mobile App Dev 

Only contains the Spaceship component. The spaceship was originally made to move side by side on user touch.
Due to compatibility issues between SwipeComponent and the spaceship, that functionality was removed.
*/

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet, Animated, Dimensions} from 'react-native';

export default class SpaceShipComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
        	positionY: new Animated.Value(0)			// Initial position Value
    	};
	}

	componentDidMount() {
		Animated.timing(								// Animate value over time	
			this.state.positionY, 						// The value to drive
			{ 											
		        toValue: 1,
		        duration: 15000,
		        useNativeDriver: true
	    	}).start()
	}

	render(){
		const positionY = this.state.positionY.interpolate({ 			// The interpolate function helps in delivering a range of values
			inputRange:[0,1],											// The input value range
			outputRange:[800,-900]										// The output values to be generated as values are created between 0-1
		});

		const spin = this.state.positionY.interpolate({  
			    inputRange: [0, 0.75],
			    outputRange: ['0deg', '360deg']
	  	});

		return(
                <Animated.View style={{
                	width: 75,
					height: 75,
	                top: Window.height*0.7, 
	                left: (Window.width/2) - 35, 
	                transform:[{translateY: positionY}]					// Linear motion upwards *[800,-900] is upwards*
            	}} >
                	<Animated.Image
		                style={{
		                	width: 75,
							height: 75,
							top:10,
							resizeMode: 'contain',
							transform:[{rotateY: spin}]					// Rotates the image along its X-Axis
						}}
		                source={require('../images/spaceship.png')}
                	/>
            	</Animated.View>
		);
	}
}

const Window = Dimensions.get('window');								// Provides values based on device screen dimensions.
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    ship:{
		width: 75,
		height: 75,
		top:10,
		resizeMode: 'contain',
    }
});