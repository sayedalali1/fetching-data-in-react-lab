import StarshipSearch from './components/StarshipSearch'
import StarshipList from "./components/StarshipList"
import { useState } from 'react'
import { useEffect } from 'react'
import * as starshipService from './services/starshipService'

const App = () => {

  const [starships, setStarships] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await starshipService.index()
      setStarships(data.results)
    }
    fetchData()
  }, [])

  return (
    <>
    <h1>Star Wars Starships</h1>
      <StarshipSearch search={starshipService.search} setSearchResults={setSearchResults} />
      <StarshipList starships={starships} searchResults={searchResults} />
    </>
  )
}

export default App