import { useState, useEffect } from "react";
import "./App.css";
import CountryCard from "./components/countryCard";
import SearchInput from "./components/searchInput";

function App() {
  const [country, setCountry] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);

  const Api_URL =
    "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

  const getCountries = async () => {
    try{
       let resp = await fetch(Api_URL);
    let respData = await resp.json();
    setCountry(respData);
    setFilteredCountry(respData); 
    }
   catch(error){
    console.log(error)
   }
  };

  const onSearch = (val) => {
    console.log("searchVal:", val);
    if (!val.trim()) {
      setFilteredCountry(country); 
      return;
    }

    const filtered = country.filter((c) =>
      c.common.toLowerCase().includes(val.toLowerCase())
    );
    setFilteredCountry(filtered);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <div className="xCountriesSearchContainer">
        <SearchInput onSearch={onSearch} />
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1em",
            justifyContent: "center",
          }}
        >
          {filteredCountry.map((data) => (
            <CountryCard key={data.common} common={data.common} png={data.png} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
