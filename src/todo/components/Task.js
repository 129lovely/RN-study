import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import {colors} from '../colors';
import {images} from '../Images';
import Input from '../components/Input';

const Task = ({item, deleteTask, toggleTask, updateTask}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);
  const _handleUpdateButtonPress = () => {
    setIsEditing(true);
  };
  const _onSubmitEditing = () => {
    if (isEditing) {
      const editedTask = Object.assign({}, item, {text});
      setIsEditing(false);
      updateTask(editedTask);
    }
  };
  const _onBlur = () => {
    if (isEditing) {
      setIsEditing(false);
      setText(item.text);
    }
  };
  return isEditing ? (
    <Input
      value={text}
      onChangeText={text => setText(text)}
      onSubmitEditing={_onSubmitEditing}
      onBlur={_onBlur}
    />
  ) : (
    <View style={styles.container}>
      <IconButton
        type={item.completed ? images.completed : images.uncompleted}
        id={item.id}
        onPressOut={toggleTask}
        completed={item.completed}
      />
      <Text style={[styles.contents, item.completed && styles.completed]}>
        {item.text}
      </Text>
      {item.completed || (
        <IconButton
          id={item.id}
          type={images.update}
          onPressOut={_handleUpdateButtonPress}
        />
      )}
      <IconButton
        type={images.delete}
        id={item.id}
        onPressOut={deleteTask}
        completed={item.completed}
      />
    </View>
  );
};

Task.propTypes = {
  item: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.itemBackground,
    borderRadius: 10,
    padding: 15,
    marginVertical: 3,
    marginHorizontal: 0,
  },
  contents: {
    flex: 1,
    fontSize: 20,
    color: colors.text,
    marginHorizontal: 5,
  },
  completed: {
    color: colors.done,
    textDecorationLine: 'line-through',
  },
});

export default Task;
