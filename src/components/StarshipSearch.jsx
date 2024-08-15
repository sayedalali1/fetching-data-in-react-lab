import { useState } from "react"

const StarshipSearch = ({ search, setSearchResults }) => {
  const [formData, setFormData] = useState("")

  const handleChange = (e) => {
    setFormData(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = await search(formData)
    setSearchResults(found.results)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">SEARCH</button>
      </form>
    </>
  )
}

export default StarshipSearch