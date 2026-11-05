import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
    <View style={(styles.card)}>
      <Text>index</Text>
    </View>
    </SafeAreaView>

  )
}

export default index

const styles = StyleSheet.create({
  card:{
    backgroundColor: "#fff",
    height: 8,
    width : 12,
    borderRadius:3
  }
})