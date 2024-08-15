const StarshipCard = ({ ship }) => {
    return (
      <>
        <h3>🚀 {ship.name}</h3>
        <p>CLASS: {ship.starship_class}</p>
        <p>MAKE:  {ship.manufacturer}</p>
        <p>MODEL: {ship.model}</p>
        <br />
      </>
    )
  }
  
  export default StarshipCard