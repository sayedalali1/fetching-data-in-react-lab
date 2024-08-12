import { useState, useEffect } from 'react';
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import * as starshipServices from './services/starshipServices';

const App = () => {
  const [starships, setStarships] = useState([]);

  const getStarshipList = async () => {
    const starshipData = await starshipServices.getStarship();
    setStarships(starshipData.results);
  };

  const getSearchship = async (searchship) => {
    const searchshipData = await starshipServices.searchStarship(searchship);
    setStarships(searchshipData.results);
  };
  setStarships(searchshipData.results);
  

  useEffect(() => {
    const getDeftaultStarshipList = async () => {
      await getStarshipList();
    }
    getDeftaultStarshipList();
    }, []);

  return (
    <>
    <StarshipSearch getSearchship = {getSearchship} />
    <StarshipList starships={starships} />
    </>
  );
};

export default App