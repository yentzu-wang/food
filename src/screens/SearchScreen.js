import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import SearchBar from "../components/SearchBar"
import ResultsList from "../components/ResultsList"
import useResults from "../hooks/useResults"

const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price)
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
