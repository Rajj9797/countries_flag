import { useEffect, useState } from "react";

const Card = ({ name, flag, abbr }) => {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        border: '1px solid gray',
        borderRadius: '4px',
        height: '200px',
        width: '200px',
        padding: '8px',
        textAlign: 'center'
      }}
    >
      <img src={flag} alt={`Flag of ${abbr}`} style={{height: "100px", width: "100px"}} />
      <h2>{name}</h2>
    </div>
  );
};

const APT = "https://xcountries-backend.azurewebsites.net/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(APT)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  console.log(countries);

  return (
    <div>
      <div
        className="countries-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {countries.map(({ name, flag, abbr }) => (
          <Card
            name={name}
            flag={flag}
            abbr={abbr}
            key={name + abbr}
          />
        ))}
      </div>
    </div>
  );
}

export default Countries;