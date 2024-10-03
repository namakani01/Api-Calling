import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';

const Fetchput = () => {
  const [data, setdata] = useState('');

  const [openmodal, setopenmodal] = useState(false);

  const [name, setname] = useState();

  const [id, setid] = useState();

  async function getApiData() {
    let result = await fetch('http://10.0.2.2:3000/users');
    result = await result.json();
    setdata(result);
    //  console.log(result)
  }

  useEffect(() => {
    getApiData();
  }, []);

  async function updateapiData() {
    // console.warn(name,id)
    let result = await fetch(`http://10.0.2.2:3000/users/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name,
      }),
    });
    result = await result.json();
  }

  const updateData = (name, id) => {
    console.log(name);
    setopenmodal(true);
    setname(name);
    setid(id);
  };

  return (
    <View>
      <Text style={{fontSize: 18, textAlign: 'center'}}>Fetchput</Text>
      <Text style={{fontSize: 20}}>User details</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 12,
              marginHorizontal: 25,
            }}>
            <Text style={{fontSize: 20}}>{item.name}</Text>
            <TouchableOpacity onPress={() => updateData(item.name, item.id)}>
              <Text style={{fontSize: 18}}>Update</Text>
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
              style={{borderWidth: 2, borderColor: 'black', width: '90%'}}
              value={name}
              onChangeText={text => setname(text)}></TextInput>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                marginTop: 20,
                padding: 6,
                width: 60,
              }}
              onPress={() => updateapiData()}>
              <Text style={{textAlign: 'center', color: 'white'}}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Fetchput;
