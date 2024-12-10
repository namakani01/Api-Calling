import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

const Hello = props => {
  // console.log('>>', props);
  return (
    <Text>
      Hello {props.name} {props.age}
    </Text>
  );
};

// Default Props.
Hello.defaultProps = {
  name: 'Ramesh',
  age: 35,
};

const Demo1 = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCount(count + 1);
  //       console.log(count);
  //     }, 2000);

  //     if (count == 10) {
  //       clearInterval(interval);
  //     }
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [count]);

  return (
    <View>
      {/* <Text>Demo1</Text>
      <View
        style={{
          height: 30,
          width: 30,
          backgroundColor: 'red',
          borderRadius: 50,
        }}></View>
      <Text>{count}</Text> */}

      <Hello></Hello>
    </View>
  );
};

export default Demo1;
