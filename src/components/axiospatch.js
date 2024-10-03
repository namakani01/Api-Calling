import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Axiosput = () => {
  const [output, setoutput] = useState();

  const [email, setemail] = useState();
  const [id, setid] = useState();

  const [openmodal, setopenmodal] = useState(false);

  async function getApiData() {
    let result = await axios.get('http://10.0.61.42:3000/users');
    setoutput(result.data);
    // console.log(result.data)
  }

  useEffect(() => {
    getApiData();
  }, []);

  const updateapiData = (email, id) => {
    // console.warn(email)
    setopenmodal(true);
    setemail(email);
    setid(id);
  };

  async function patchApiData() {
    console.warn(email);
    let result = await axios.patch(`http://10.0.61.42:3000/users/${id}`, {
      email: email,
    });
    setemail('');
  }

  return (
    <View>
      <Text style={{fontSize: 20, textAlign: 'center'}}>Axiospatch</Text>
      <FlatList
        data={output}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 26,
              marginTop: 15,
            }}>
            <Text style={{fontSize: 20}}>{item.name}</Text>
            <Text style={{fontSize: 20}}>{item.age}</Text>
            <TouchableOpacity
              onPress={() => updateapiData(item.email, item.id)}>
              <Text style={{fontSize: 20}}>Update</Text>
            </TouchableOpacity>
          </View>
        )}></FlatList>

      <Modal
        visible={openmodal}
        transparent={true}
        onRequestClose={() => setopenmodal(false)}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'pink',
              padding: 80,
              borderRadius: 10,
              width: '100%',
            }}>
            <TextInput
              value={email}
              onChangeText={text => setemail(text)}
              style={{
                borderWidth: 2,
                borderColor: 'black',
                width: '90%',
              }}></TextInput>
            <TouchableOpacity
              onPress={() => patchApiData()}
              style={{
                backgroundColor: 'red',
                marginTop: 20,
                padding: 6,
                width: 60,
              }}>
              <Text style={{textAlign: 'center', color: 'white'}}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Axiosput;
