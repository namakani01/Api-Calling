import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const New = () => {
  const [data, setData] = useState('');

  const [loading, setLoading] = useState(false);

  // console.log('>>', data);

  const help = async () => {
    // const response = fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(value => {
    //     return value.json();
    //   })
    //   .then(value => {
    //     console.log(value);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // const response = await axios.get(
    //   'https://jsonplaceholder.typicode.com/posts',
    // );
    // console.log(response.data);

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(value => {
        return value.json();
      })
      .then(value => {
        setLoading(false);
        // console.log(value);
        setData(value);
        setLoading(true);
      });
  };

  useEffect(() => {
    help();
  }, []);

  return loading ? (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'red', fontSize: 20}}>Hello</Text>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={{margin: 10}}>
            <Text>{item.title}</Text>
          </View>
        )}></FlatList>
    </View>
  ) : (
    <View>
      <ActivityIndicator size={'large'}></ActivityIndicator>
    </View>
  );
};

export default New;
