import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useState, useEffect} from 'react';
import React from 'react';

const Fetch = () => {
  const [data, setdata] = useState(undefined);

  async function getApiData() {
    let result = await fetch('https://jsonplaceholder.typicode.com/todos');
    result = await result.json();
    setdata(result);
  }

  useEffect(() => {
    getApiData();
  }, []);

  // console.log(data)

  listseparator = () => {
    return (
      <View
        style={{
          borderColor: 'grey',
          borderWidth: 1,
          width: '100%',
        }}></View>
    );
  };

  return (
    <View>
      <Text style={styles.text}>API CALL</Text>

      {/* { data ? <Text style = {styles.text}>{data.id}</Text> : null }
        { data ? <Text style = {styles.text}>{data.title}</Text> : null }
        { data ? <Text style = {styles.text}>{data.completed}</Text> : null }
        { data ? <Text style = {styles.text}>{data.userId}</Text> : null } */}

      {data ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{padding: 15}}>
              <Text style={{fontSize: 17}}>{item.id}</Text>
              <Text style={{fontSize: 17}}>{item.userId}</Text>
              <Text style={{fontSize: 17}}>{item.title}</Text>
            </View>
          )}
          ItemSeparatorComponent={listseparator}></FlatList>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
});

export default Fetch;
