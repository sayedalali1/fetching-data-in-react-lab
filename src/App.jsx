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

  useEffect(() => {
    getStarshipList();
  }, []);

  return (
    <>
    <StarshipSearch />
    <StarshipList starships={starships} />
    </>
  );
};

export default App