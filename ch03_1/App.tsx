import React from 'react'
import {StyleSheet, SafeAreaView, Text} from 'react-native'
import {Colors} from 'react-native-paper'
import Color from 'color'

console.log(Colors.blue500)
export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>Hello StyleSheet world!</Text>
    </SafeAreaView>
  )
  }
  // prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center',
    backgroundColor: Colors.blue500},
  text: {fontSize: 20, color: Colors.purple500}
})