import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Axiosget = () => {
  const [output, setoutput] = useState();

  async function getApiData() {
    let result = await axios.get('https://jsonplaceholder.typicode.com/todos');
    setoutput(result.data);
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 20, textAlign: 'center'}}>axiosget</Text>
      {/* {output ? <Text style = {{fontSize : 19}}>{output.id}</Text> : null}
      {output ? <Text style = {{fontSize : 19}}>{output.title}</Text> : null}
      {output ? <Text style = {{fontSize : 19}}>{output.userId}</Text> : null} */}

       <FlatList
        data={output}
        renderItem={({item}) => (
          <View>
            <Text style={{fontSize: 17}}>Id :{item.id}</Text>
            <Text style={{fontSize: 17}}>Title : {item.title}</Text>
            <Text style={{fontSize: 17}}>UserId : {item.userId}</Text>
          </View>
        )}
        ItemSeparatorComponent={()=>
        {
          return <View style={{borderWidth : 1, width: '100%', borderColor: 'gray'}}></View>
        }
        }></FlatList>
    </View>
  );
};

export default Axiosget;
