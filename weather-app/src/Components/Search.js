import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import Clock from "./Clock";
import "./Search.css"

const Search = () => {
  const date = new Date();
  
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });
  const [trigger, setTrigger] = useState(false)

  const searchCity = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setTrigger(true)
      setInput("");
      setWeather({ ...weather, loading: true });
      const url = "https://api.openweathermap.org/data/2.5/weather";
      const api_key = "f00c38e0279b7bc85480c3fe775d518c";
      await axios
        .get(url, {
          params: {
            q: input,
            units: "metric",
            appid: api_key,
          },
        })
        .then((res) => {
          console.log("res", res);
          setWeather({ data: res.data, loading: false, error: false });
        })
        .catch((error) => {
          setWeather({ ...weather, data: {}, error: true });
          setInput("");
          console.log("error", error);
        });
    }
  };

  return (
    <div className="search-component">
      <div className="container">
        <div className="search-image">
          <img src={"../images/weather-photo_800x800.png"} alt=""></img>
        </div>

        <input
          style={{ color: "while" }}
          type="text"
          className="city-search"
          placeholder="Enter City Name.."
          name="query"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyPress={searchCity}
        />
        <Clock />
      </div>
      {trigger === true && (
        <div className="container">
          {weather.loading && (
            <>
              <br />
              <br />
              <Oval type="Oval" color="blue" height={10} width={10} />
            </>
          )}
          {weather.error && (
            <>
              <br />
              <br />
              <span className="error-message">
                <FontAwesomeIcon icon={faFrown} />
                <span style={{ fontSize: "20px" }}> City not found</span>
              </span>
            </>
          )}
          {weather && weather.data && weather.data.main && (
            <div>
              <div className="city-name">
                <h2>
                  {weather.data.name}, <span>{weather.data.sys.country}</span>
                </h2>
              </div>
              <div className="date">
                <span>{date.toDateString()}</span>
              </div>
              <div className="icon-temp">
                <span className="celcius">
                  {Math.round(weather.data.main.temp)}
                </span>
                <sup className="deg">°C</sup>
                <img
                  className="weather-icon"
                  src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
                  alt={weather.data.weather[0].description}
                />
              </div>
              <div className="des-wind">
                <p>{weather.data.weather[0].description.toUpperCase()}</p>
                <p>Wind Speed: {weather.data.wind.speed}m/s</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
