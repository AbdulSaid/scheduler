import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  console.log("props for daylist",props)
  const parsedDays = props.days.map(day => {
    return (
    <DayListItem
      key={day.id}
      name={day.name}
      selected={day.name === props.day} 
      setDay = {props.setDay} 
    />
    )
    })

  return <ul>{parsedDays}</ul>;
}
