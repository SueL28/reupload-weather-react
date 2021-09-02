  
import axios from "axios";
import React, {useState} from "react";
import "./TemperatureMain.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import ConvertTemperature from "./ConvertTemperature"

export default function TemperatureMain() {
    let [updated, setUpdated] = useState(false);
    const [weather, setWeather] = useState("");
    let [city, setCity] = useState("");

      /* GET SEARCHED WEATHER FROM INPUT */


    function getSearched(response){
        setWeather({
            dt: new Date (response.data.dt * 1000),
            temp_current: (Math.round(response.data.main.temp)),
            feels_like: (Math.round(response.data.main.feels_like)),
            high: (Math.round(response.data.main.temp_max)),
            low: (Math.round(response.data.main.temp_min)),
            city_name: response.data.name,
            pop: (Math.round(response.data.clouds.all)),
            wind:(Math.round(response.data.wind.speed)),
            description:response.data.weather[0].description,
            emoji:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`

        })
        setUpdated(true);
    }

      
      function submitEntry(submit){
        submit.preventDefault();
        let apiKey = `a0ec055234934001bdc16c33f46f3ecb`
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(getSearched)
        console.log(apiUrl)


      }
  
      function updateEntry(event){
        setCity(event.target.value);
        

      }

    if(updated){
        return(
            <div className="app-container">
            <div className="Header">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 current-time">
                        <h2 className="date-line"><FormattedDate date={weather.dt}/></h2>
                        <h1 className="time">
                        <span>
                            <FormattedTime date={weather.dt}/>
                        </span>
                        <div className="weather-status">{weather.description}</div>
                        </h1>
                    </div> 
                </div>  
            </div>
            </div>

            {/*SEARCH BAR */}
            
            <div className="col-sm-12 Searchbar">
            <form className="search-bar-container" onSubmit={submitEntry}>
                <div className="row">
                <div className="col-sm-6">
                    <div className="mb-3">
                    <input
                        type="text"
                        className="form-control search-bar"
                        placeholder="Search for Location"
                        onChange={updateEntry}
                    />
                    </div>
                </div>
                <div className="col-sm-6">
                    <span className="spacing">
                    <input type="submit" value="🔍" className="magnifying-glass" />
                    </span>
                </div>
                </div>
            </form>
            </div>


            {/*TEMPERATURES */}

            <div className="Temperatures">
                <div className="row">
                    <div className="col-sm-6 current-temp-status">
                    <h3 className="currently-header">
                        Currently in <span className="city-name">{weather.city_name}</span>
                    </h3>
                    <div className="row">
                        <div className="col-sm-2"></div>

                        <div className="col-sm-4 current-temp-number">
                        <span><ConvertTemperature temp={weather.temp_current}/></span>
                        <img
                            className="header-emoji"
                            src={weather.emoji}
                            alt={weather.description}
                        >
                        </img>
                        </div>
                        <div className="col-sm-4 feels-like-text">
                        Feels Like
                        <div className="row temp-number-curr"><ConvertTemperature temp={weather.feels_like}/></div>
                        </div>

                        <div className="col-sm-2"></div>
                    </div>
                    </div>
                </div>
            </div>

            {/*WEATHER FACTORS */}

            <div className="weather-factors-container">
                <div className="row col-sm-6 current-factors-container">
                    <div >
                    <div className="col-sm curr-wind-section">
                        <span
                            className="factor-header-wind factor-header-colour"
                            role="img"
                            aria-label="partly-cloudy"
                        >
                            WIND 💨
                        </span>
                        <div className="row">
                            <div className="wind-speed-number">
                            {weather.wind}
                            <div className="row wind-speed-number">KM</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm curr-rain-section">
                        <span
                            className="factor-header-colour"
                            role="img"
                            aria-label="rain-umbrella"
                        >
                            POP ☔
                        </span>
                        <div className="row">
                            <div className="rain-number">{Math.trunc(weather.pop)}%</div>
                        </div>
                    </div>
                    <div className="col-sm curr-low-section">
                        <span className="factor-header-colour">LOW <span className="thermo-colour">🌡</span></span>
                        

                        <div className="row">
                            <div className="low-temp-number"><ConvertTemperature temp={weather.low}/></div>
                        </div>
                    </div>
                    <div className="col-sm curr-high-section">
                        <span
                            className="factor-header-colour"
                            role="img"
                            aria-label="partly-cloudy"
                        >
                            HIGH <span className="thermo-colour-high">🌡</span>
                        </span>
                        <div className="row">
                            <div className="high-temp-number"><ConvertTemperature temp={weather.high}/></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        );

    } else {
        return(
        <div className="app-container">
            <div className="Header">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 current-time">
                        <h2 className="date-line">Date</h2>
                        <h1 className="time">
                        <span className="hour">-</span>:
                        <span className="minutes">-</span>
                        <span className="am-pm">-</span>
                        <div className="weather-status">-</div>
                        </h1>
                    </div> 
                </div>  
            </div>
            </div>

            {/*SEARCH BAR */}
            
            <div className="col-sm-12 Searchbar">
            <form className="search-bar-container" onSubmit={submitEntry}>
                <div className="row">
                <div className="col-sm-6">
                    <div className="mb-3">
                    <input
                        type="text"
                        className="form-control search-bar"
                        placeholder="Search for Location"
                        onChange={updateEntry}
                    />
                    </div>
                </div>
                <div className="col-sm-6">
                    <span className="spacing">
                    <input type="submit" value="🔍" className="magnifying-glass" />
                    </span>
                </div>
                </div>
            </form>
            </div>


            {/*TEMPERATURES */}

            <div className="Temperatures">
                <div className="row">
                    <div className="col-sm-6 current-temp-status">
                    <h3 className="currently-header">
                        Currently in <span className="city-name">-</span>
                    </h3>
                    <div className="row">
                        <div className="col-sm-2"></div>

                        <div className="col-sm-4 current-temp-number">
                        -°C{" "}
                        <span
                            className="header-emoji"
                            role="img"
                            aria-label="partly-cloudy"
                        >
                            ⛅
                        </span>
                        </div>
                        <div className="col-sm-4 feels-like-text">
                        Feels Like
                        <div className="row temp-number-curr">-°C</div>
                        </div>

                        <div className="col-sm-2"></div>
                    </div>
                    </div>
                </div>
            </div>

            {/*WEATHER FACTORS */}

            <div className="weather-factors-container">
                <div className="row col-sm-6 current-factors-container">
                    <div >
                    <div className="col-sm curr-wind-section">
                        <span
                            className="factor-header-wind factor-header-colour"
                            role="img"
                            aria-label="partly-cloudy"
                        >
                            WIND 💨
                        </span>
                        <div className="row">
                            <div className="wind-speed-number">
                            -
                            <div className="row wind-speed-number">KM</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm curr-rain-section">
                        <span
                            className="factor-header-colour"
                            role="img"
                            aria-label="rain-umbrella"
                        >
                            POP ☔
                        </span>
                        <div className="row">
                            <div className="rain-number">-%</div>
                        </div>
                    </div>
                    <div className="col-sm curr-low-section">
                        <span className="factor-header-colour">LOW <span className="thermo-colour">🌡</span></span>
                        

                        <div className="row">
                            <div className="low-temp-number">-°C</div>
                        </div>
                    </div>
                    <div className="col-sm curr-high-section">
                        <span
                            className="factor-header-colour"
                            role="img"
                            aria-label="partly-cloudy"
                        >
                            HIGH <span className="thermo-colour-high">🌡</span>
                        </span>
                        <div className="row">
                            <div className="high-temp-number">-°C</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        );
    }
    
} 