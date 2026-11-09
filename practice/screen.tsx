import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const Index = () => {
const [text,setText] = useState("");
  
  return (

    <SafeAreaView style ={{flex:1 , backgroundColor:"#01184b"}}>
    <View style={[styles.card, { left: 45, top: 30 }]}>     
       <Text style={styles.text}>index</Text>
    </View>
        <View style={[styles.card, { left: 340, top:30 }]}>     
       <Text style={styles.text}>index</Text>
    </View>
        <View style={[styles.card, { left: 45, top: 200 }]}>     
       <Text style={styles.text}>index</Text>
    </View>
    <View style={[styles.card, { left: 340, top: 200 }]}>     
       <Text style={styles.text}>index</Text>
    </View>
    <View style={[styles.input,{position:"absolute",top:380}]}>
      <TextInput 
        style={[styles.text]}
        placeholder='enter text'
        value={text}
        onChangeText={setText}
      />
    </View>

 
    </SafeAreaView>

  )
}

export default Index

const styles = StyleSheet.create({
  card:{
    backgroundColor: "#323259",
    padding: 16,
    borderWidth:2,
    borderRadius:12,
    width:"40%",
    height:"20%",
    position:"absolute",
    justifyContent:"center",
    alignItems: "center",

  },
  text:{
    fontSize:16,
    letterSpacing:0.2,
    color:"#fff",


  },
  input:{
    padding: 16,
    borderWidth:2,
    borderRadius:2,
    width:250,
    backgroundColor:"#514f4f"

  }
})
