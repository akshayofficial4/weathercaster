import React from "react";
import { useState } from "react";
import Result from "./Components/Result";
import Search from "./Components/Search";
import axios from "axios";
function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [history, setHistory] = useState([]);
  const changeSearch = (value) => {
    setSearch(value);
  };
  const searchWeatherHandler = () => {
    if (search !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1a2e8744bdc1977f8c62e6ca252ae6b4&units=metric`
        )
        .then((response) => {
          if (history.indexOf(search) === -1) {
            setHistory([...history, search]);
          }
          setWeather(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const historySearchHandler = async (data) => {
    setSearch(data);

    if (data !== "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=1a2e8744bdc1977f8c62e6ca252ae6b4&units=metric`
        )
        .then((response) => {
          if (history.indexOf(data) === -1) {
            setHistory([...history, data]);
          }
          setWeather(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="max-w-[1240px] mx-auto p-3 mt-2" >
      <Search
        searchData={search}
        eventHandler={changeSearch}
        searchWeather={searchWeatherHandler}
      />
      <Result
        weatherData={weather}
        historyData={history}
        historySearch={historySearchHandler}
      />
    </div>
  );
}
export default App;