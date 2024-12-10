import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const DiagonalLine = () => {
  return (
    <View style={{alignItems: 'center', position: 'relative'}}>
      <View style={{position: 'absolute', marginTop: 70, alignItems: 'center'}}>
        <Text>hiiiiii</Text>
      </View>

      <View style={styles.diagonalLine1} />
      <View style={styles.diagonalLine2} />
      <View style={styles.diagonalLine3} />
      <View style={styles.diagonalLine4} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diagonalLine1: {
    marginTop: 40,
    borderWidth: 0.5,
    width: 200, 
    backgroundColor: 'black',
  },
  diagonalLine2: {
    marginTop: 70,
    borderWidth: 0.5,
    width: 204, 
    marginRight: 60,
    backgroundColor: 'black',
  },
  diagonalLine3: {
    width: 1,
    height: 75,
    backgroundColor: 'red',
    position: 'absolute',
    top: 40,
    right: 120,
    transform: [{rotate: '20deg'}],
  },
  diagonalLine4: {
    width: 1,
    height: 77,
    backgroundColor: 'red',
    position: 'absolute',
    top: 38,
    right: 320,
    transform: [{rotate: '23deg'}],
  },
});

export default DiagonalLine;
