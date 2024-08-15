import StarshipCard from "./StarshipCard"

const StarshipList = ({ starships, searchResults }) => {
  return (
    <>
      {searchResults.length ? (
        <div>
          <h2>Search Results</h2>
          {searchResults.map((ship, i) => (
            <StarshipCard ship={ship} key={i} />
          ))}
        </div>
      ) : (
        <div>
          <h2>All Starships</h2>
          {starships.map((ship, i) => (
            <StarshipCard ship={ship} key={i} />
          ))}
        </div>
      )}
    </>
  )
}

export default StarshipList