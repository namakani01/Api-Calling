import {View} from 'react-native';
import React from 'react';
import Fetch from './src/components/fetch';
import Fetchpost from './src/components/fetchpost';
import Fetchdelete from './src/components/fetchdelete';
import Fetchput from './src/components/fetchput';
import Fetchpatch from './src/components/fetchpatch';
import Axiosget from './src/components/axiosget';
import Axoispost from './src/components/axoispost';
import Axoisdelete from './src/components/axoisdelete';
import Axiosput from './src/components/axiosput';
import Axiospatch from './src/components/axiospatch';

const App = () => {


  return (
    <View>
      {/* <Fetch></Fetch> */}
      {/* <Fetchpost></Fetchpost> */}
      {/* <Fetchdelete></Fetchdelete> */}
      {/* <Fetchput></Fetchput> */}
      {/* <Fetchpatch></Fetchpatch> */}
      {/* <Axiosget></Axiosget> */}
      {/* <Axoispost></Axoispost> */}
      {/* <Axoisdelete></Axoisdelete> */}
      {/* <Axiosput></Axiosput> */}
      <Axiospatch></Axiospatch>
    </View>
  );
};



export default App;
