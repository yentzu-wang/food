import React from "react"
import { StyleSheet, Text, View } from "react-native"

const ResultShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id")
  console.log(id)

  return (
    <View>
      <Text>Results Show</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ResultShowScreen
