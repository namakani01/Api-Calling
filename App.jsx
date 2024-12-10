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
import DiagonalLine from './src/components/Diagonalline';
import Demoapp from './src/components/Demo';
import Customprogressbar from './src/components/customprogressbar';
import New from './src/components/New';
import Demo1 from './src/components/Demo1';
import Child from './src/components/Child';

const App = () => {
  function getData(data) {
    console.log(data);
  }
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
      {/* <Axiospatch></Axiospatch> */}
      {/* <DiagonalLine></DiagonalLine> */}
      {/* <Demoapp></Demoapp> */}
      {/* <Customprogressbar></Customprogressbar> */}
      <New></New>
      {/* <Demo1></Demo1> */}
      {/* <Child getData={getData}></Child> */}
    </View>
  );
};

export default App;
