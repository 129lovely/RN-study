import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';

export default () => {
  return <View style={styles.shadow} />;
};

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: '#fff',
    width: 200,
    height: 200,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});
