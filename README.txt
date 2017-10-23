The following README provides instructions on how to make sure the app runs.
Make sure you npm install in the project director prior to running the application.

Follow the next steps to run the application without any errors in your first try! :D


*****IMPORTANT*****
Navigate to: "<project>\node_modules\react-native-swiper-animated\src\Swiper.js"

Remove the following from line 1:
Remove PropTypes so you are left with -
--1 import React, { PureComponent} from 'react';

Add the following in line 2:
--2 import PropTypes from 'prop-types';

This needs to be done because React Native changed how to import PropTypes during one of their version releases and importing from 'react' no longer works and causes an error.




Some npm install commands and links, just in case :

--1 npm i --save lottie-react-native@2.2.7
	Link: http://airbnb.io/lottie/

--2 npm i react-native-swiper-animated --save
	Link: https://github.com/chitezh/react-native-swiper-animated