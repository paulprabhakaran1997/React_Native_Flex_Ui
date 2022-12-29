/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Button
 } from 'react-native';
 
 /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
  * LTI update could not be added via codemod */
 
 const App = () =>{
 
   const [name , setName] = useState('Jarvis')
 
   return (
     <View style={styles.body}>
       <View style = {styles.view1}>
          <Text style = { styles.text }>1</Text>
       </View>       
       <View style = {styles.view2}>
          <Text style = { styles.text }>2</Text>
       </View>       
       <View style = {styles.view3}>
          <Text style = { styles.text }>3</Text>
       </View>       
     </View>
   )
 }
 
 
const styles = StyleSheet.create({
  body: {
    flex : 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    width: 100,
    height: 100,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    width: 100,
    height: 100,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3: {
    width: 100,
    height: 100,
    backgroundColor: 'burlywood',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#000',
    fontSize: 35,
    fontStyle: 'italic'
  },

});
 

 export default App;
 