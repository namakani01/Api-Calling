import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

const Customprogressbar = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
      console.log(count);
    }, 2000);

    if (count === 10) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <View style={{marginVertical: 50, marginRight: 25, width: 400}}>
      <Text>Count : {count}</Text>
      {count != 10 ? <View
        style={{backgroundColor: 'red', height: 38, width: count * 40}}></View> : null}
        {/* <View style={{backgroundColor: 'red', height: 38, width: count * 40}}></View> */}
        <Text>{count == 10 ? 'Done' : null}</Text>
    </View>
  );
};

export default Customprogressbar;
