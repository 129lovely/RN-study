import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const EventButton = () => {
  const _onPressIn = () => console.log('Press In');
  const _onPressOut = () => console.log('Press Out');
  const _onPress = () => console.log('Press');
  const _onLongPress = () => console.log('Long Press');

  return (
    <TouchableOpacity
      delayLongPress={3000}
      style={styles.container}
      onPressIn={_onPressIn}
      onPressOut={_onPressOut}
      onPress={_onPress}
      onLongPress={_onLongPress}>
      <Text style={styles.text}>Press!</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 24,
  },
  container: {
    backgroundColor: '#f1c40f',
    padding: 16,
    margin: 10,
    borderRadius: 8,
  },
});

export default EventButton;
