import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const Demoapp = () => {
  const [count, setcount] = useState(0);

  const [toggle, settoggle] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setcount(count + 1);
      console.log(count);
    }, 2000);

    if (count == 10) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <View style={{marginVertical: 50}}>
      {/* {toggle ?  <Text style = {{fontSize : 20 , marginHorizontal  :150 , marginTop  :20}}>Demo :  {count}</Text>  : null}  */}
      {/* <Text style = {{fontSize : 20 , marginHorizontal  :150 , marginTop  :20}}>Demo :  {count}</Text>
        <View style = {{marginTop : 20 , marginHorizontal  :100}}>
        <Button title = {toggle ? ' Stop' : 'Start'} onPress={()=>settoggle(!toggle)}></Button>
        </View> */}
      <Text style={{fontSize: 20, marginHorizontal: 150, marginTop: 20}}>
        Demo : {count}
      </Text>
      {count != 10 ? (
        <View
          style={{
            backgroundColor: 'red',
            width: count * 30,
            height: 35,
            marginLeft: 30,
          }}
        />
      ) : null}
      <Text>{count == 10 && 'DATA LOADED'}</Text>
    </View>
  );
};

export default Demoapp;
