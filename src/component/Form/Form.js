import { useState } from 'react'
import './form.css'

const SearchInput = ({ onSearch }) => {
  const [search, setSearch] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    onSearch(search)
  }

return (
  <>
    <form onKeyUp={submitHandler} className="country-form" autoComplete="off">
      <label className="country-form__label-input">
        <input
          className="country-form__input"
          type="text"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          name="search"
          placeholder="Search for a country…"
          aria-label="Country search"
        />
      </label>
    </form>
  </>
)
}
export default SearchInput
