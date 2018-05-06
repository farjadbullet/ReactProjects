import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header.js';

const App = () =>
    (
        <Header textInputString={'Hey'} />
        // <Text>Hey Whats Up Bitch</Text>
    );

AppRegistry.registerComponent('albums', () => App);
// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('albums', () => App);
