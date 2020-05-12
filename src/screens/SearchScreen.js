import React, { useState } from "react"
import { Text, StyleSheet, ScrollView } from "react-native"
import SearchBar from "../components/SearchBar"
import ResultsList from "../components/ResultsList"
import useResults from "../hooks/useResults"

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("")
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price)
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
          navigation={navigation}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice("$$")}
          navigation={navigation}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
          navigation={navigation}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
