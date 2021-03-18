import React from 'react';
import {TextInput, StyleSheet, useWindowDimensions} from 'react-native';
import {colors} from '../colors';
import PropTypes from 'prop-types';

const Input = ({
  placeholder = '+ Add a Task',
  value,
  onChangeText,
  onSubmitEditing,
  onBlur,
}) => {
  const width = useWindowDimensions().width;
  return (
    <TextInput
      style={[styles.textInput, {width: width - 40}]}
      placeholder={placeholder}
      placeholderTextColor={colors.main}
      maxLength={50}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      keyboardAppearance="dark"
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      value={value}
      onBlur={onBlur}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 60,
    marginVertical: 3,
    marginHorizontal: 0,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: colors.itemBackground,
    fontSize: 25,
    color: colors.text,
  },
});

export default Input;
