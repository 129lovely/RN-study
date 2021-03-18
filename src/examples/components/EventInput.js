import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const EventInput = () => {
  const [text, setText] = useState('');
  // const _onChange = event => setText(event.nativeEvent.text);
  const _onChangeText = text => setText(text);

  return (
    <View>
      <Text style={styles.text}>text: {text}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter a text~"
        onChangeText={_onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: 'black',
    fontSize: 30,
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
});

export default EventInput;
