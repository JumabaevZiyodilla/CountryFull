import './card.css'
import { useState, useEffect, useRef } from 'react'
import Form from '../Form/Form'

export function Card(props) {
  const [data, setData] = useState([
    {
      loading: true,
      data: [],
      isError: false,
    },
  ])

  const getCountries = async () => {
    try {
      const res = await fetch('https://restcountries.com/v3.1/all')
      const data = await res.json()

      setData({
        loading: false,
        data: data,
        isError: false,
      })
    } catch (error) {
      setData({
        loading: false,
        data: [],
        isError: true,
      })
    }
  }

  useEffect(() => {
    getCountries()
  }, [])
  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all')
  //     .then((response) => response.json())
  //     .then((data) =>
  //       setData({
  //         loading: false,
  //         data: data,
  //         isError: false,
  //       }),
  //     )
  //     .catch(() =>
  //     setData({
  //       loading: false,
  //       data: [],
  //       isError: true,
  //     }),
  //     )
  // })
  const getCountriesByName = async (countryName) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      if(!res.ok) throw new Error("Not found country")

      const data = await res.json()
      setData({
        loading:false,
        data: data,
        isError: false
      })
    } catch (error) {
      setData({
        loading: false,
        data: [],
        isError: true,
      })
    }
  }
  const getCountriesSelect = async (countrySelect) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/region/${countrySelect}`)
      if(!res.ok) throw new Error("Not found country")

      const data = await res.json()
      setData({
        loading:false,
        data: data,
        isError: false
      })
    } catch (error) {
      setData({
        loading: false,
        data: [],
        isError: true,
      })
    }
  }
  return (
    <>
      <Form onSearch={getCountriesByName} />
      <ul className="country-list">
        {data.loading && <h1>Loading...</h1>}
        {data.isError && <h1>Error...</h1>}
        {data.data &&
          data.data.map((element) => (
            <li className="country-list__item" key={element.name.common}>
              <img
                className="country-list__img"
                src={element.flags.svg}
                width="264"
                height="160"
              ></img>
              <div className="country-list__box">
                <h3 className="country-list__title">{element.name.common}</h3>
                <p className="country-list__population">
                  Population:
                  <span className="country-list__population-span">
                    {element.population}
                  </span>
                </p>
                <p className="country-list__region">
                  Region:
                  <span className="country-list__region-span">
                    {element.region}
                  </span>
                </p>
                <p className="country-list__capital">
                  Capital:
                  <span className="country-list__capital-span">
                    {element.capital}
                  </span>
                </p>
              </div>
            </li>
          ))}
      </ul>
    </>
  )
}
