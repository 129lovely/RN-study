import React from 'react';
import {View, StyleSheet, Text, Button, Pressable} from 'react-native';

const showMeYourName = p => {
  if (p === 'mj') {
    return 'last name';
  } else if (p === 'b') {
    return 'first name';
  } else {
    return 'my name is bmj';
  }
};

const App = () => {
  const p = 'helllllo';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>이얏호</Text>
      <Button title="버튼ㄴ이다" onPress={() => alert('click')} />
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
