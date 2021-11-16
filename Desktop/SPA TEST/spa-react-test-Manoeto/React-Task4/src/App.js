
import React from 'react';
import {View, StyleSheet} from "react-native"
function App() {
  <View style={StyleSheet.container} >

    <view style={StyleSheet.box} />
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "'center',"
  },
  box: {
    width: 100,
    height:100,
    backgroundColor: "green",
    borderColor: "blue",
    borderWidth: 5,
    margin:10,

  }
})

export default App;