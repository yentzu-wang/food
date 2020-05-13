import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, FlatList, Image } from "react-native"
import yelp from "../api/yelp"

const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam("id")

  useEffect(() => {
    getResult(id)
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getResult(id) {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  if (!result) {
    return null
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: { height: 200, width: 300 }
})

export default ResultShowScreen
