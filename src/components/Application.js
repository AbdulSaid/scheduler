import React, { useState, useEffect } from "react";
import axios from "axios";
import DayList from "./DayList";
import Appointment from "components/Appointment";
import "styles/Application.scss";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";

export default function Application(props) {
  const {
    state, 
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  const appointmentObject = getAppointmentsForDay(state, state.day);
  console.log('appointmentObject',appointmentObject)
  const interviewerObject = getInterviewersForDay(state, state.day);

  const appointment = appointmentObject.map((appointmentObject) => {
    const interview = getInterview(state, appointmentObject.interview);
    console.log('interview',interview)
    return (
      <Appointment
        {...appointmentObject}
        key={appointmentObject.id}
        interview={interview}
        interviewers={interviewerObject}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay}/>
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointment}
        <Appointment 
          key="last" 
          time="5pm" 
          bookInterview={bookInterview}
          cancelInterview={cancelInterview} />
      </section>
    </main>
  );
}
