function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  
  //go through appointments object and return an array of all the objects with that id
  const matchAppointment = (appointments, ids) => {
    const match = ids.map(id => appointments[id])
    return match
  }
  //make new array to hold the the appointment ID
  const appointmentArray = []
  //go through all the days and get one day object
  state.days.map(dayObj => {
    //if the day matches
    if (dayObj.name === day) {
      //push the appointments ID to the array above
      dayObj.appointments.map(appointID => appointmentArray.push(appointID))
    }
  })
  // insert all the appointments and the array of IDs of the appointment to the function to get the matches
  return matchAppointment(state.appointments,appointmentArray);
}

function getInterview(state, interview) {
  // if there isn't a interview object return null
  if (!interview) {
    return null;
  }
  // get the interview info from the state and interview
  const interviewerInfo = state.interviewers[interview.interviewer]

  // return the final object
  const interviewObject = {
    student: interview.student,
    interviewer: interviewerInfo
  }
  return interviewObject
  
}

module.exports = { getAppointmentsForDay, getInterview }