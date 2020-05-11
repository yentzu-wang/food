import axios from "axios"

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer s-5YMcrpWpMLj7f5IT4Whq7F3nFlr7hdig9WA1GRkTcoNqtpmaGbTpOO9iL3CDK9FLa1bydJqpdafAaWDRkLXvogm_Vv2dVaj-1hJW_6pYrHZXJKzFTiAL6esue4XnYx"
  }
})
