import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

const Fetchdelete = () => {

  const [data, setdata] = useState('');

  async function getApiData() {
    let result = await fetch('http://10.0.2.2:3000/users')
    result = await result.json();
    setdata(result);
    //  console.log(result)
  }

  useEffect(() => {
    getApiData();
  }, []);



  async function deleteApiData(id)
  {
    let result = await fetch(`http://10.0.2.2:3000/users/${id}`,{
      method : 'DELETE'
    })
    result = await result.json()
  }

  return (
    <View>
      <Text style = {{fontSize : 20}}>User details</Text>
      {/* <Text>{deleteapiData()}</Text> */}
      <FlatList
        data={data}
        renderItem={({item}) => <View style = {{flex : 1,justifyContent : 'space-between',flexDirection : 'row' , marginTop : 12 , marginHorizontal : 25}}>
            <Text style = {{fontSize : 20}}>{item.name}</Text> 
            <TouchableOpacity onPress={()=>deleteApiData(item.id)}>
                <Text style = {{fontSize : 18}}>Delete</Text>
            </TouchableOpacity></View>}></FlatList>
    </View>
  );
};

export default Fetchdelete;
