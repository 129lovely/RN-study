import React from 'react'; // JSX는 React.createElement를 호출하는 코드로 컴파일되므로 컴포넌트를 작성할 때 반드시 작성해야 하는 코드
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const MyButton = ({title = 0, onPress}, children) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

MyButton.propTypes = {
  title: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    fontSize: 24,
    backgroundColor: '#fff333',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    color: '#ffffff',
  },
});

export default MyButton;

// 클래스 vs 함수 (hooks)

// class MyButton extends React.Component {
//   render() {
//     return (
//       <TouchableOpacity style={styles.button}>
//       <Text style={styles.text} onPress={() => alert('click!')}>
//         {title} {children}
//       </Text>
//     </TouchableOpacity>
//     )
//   }
// }
