import {View, Text, FlatList, Touchable, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Axoisdelete = () => {
  const [output, setoutput] = useState();

  async function getApiData() {
    let result = await axios.get('http://10.0.61.32:3000/users');
    setoutput(result.data);
    // console.log(result.data)
  }

  useEffect(() => {
    getApiData();
  }, [output]);

  async function deleteApiData(id) {
    console.warn(id);
    let result = await axios.delete(`http://10.0.61.32:3000/users/${id}`);
  }

  return (
    <View>
      <Text style={{fontSize: 20, textAlign: 'center'}}>Axoisdelete</Text>
      <FlatList
        data={output}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 26,
              marginTop: 16,
            }}>
            <Text style={{fontSize: 22}}>{item.name}</Text>
            <TouchableOpacity onPress={() => deleteApiData(item.id)}>
              <Text style={{fontSize: 20}}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}></FlatList>
    </View>
  );
};

export default Axoisdelete;
