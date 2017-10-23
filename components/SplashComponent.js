/*
Done by Mohammed Bajaman, CIT - Set3B
ACIT-3650 Web and Mobile App Dev 
*/

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Animated, Dimensions, StyleSheet} from 'react-native';
import Animation from 'lottie-react-native';

export default class LottieComponent extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	progress: new Animated.Value(0),
	    };
 	}
 	
 	componentDidMount() {
 		Animated.loop(
 			Animated.timing(this.state.progress, {
	        toValue: 1,
	        duration: 5000,
	        useNativeDriver: true
	    	}),
 			{ iteration:5 }
 		).start();
    } 

	render(){
		return(
			//List of animations used from 3rd party resources. 
			<View style={styles.container}>
				<Animation
			        style={styles.splash}
			        source={require('../animations/kog.json')}
			        progress={this.state.progress}
			    />
			    <Animation
			        style={styles.splash2}
			        source={require('../animations/loader.json')}
			        progress={this.state.progress}
			    />
			    <Animation
			        style={styles.splash3}
			        source={require('../animations/loader.json')}
			        progress={this.state.progress}
			    />
			    <Animation
			        style={styles.splash4}
			        source={require('../animations/servishero_loading.json')}
			        progress={this.state.progress}
			    />
			    <Animation
			        style={styles.splash5}
			        source={require('../animations/3d_rotate_loading_animation.json')}
			        progress={this.state.progress}
			    />
			    <Animation
			        style={styles.splash6}
			        source={require('../animations/emoji_wink.json')}
			        progress={this.state.progress}
			    />
		    </View>
		);
	}
}

//
const Window = Dimensions.get('window');			//Provides values based on device screen dimensions.

const styles = StyleSheet.create({
	container:{
		width:'100%',
		height:'100%'
	},
	splash:{
	  position:'absolute',
	  width: 200,
      height: 200,
      top:Window.height/2 - 100,
	  left:Window.width/2 - 90
	},
	splash2:{
	  position:'absolute',
	  width: 100,
      height: 100,
      top:Window.height*0.35,
	  left:Window.width*0.60
	},
	splash3:{
      position:'absolute',
	  width: 100,
      height: 100,
      top:10,
	  left:10
	},
	splash4:{
	  position:'absolute',
	  width: 175,
      height: 175,
      top:0,
	  left:0
	},
	splash5:{
	  position:'absolute',
	  width: 400,
      height: 400,
      top: 300,
	  left: -150
	},
	splash6:{
	  position:'absolute',
	  width: 150,
      height: 150,
      top: 0,
	  right: 0
	}				//StyleSheet to store styling information for various elements.
});