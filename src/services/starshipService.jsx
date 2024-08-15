const BASE_URL = `https://swapi.dev/api/starships`

const index = async () => {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

const search = async (ship) => {
  try {
    const queryString = `\?search=${ship}`
    const res = await fetch(BASE_URL + queryString)
    const data = await res.json()
    console.log("Search result: ", data)
    return data
  } catch (err) {
    console.log(err)
  }
}

export {index, search}