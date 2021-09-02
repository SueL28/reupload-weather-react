import React from "react";

export default function FormattedTime(props){

    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();
    let amPm = "";

    if (hour < 12){
        amPm="AM";
    } else {
        amPm="PM";
    } 


    if (hour < 10){
        hour = `0${hour}`
    }
    
    if (minutes < 10){
        minutes = `0${minutes}`
    }

    if (hour === "00") {
        hour = "12";
      }
      if (hour === 13) {
        hour = "01";
      }
      if (hour === 14) {
        hour = "02";
      }
      if (hour === 15) {
        hour = "03";
      }
      if (hour === 16) {
        hour = "04";
      }
      if (hour === 17) {
        hour = "05";
      }
      if (hour === 18) {
        hour = "06";
      }
      if (hour === 19) {
        hour = "07";
      }
      if (hour === 20) {
        hour = "08";
      }
      if (hour === 21) {
        hour = "09";
      }
      if (hour === 22) {
        hour = "10";
      }
      if (hour === 23) {
        hour = "11";
      }

    return (
        <div>
            <span className="hour">{hour}</span>:<span className="minutes">{minutes}</span><span className="am-pm">{amPm}</span>
        </div>
    );
     

}