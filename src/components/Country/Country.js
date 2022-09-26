import React from "react";
import "./Country.css";

const Country = (props) => {
  //console.log(props.country);
  const { name, area, population, flags } = props.country;
  return (
    <div className="country">
      <h3>Country Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Area: {area}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default Country;
