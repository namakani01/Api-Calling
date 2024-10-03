import { View, Text, Button } from 'react-native'
import React from 'react'
import axios from 'axios'

const Axoispost = () => {
    
    async function postApiData() {
    let result = await axios.post('http://10.0.61.32:3000/users',{
        name : 'Harish',
        age : 19,
        email : 'harish@test.com'
    })
    }

  return (
    <View style={{marginHorizontal : 90}}>
      <Text>Axoispost</Text>
      <Button title='send data' onPress={postApiData}></Button>
    </View>
  )
}

export default Axoispost