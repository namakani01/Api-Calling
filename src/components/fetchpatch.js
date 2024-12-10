import {
  View,
  Text,
  FlatList,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';

const Fetchpatch = () => {
  const [data, setdata] = useState('');

  const [openmodal, setopenmodal] = useState(false);

  const [email, setemail] = useState();

  const [id, setid] = useState();

  async function getApiData() {
    let result = await fetch(' http://localhost:3000/users');
    result = await result.json();
    setdata(result);
    //  console.log(result)
  }

  useEffect(() => {
    getApiData();
  }, []);

  async function updateapiusingPatch() {
    // console.warn(name,id)
    let result = await fetch(` http://localhost:3000/users/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email,
      }),
    });
    result = await result.json();
    setemail('')
  }

  const updateData = (email, id) => {
    console.log(email);
    setopenmodal(true);
    setemail(email);
    setid(id);
  };

  return (
    <View>
      <Text style={{fontSize: 18, textAlign: 'center'}}>FetchPatch</Text>
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
            <Text style={{fontSize: 20}}>{item.email}</Text>
            <TouchableOpacity onPress={() => updateData(item.email, item.id)}>
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
              value={email}
              onChangeText={text => setemail(text)}></TextInput>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                marginTop: 20,
                padding: 6,
                width: 60,
              }}
              onPress={() => updateapiusingPatch()}>
              <Text style={{textAlign: 'center', color: 'white'}}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Fetchpatch;
