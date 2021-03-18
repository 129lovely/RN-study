import React from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {images} from '../Images';
import {colors} from '../colors';

// type: image type
const IconButton = ({type, onPressOut = () => {}, id, completed}) => {
  const _onPressOut = () => {
    onPressOut(id);
  };
  return (
    <Pressable onPressOut={_onPressOut} hitSlop={10}>
      <Image
        style={[styles.icon, completed && styles.completed]}
        source={type}
        completed={completed}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    tintColor: colors.text,
    width: 25,
    height: 25,
  },
  completed: {
    tintColor: colors.done,
  },
});

IconButton.propTypes = {
  type: PropTypes.oneOf(Object.values(images)).isRequired,
  onPressOut: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool,
};

export default IconButton;
