import { useEffect, useState } from "react"
import yelp from "../api/yelp"

const useResults = () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    searchApi("pasta")

    return () => {}
  }, [])

  async function searchApi(searchTerm) {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      })

      setResults(response.data.businesses)
    } catch {
      setErrorMessage("Something went wrong")
    }
  }

  return [searchApi, results, errorMessage]
}

export default useResults
