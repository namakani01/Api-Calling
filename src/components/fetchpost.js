import {View, Text, Button} from 'react-native';
import React from 'react';


const Fetchpost = () => {
  async function postApiData() {
    let result = await fetch('http://10.0.2.2:3000/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: 'HII',
        age: 35,
        email: 'rahul@test.com',
      }),
    });

    // result = await result.json();
    // console.log(result);
  }

  return (
    <View style={{marginHorizontal: 60, marginVertical: 30}}>
      <Text style={{fontSize: 20}}>fetchpost</Text>
      <Button title="save" onPress={postApiData}></Button>
    </View>
  );
};

export default Fetchpost;
