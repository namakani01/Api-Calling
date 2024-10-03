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

  const [name, setname] = useState();
  const [age, setage] = useState();
  const [email, setemail] = useState();
  const [id , setid] = useState()

  const [openmodal, setopenmodal] = useState(false);

  async function getApiData() {
    let result = await axios.get('http://10.0.61.32:3000/users');
    setoutput(result.data);
    // console.log(result.data)
  }

  useEffect(() => {
    getApiData();
  }, []);

  const updateapiData = (name, age, email, id) => {
    // console.warn(name,age,email)
    setopenmodal(true);
    setname(name);
    setage(String(age));
    setemail(email);
    setid(id)
  };

  async function putApiData() {
    console.warn(name, age, email);
    let result = await axios.put(`http://10.0.61.32:3000/users/${id}`,{
        name : name,
        age : age,
        email : email
    });
    setname('')
    setage('')
    setemail('')
  }

  return (
    <View>
      <Text style={{fontSize: 20, textAlign: 'center'}}>Axiosput</Text>
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
              onPress={() =>
                updateapiData(item.name, item.age, item.email, item.id)
              }>
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
              value={name}
              onChangeText={text => setname(text)}
              style={{
                borderWidth: 2,
                borderColor: 'black',
                width: '90%',
                marginBottom: 20,
              }}></TextInput>
            <TextInput
              value={age}
              onChangeText={text => setage(text)}
              style={{
                borderWidth: 2,
                borderColor: 'black',
                width: '90%',
                marginBottom: 20,
              }}></TextInput>
            <TextInput
              value={email}
              onChangeText={text => setemail(text)}
              style={{
                borderWidth: 2,
                borderColor: 'black',
                width: '90%',
              }}></TextInput>
            <TouchableOpacity
              onPress={() => putApiData()}
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
