import React, {useState, useEffect} from "react";
import axios from 'axios';
import InterviewerList from "./InterviewerList";
import DayList from "./DayList";
import Appointment from "components/Appointment";
import "styles/Application.scss";
import { getAppointmentsForDay } from "helpers/selectors";




export default function Application(props) {
  // const [day, setDay] = useState('Monday');
  // const [days,setDays] = useState([])
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {}
  })

  const dailyAppointments = [];
  dailyAppointments.map(appointment => {

  })
  const setDay = day => setState({ ...state, day });
   const setDays = days => setState(prev => ({ ...prev, days }));

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('/api/days')),
      Promise.resolve(axios.get('/api/appointments'))
    ])
    .then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data}))
    })
  },[])

  const appointmentObject = getAppointmentsForDay(state,state.day)
  
  const appointment = appointmentObject.map((appointmentObject) => {
    return (
      <Appointment key={appointmentObject.id} {...appointmentObject} />
    )
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
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
      {appointment}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
