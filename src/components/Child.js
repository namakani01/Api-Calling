import {View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const Child = props => {
  console.log('>>', props);
  const [name, setName] = useState();

  function handleSubmit() {
    props.getData(name);
  }

  return (
    <View>
      <TextInput
        value={name}
        placeholder="Text"
        onChangeText={text => setName(text)}
        style={{
          borderWidth: 2,
          marginVertical: 10,
          marginHorizontal: 20,
        }}></TextInput>
      <Button onPress={() => handleSubmit()} title="Submit"></Button>
    </View>
  );
};

export default Child;
