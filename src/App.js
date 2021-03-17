import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import EventButton from './components/EventButton';
import EventInput from './components/EventInput';
import PressableButton from './components/PressableButton';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>내 버튼 컴포넌트</Text>
      <EventButton />
      <EventInput />
      <PressableButton title="Pressable 버튼이지렁" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
});

export default App;
