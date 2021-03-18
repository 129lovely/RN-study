import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const PressableButton = ({title = '디폴트'}) => {
  const _onPressIn = () => console.log('Press In');
  const _onPressOut = () => console.log('Press Out');
  const _onPress = () => console.log('Press');
  const _onLongPress = () => console.log('Long Press');
  return (
    <Pressable
      style={styles.container}
      onPressIn={_onPressIn}
      onPressOut={_onPressOut}
      onPress={_onPress}
      onLongPress={_onLongPress}
      delayLongPress={3000}
      pressRetentionOffset={{bottom: 50, left: 50, right: 50, top: 50}}
      hitSlop={50}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

PressableButton.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    padding: 20,
  },
  text: {
    padding: 10,
    fontSize: 30,
  },
});

export default PressableButton;
