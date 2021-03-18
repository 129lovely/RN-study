import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {colors} from './colors';
import Input from './components/Input';
import Task from './components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({
    1: {id: '1', text: 'sleep...', completed: false},
    2: {id: '2', text: 'study hard!', completed: true},
    3: {id: '3', text: 'be happy~', completed: true},
  });
  useEffect(() => {
    AsyncStorage.getItem('tasks').then(loadedTasks => {
      setTasks(JSON.parse(loadedTasks || '{}'));
      setIsLoading(false);
    });
  }, []);
  const _saveTasks = async tasks => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      setTasks(tasks);
    } catch (e) {
      console.error(e);
    }
  };
  // const _loadTasks = async () => {
  //   const loadedTasks = await AsyncStorage.getItem('tasks');
  //   setTasks(JSON.parse(loadedTasks || '{}'));
  // };
  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: {id: ID, text: newTask, completed: false},
    };
    setNewTask('');
    _saveTasks({...tasks, ...newTaskObject});
  };
  const _deleteTask = id => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    _saveTasks(currentTasks);
  };
  const _toggleTask = id => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id].completed = !currentTasks[id].completed;
    _saveTasks(currentTasks);
  };
  const _updateTask = item => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[item.id] = item;
    _saveTasks(currentTasks);
  };
  const _handleTextChange = text => {
    setNewTask(text);
  };
  const _onBlur = () => {
    setNewTask('');
  };
  const width = useWindowDimensions().width;

  return isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <Text style={styles.title}>오늘의 할 일</Text>
      <Input
        placeholder="+ Add a Task"
        value={newTask}
        onChangeText={_handleTextChange}
        onSubmitEditing={_addTask}
        onBlur={_onBlur}
      />
      <ScrollView style={[styles.list, {width: width - 40}]}>
        {Object.values(tasks)
          .reverse()
          .map(item => (
            <Task
              key={item.id}
              item={item}
              deleteTask={_deleteTask}
              toggleTask={_toggleTask}
              updateTask={_updateTask}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    color: colors.main,
    alignSelf: 'flex-start',
    marginVertical: 0,
    marginHorizontal: 20,
  },
  list: {
    flex: 1,
  },
});

export default App;
