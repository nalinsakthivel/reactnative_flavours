import {View, Text} from 'react-native';
import React from 'react';
import Config from 'react-native-config';

const App = () => {
  console.log('Config :>> ', Config.ENV);

  return (
    <View>
      <Text>Hello</Text>
      <Text>{Config?.ENV || 'None'}</Text>
    </View>
  );
};

export default App;
