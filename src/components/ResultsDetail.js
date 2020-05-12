import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"

const ResultsDetail = ({ item }) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ResultsDetail
