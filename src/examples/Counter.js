import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyButton from './components/MyButton';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);
  return (
    <View style={styles.view}>
      <Text style={styles.text}>count: {count}</Text>
      <Text style={styles.text}>double: {double}</Text>
      <MyButton
        title="+1"
        onPress={() => {
          setCount(count + 1);
          setDouble(double + 2);
        }}
      />
      <MyButton
        title="-1"
        onPress={() => {
          setCount(count - 1);
          setDouble(double - 2);
        }}
      />
      <MyButton
        title="reset"
        onPress={() => {
          setCount(0);
          setDouble(0);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    margin: 10,
  },
});

export default Counter;
