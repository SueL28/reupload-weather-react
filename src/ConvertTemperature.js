import React, {useState} from "react";
import "./ConvertTemperature.css"

export default function ConvertTemperature(props){
    const [unit, setUnits] = useState("celsius");

    function convertToFahrenheit(event){
        event.preventDefault();
        setUnits("fahrenheit")
    }

    function convertToCelsius(event){
        event.preventDefault();
        setUnits("celsius")
    }


    if (unit=== "celsius"){

        return(
            <div className="conversion-container">
            <span>{props.temp}</span><span className="conversion">°C | <a href="/" onClick={convertToFahrenheit}>°F</a></span>
            </div>
        );
    } else{
        return(
            <div className="conversion-container">
            <span>{(Math.round(props.temp  * (9 / 5) + 32))}</span><span className="conversion"><a href="/" onClick={convertToCelsius}>°C</a> | °F</span>
            </div>
        )
    }


}