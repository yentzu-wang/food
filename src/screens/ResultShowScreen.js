import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import yelp from "../api/yelp"

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam("id")

  console.log(result)

  useEffect(() => {
    getResult(id)
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getResult(id) {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  return (
    <View>
      <Text>Results Show</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ResultShowScreen
